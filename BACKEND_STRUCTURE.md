# Backend Architecture & Database Structure

**Template version:** 1.0 (documentation guide v1.0, 2025-02-05)

## 1. Architecture Overview

### System Architecture

- **Pattern**: RESTful API with server-side rendering (SSR)
- **Authentication**: JWT-based with HTTP-only cookies
- **Data Flow**: Client → API Gateway → Business Logic → Database
- **Caching Strategy**: Redis for sessions and frequent queries

-----

## 2. Database Schema

### Database: PostgreSQL 16.1

- **ORM**: Prisma 5.8.1
- **Naming Convention**: snake_case for tables/columns
- **Timestamps**: All tables have created_at, updated_at

### Entity Relationship Diagram

[ASCII or description of relationships]

-----

## 3. Tables & Relationships

### Table: `users`

**Purpose**: Stores user account information

|Column        |Type                 |Constraints                            |Description              |
|--------------|---------------------|---------------------------------------|-------------------------|
|id            |UUID                 |PRIMARY KEY, DEFAULT uuid_generate_v4()|Unique identifier        |
|email         |VARCHAR(255)         |UNIQUE, NOT NULL                       |User email (login)       |
|password_hash |VARCHAR(255)         |NOT NULL                               |Bcrypt hashed password   |
|full_name     |VARCHAR(255)         |NOT NULL                               |User's full name         |
|avatar_url    |TEXT                 |NULL                                   |S3 URL to profile image  |
|email_verified|BOOLEAN              |DEFAULT FALSE                          |Email verification status|
|role          |ENUM('user', 'admin')|DEFAULT 'user'                         |User role                |
|last_login_at |TIMESTAMP            |NULL                                   |Last successful login    |
|created_at    |TIMESTAMP            |DEFAULT NOW()                          |Account creation date    |
|updated_at    |TIMESTAMP            |DEFAULT NOW()                          |Last update timestamp    |

**Indexes**:

- `idx_users_email` ON (email)
- `idx_users_created_at` ON (created_at)

**Constraints**:

- email must be valid format (checked in application)
- password_hash must be bcrypt with 12 rounds

-----

### Table: `posts`

**Purpose**: User-generated content

|Column      |Type                                  |Constraints                              |Description            |
|------------|--------------------------------------|-----------------------------------------|-----------------------|
|id          |UUID                                  |PRIMARY KEY                              |Unique identifier      |
|user_id     |UUID                                  |FOREIGN KEY → users(id) ON DELETE CASCADE|Author of post         |
|title       |VARCHAR(500)                          |NOT NULL                                 |Post title             |
|content     |TEXT                                  |NOT NULL                                 |Post body (markdown)   |
|slug        |VARCHAR(600)                          |UNIQUE, NOT NULL                         |URL-friendly identifier|
|status      |ENUM('draft', 'published', 'archived')|DEFAULT 'draft'                          |Publication status     |
|published_at|TIMESTAMP                             |NULL                                     |First publication date |
|view_count  |INTEGER                               |DEFAULT 0                                |Number of views        |
|created_at  |TIMESTAMP                             |DEFAULT NOW()                            |Creation timestamp     |
|updated_at  |TIMESTAMP                             |DEFAULT NOW()                            |Last edit timestamp    |

**Indexes**:

- `idx_posts_user_id` ON (user_id)
- `idx_posts_slug` ON (slug)
- `idx_posts_status` ON (status)
- `idx_posts_published_at` ON (published_at DESC)

**Relationships**:

- `user_id` → `users.id` (many-to-one)
- One post has many comments
- One post has many likes

-----

### Table: `comments`

**Purpose**: User comments on posts

|Column           |Type     |Constraints                                       |Description         |
|-----------------|---------|--------------------------------------------------|--------------------|
|id               |UUID     |PRIMARY KEY                                       |Unique identifier   |
|post_id          |UUID     |FOREIGN KEY → posts(id) ON DELETE CASCADE         |Parent post         |
|user_id          |UUID     |FOREIGN KEY → users(id) ON DELETE CASCADE         |Comment author      |
|content          |TEXT     |NOT NULL                                          |Comment text        |
|parent_comment_id|UUID     |FOREIGN KEY → comments(id) ON DELETE CASCADE, NULL|For threaded replies|
|is_deleted       |BOOLEAN  |DEFAULT FALSE                                     |Soft delete flag    |
|created_at       |TIMESTAMP|DEFAULT NOW()                                    |Creation timestamp  |
|updated_at       |TIMESTAMP|DEFAULT NOW()                                    |Last edit timestamp |

**Indexes**:

- `idx_comments_post_id` ON (post_id)
- `idx_comments_user_id` ON (user_id)
- `idx_comments_parent_id` ON (parent_comment_id)

**Relationships**:

- `post_id` → `posts.id` (many-to-one)
- `user_id` → `users.id` (many-to-one)
- `parent_comment_id` → `comments.id` (self-referential, for nested comments)

