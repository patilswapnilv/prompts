# Application Flow Documentation

**Template version:** 1.0 (documentation guide v1.0, 2025-02-05)

## 1. Entry Points
### Primary Entry Points
- **Direct URL**: [What happens when user types URL]
- **Landing Page**: [What the user sees first]
- **Deep Links**: [From email, notifications, ads]
- **OAuth/Social Login**: [Third-party entry points]

### Secondary Entry Points
- **Search Engine**: [SEO landing pages]
- **Marketing Campaigns**: [Campaign-specific entry]

## 2. Core User Flows

### Flow 1: [Flow Name - e.g., "User Registration"]
**Goal**: [What user is trying to accomplish]
**Entry Point**: [Where flow starts]
**Frequency**: [How often this happens]

#### Happy Path
1. **Page: Landing Page**
   - Elements: [Hero section, CTA button]
   - User Action: Clicks "Sign Up"
   - Trigger: Navigate to registration page

2. **Page: Registration Form**
   - Elements: [Email input, Password input, Submit button]
   - User Actions:
     - Enters email
     - Enters password (with validation)
   - Validation:
     - Email format check
     - Password strength requirements
   - Trigger: Submits form

3. **System Action**: Creates user account

4. **Page: Email Verification**
   - Elements: [Verification message, Resend link]
   - User Action: Clicks verification link in email

5. **Page: Welcome Dashboard**
   - Elements: [Onboarding checklist, Quick actions]
   - Success State: User is logged in and onboarded

#### Error States
- **Invalid Email**
  - Display: Inline error message
  - Action: User corrects and resubmits

- **Email Already Exists**
  - Display: Modal with login link
  - Action: Redirect to login

- **Weak Password**
  - Display: Password strength indicator
  - Action: User strengthens password

#### Edge Cases
- User closes browser mid-registration → Save form data, show "Continue" on return
- Email verification link expires → Provide resend option
- User registers but doesn't verify → Send reminder after 24 hours

#### Exit Points
- Success: Dashboard (logged in)
- Abandonment: Close/navigate away
- Redirect: Login page if account exists

---

### Flow 2: [Flow Name - e.g., "Product Purchase"]
[Same detailed structure]

---

## 3. Navigation Map

### Primary Navigation

```
Home
├── Products
│   ├── Category 1
│   │   └── Product Detail
│   │       ├── Add to Cart
│   │       └── Reviews
│   └── Category 2
├── Cart
│   ├── Checkout
│   │   ├── Shipping Info
│   │   ├── Payment
│   │   └── Order Confirmation
│   └── Continue Shopping → Products
├── Account
│   ├── Profile
│   ├── Orders
│   └── Settings
└── Support
```

### Navigation Rules
- **Authentication Required**: [Pages that require login]
- **Redirect Logic**: [When to redirect to login, when to show modal]
- **Back Button Behavior**: [Which pages preserve state]

## 4. Screen Inventory

### Screen: [Screen Name]
- **Route**: `/path/to/screen`
- **Access**: [Public/Authenticated/Admin]
- **Purpose**: [What user accomplishes here]
- **Key Elements**:
  - [Element 1]
  - [Element 2]
- **Actions Available**:
  - [Action 1] → Leads to [Screen/State]
  - [Action 2] → Leads to [Screen/State]
- **State Variants**: [Loading, Empty, Error, Success]

## 5. Interaction Patterns

### Pattern: Form Submission
- Validation: Client-side (instant) + Server-side (on submit)
- Loading State: Disabled button, spinner
- Success: Redirect OR inline success message
- Error: Inline error messages, keep form data

### Pattern: Infinite Scroll
- Trigger: User scrolls to 80% of page
- Loading: Skeleton screens
- End: "No more items" message

## 6. Decision Points

### Decision: User Authentication Status

```
IF user is NOT logged in
THEN show: Login CTA
AND disable: Account features
ELSE IF user IS logged in
THEN show: Account menu
AND enable: Full features
```

### Decision: Cart State

```
IF cart is empty
THEN show: "Start Shopping" CTA
ELSE IF cart has items
THEN show: Checkout button
AND display: Item count badge
```

## 7. Error Handling Flows

### 404 Not Found
- Display: Custom 404 page
- Actions: Search, Home link, Popular pages
- Log: 404 errors for fixing broken links

### 500 Server Error
- Display: Friendly error page
- Actions: Retry button, Support contact
- Fallback: Save user's work if possible

### Network Offline
- Display: Offline banner
- Actions: Queue actions for later
- Recovery: Auto-retry when online

## 8. Responsive Behavior

### Mobile-Specific Flows
- Navigation: Hamburger menu instead of top nav
- Forms: One field per screen
- Actions: Bottom sheet for selections

### Desktop-Specific Flows
- Navigation: Full menu visible
- Forms: Multi-column layouts
- Actions: Modals for quick actions

## 9. Animation & Transitions

### Page Transitions
- **Navigation**: Fade in/out (300ms)
- **Modal**: Slide up from bottom (200ms)
- **Drawer**: Slide from side (250ms)

### Micro-interactions
- **Button Click**: Scale(0.95) + Ripple
- **Form Focus**: Border highlight
- **Success**: Checkmark animation