-----

### Table: `likes`

**Purpose**: Track user likes on posts

|Column    |Type     |Constraints                              |Description       |
|----------|---------|-----------------------------------------|------------------|
|id        |UUID     |PRIMARY KEY                              |Unique identifier |
|user_id   |UUID     |FOREIGN KEY → users(id) ON DELETE CASCADE|User who liked    |
|post_id   |UUID     |FOREIGN KEY → posts(id) ON DELETE CASCADE|Liked post        |
|created_at|TIMESTAMP|DEFAULT NOW()                            |When like occurred|

**Indexes**:

- `idx_likes_user_post` ON (user_id, post_id) UNIQUE
- `idx_likes_post_id` ON (post_id)

**Constraints**:

- Unique combination of user_id + post_id (one like per user per post)

**Relationships**:

- `user_id` → `users.id`
- `post_id` → `posts.id`

-----

### Table: `sessions`

**Purpose**: Track active user sessions (for JWT refresh tokens)

|Column       |Type        |Constraints                              |Description         |
|-------------|------------|-----------------------------------------|--------------------|
|id           |UUID        |PRIMARY KEY                              |Unique identifier   |
|user_id      |UUID        |FOREIGN KEY → users(id) ON DELETE CASCADE|Session owner       |
|refresh_token|VARCHAR(255)|UNIQUE, NOT NULL                         |Hashed refresh token|
|user_agent   |TEXT        |NULL                                     |Browser/device info |
|ip_address   |VARCHAR(45) |NULL                                     |IP address         |
|expires_at   |TIMESTAMP   |NOT NULL                                 |Token expiration    |
|created_at   |TIMESTAMP   |DEFAULT NOW()                            |Session start       |

**Indexes**:

- `idx_sessions_user_id` ON (user_id)
- `idx_sessions_refresh_token` ON (refresh_token)
- `idx_sessions_expires_at` ON (expires_at)

**Cleanup**:

- Cron job runs daily to delete expired sessions

-----

## 4. API Endpoints

### Authentication Endpoints

#### POST /api/auth/register

**Purpose**: Create new user account

**Request Body**:

```json
{
  "email": "user@example.com",
  "password": "SecurePass123!",
  "full_name": "John Doe"
}
```

**Validation**:

- email: valid format, unique in database
- password: min 8 chars, at least 1 uppercase, 1 lowercase, 1 number, 1 symbol
- full_name: 2-255 characters

**Response (201)**:

```json
{
  "message": "Account created. Please verify your email.",
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "full_name": "John Doe"
  }
}
```

**Errors**:

- 400: Validation failed
- 409: Email already exists

**Side Effects**:

- Creates user in database
- Sends verification email
- Logs registration event

-----

#### POST /api/auth/login

**Purpose**: Authenticate user and return JWT tokens

**Request Body**:

```json
{
  "email": "user@example.com",
  "password": "SecurePass123!"
}
```

**Response (200)**:

```json
{
  "access_token": "eyJhbGciOiJIUzI1...",
  "refresh_token": "eyJhbGciOiJIUzI1...",
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "full_name": "John Doe",
    "avatar_url": "https://...",
    "role": "user"
  }
}
```

**Cookies Set**:

- `access_token`: HTTP-only, Secure, SameSite=Strict, Max-Age=15min
- `refresh_token`: HTTP-only, Secure, SameSite=Strict, Max-Age=7days

**Errors**:

- 401: Invalid credentials
- 403: Email not verified
- 429: Too many login attempts (rate limited)

**Side Effects**:

- Updates last_login_at
- Creates session record
- Logs successful login

-----

#### POST /api/auth/refresh

**Purpose**: Get new access token using refresh token

**Cookies Required**: `refresh_token`

**Response (200)**:

```json
{
  "access_token": "eyJhbGciOiJIUzI1..."
}
```

**Errors**:

- 401: Invalid or expired refresh token

-----

### Post Endpoints

#### GET /api/posts

**Purpose**: List published posts with pagination

**Query Parameters**:

- `page`: Page number (default: 1)
- `limit`: Items per page (max: 50, default: 20)
- `sort`: `newest` | `oldest` | `popular` (default: newest)
- `author`: Filter by user_id

**Response (200)**:

```json
{
  "posts": [
    {
      "id": "uuid",
      "title": "Post Title",
      "slug": "post-title",
      "content": "Post content...",
      "author": {
        "id": "uuid",
        "full_name": "John Doe",
        "avatar_url": "https://..."
      },
      "published_at": "2024-01-15T10:00:00Z",
      "view_count": 123,
      "like_count": 45,
      "comment_count": 12
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 100,
    "pages": 5
  }
}
```

**Caching**:

- Cache key: `posts:list:page:{page}:sort:{sort}`
- TTL: 5 minutes
- Invalidate on: New post published, post updated/deleted

-----

#### POST /api/posts

**Purpose**: Create new post (requires authentication)

**Headers Required**:

- `Authorization: Bearer {access_token}`

**Request Body**:

```json
{
  "title": "Post Title",
  "content": "Post content in markdown...",
  "status": "draft" | "published"
}
```

**Validation**:

- title: 5-500 characters
- content: 1-50,000 characters
- status: enum value
- Slug auto-generated from title

**Response (201)**:

```json
{
  "post": {
    "id": "uuid",
    "title": "Post Title",
    "slug": "post-title",
    "status": "draft",
    "created_at": "2024-01-15T10:00:00Z"
  }
}
```

**Errors**:

- 401: Not authenticated
- 400: Validation failed
- 409: Slug already exists

-----

## 5. Authentication & Authorization

### JWT Token Structure

**Access Token** (15 minute expiry):

```json
{
  "sub": "user_id",
  "email": "user@example.com",
  "role": "user",
  "iat": 1234567890,
  "exp": 1234568790
}
```

**Refresh Token** (7 day expiry):

```json
{
  "sub": "user_id",
  "session_id": "session_uuid",
  "iat": 1234567890,
  "exp": 1235172690
}
```

### Authorization Levels

#### Public Routes (No auth required)

- GET /api/posts
- GET /api/posts/:slug
- POST /api/auth/register
- POST /api/auth/login

#### Authenticated Routes (Valid access token)

- POST /api/posts
- PUT /api/posts/:id
- DELETE /api/posts/:id
- POST /api/comments
- POST /api/likes

#### Admin Routes (role: admin)

- DELETE /api/users/:id
- PUT /api/posts/:id (any post)

### Password Security

- Hashing: bcrypt with 12 rounds
- Never stored in plain text
- Never returned in API responses
- Reset via email verification only

-----

## 6. Data Validation Rules

### Email Validation

```javascript
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
// Additional checks:
// - Max length: 255 chars
// - No disposable email domains
// - Must be unique in database
```

### Password Requirements

```javascript
// Minimum requirements:
// - Length: 8-128 characters
// - At least 1 uppercase letter
// - At least 1 lowercase letter
// - At least 1 number
// - At least 1 special character (!@#$%^&*)
// - No common passwords (check against list)
```

### Content Sanitization

- Strip HTML tags from user input
- Allow markdown in post content
- Sanitize before storage and before display
- Max lengths enforced at DB level

-----

## 7. Error Handling

### Error Response Format

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Validation failed",
    "details": [
      {
        "field": "email",
        "message": "Email already exists"
      }
    ]
  }
}
```

### Error Codes

- `VALIDATION_ERROR`: 400
- `UNAUTHORIZED`: 401
- `FORBIDDEN`: 403
- `NOT_FOUND`: 404
- `CONFLICT`: 409
- `RATE_LIMITED`: 429
- `SERVER_ERROR`: 500

-----

## 8. Caching Strategy

### Cache Layers

1. **Redis** (most frequent)
- User sessions
- API rate limits
- Frequently accessed posts
1. **Database Query Cache**
- Prisma query caching
- TTL: 5 minutes

### Cache Keys

- Sessions: `session:{refresh_token}`
- Posts list: `posts:list:page:{page}:sort:{sort}`
- Post detail: `post:slug:{slug}`
- User profile: `user:id:{user_id}`

### Cache Invalidation

- On UPDATE: Invalidate related cache keys
- On DELETE: Invalidate + remove from cache
- On CREATE: Invalidate list caches

-----

## 9. Rate Limiting

### Limits by Endpoint

- Login: 5 requests per 15 minutes per IP
- Register: 3 requests per hour per IP
- API (authenticated): 100 requests per minute
- API (public): 50 requests per minute

### Implementation

- Store in Redis with sliding window
- Return 429 with Retry-After header
- Block IP after 10 consecutive 429s

-----

## 10. Database Migrations

### Migration Strategy

- Use Prisma Migrate
- Never edit migrations after deployed
- Always create new migration for changes
- Test on staging before production

### Migration Process

```bash
# 1. Create migration
prisma migrate dev --name add_posts_table

# 2. Test locally

# 3. Deploy to staging
prisma migrate deploy

# 4. Test on staging

# 5. Deploy to production
prisma migrate deploy
```

-----

## 11. Backup & Recovery

### Backup Strategy

- **Frequency**: Daily automated backups at 2 AM UTC
- **Retention**: 30 days
- **Location**: AWS S3 with encryption
- **Type**: Full database dump + WAL archiving

### Recovery Procedure

1. Identify backup timestamp
1. Restore from S3
1. Apply WAL logs if needed
1. Verify data integrity
1. Update application config
1. Test critical paths

-----

## 12. API Versioning

### Current Version: v1

### Versioning Strategy

- URL-based: `/api/v1/posts`
- No version in URL defaults to v1
- Maintain backwards compatibility for 6 months
- Deprecation warnings in headers

### Breaking Changes

- Announce 3 months in advance
- Provide migration guide
- Support old version during transition
- Monitor usage before deprecation
