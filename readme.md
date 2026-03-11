# Meeting Room Booking System

A robust full-stack solution for managing shared workspace resources, featuring a Node.js REST API and a role-based frontend.

## Deployment

##### #Default passwords are the same as usernames in lowercase.
- **Live Application:** https://meeting-room-request-system.onrender.com
- **Backend API:** https://meeting-room-request-system-0awa.onrender.com


## Technical Stack

- **Backend:** Node.js with Express
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Frontend:** React Js with Tailwind CSS and Daisy UI as components library
- **Environment:** Containerized with Docker support

---

## Core Logic & Assumptions

### 1. Overlap Detection Logic

To prevent logistical friction, the system enforces a mandatory 10-minute buffer between every booking. Back-to-back bookings (e.g., 10:00 AM to 11:00 AM and 11:00 AM to 12:00 PM) are not allowed.

Logic: A new booking (S_new,E_new) is only valid if it does not conflict with an existing booking (S_ext,E_ext) plus the 10-minute transition window.
A conflict is detected if:

$$(S_1 < E_2 + 10 mins) \text{ AND } (E_1 > S_2 - 10 mins)$$

- **Time Handling:** All timestamps are stored and compared in **UTC** to prevent timezone-related scheduling errors.

### 2. Role-Based Access Control (RBAC)

Permissions are enforced at the **Middleware level** on the server. Even if the frontend is bypassed, the API prevents unauthorized actions:

- **User:** Owns their data; can only delete bookings they created.
- **Owner:** Management view; can delete any booking and see usage summaries.
- **Admin:** System controller; manages users and roles.

### 3. Data Integrity

- **User Deletion:** Instead of purging records, the Admin updates the user status from **ACTIVE** to **INACTIVE**.
- **Automated Cleanup:** When a user is deactivated, the system automatically transitions all of that user's **CONFIRMED** bookings to **CANCELLED** status.
- **Validation:** Server-side checks ensure that **startTime** is always before **endTime** and that **INACTIVE** users cannot perform any new actions.

---

## API Reference (Summary)

| Method   | Endpoint                      | Access                | Description                                                                      |
| -------- | ----------------------------- | --------------------- | -------------------------------------------------------------------------------- |
| `POST`   | `/api/auth`                   | Public                | Authenticates user and initializes session.                                      |
| `GET`    | `/api/auth/logout`            | All                   | Terminates session and clears the authentication cookie.                         |
| `GET`    | `/api/auth/check`             | All                   | Validates the current session token integrity.                                   |
| `GET`    | `/api/users`                  | All                   | Retrieves a list of all system users.                                            |
| `GET`    | `/api/users/available`        | All                   | Fetches a filtered list of users with `ACTIVE` status.                           |
| `POST`   | `/api/users`                  | Admin                 | Registers a new user and assigns system roles.                                   |
| `PATCH`  | `/api/users`                  | Admin, Creator        | Updates user profile details or account metadata.                                |
| `DELETE` | `/api/users?userId=:id`       | Admin                 | **Soft Delete:** Deactivates account and cancels all associated future bookings. |
| `GET`    | `/api/bookings`               | All                   | Lists bookings (Defaults to user-specific; Owner/Admin see all).                 |
| `POST`   | `/api/bookings`               | All                   | Schedules a new reservation (Enforces 10-min buffer & state checks).             |
| `PATCH`  | `/api/bookings`               | Admin, Owner, Creator | Modifies details of an existing `CONFIRMED` booking.                             |
| `DELETE` | `/api/bookings?bookingId=:id` | Admin, Owner, Creator | Updates booking status to `CANCELLED`.                                           |
| `GET`    | `/api/rooms`                  | All                   | Lists all meeting rooms available in the system.                                 |
| `POST`   | `/api/rooms`                  | Admin                 | Configures and adds a new room to the inventory.                                 |

---

# Local Setup

## Full deployment

**Clone and Run:**

```bash
git clone https://github.com/phy0hk/meeting-room-request-system
cd meeting-room-request-system
cp .env.example .env
docker compose --build -d
```

## Backend deployment

1 . **Clone and Run**

```bash
git clone https://github.com/phy0hk/meeting-room-request-system
cd meeting-room-request-system/backend
cp .env.example .env
```

2 . **Deployment**

#### Manual

```bash
npm install
# Migrate database if it's not already done
npx prisma migrate depoly
npx prisma generate
npm run build
npm start
```

#### With docker

```bash
docker build -t meeting-backend:latest .
docker run -d --name meeting-backend -p 3000:3000 meeting-backend:latest
```

## Frontend deployment

1 . **Clone and Run**

```bash
git clone https://github.com/phy0hk/meeting-room-request-system
cd meeting-room-request-system/frontend
```

2 . **Deployment**

#### Manual

```bash
npm install
npm run preview
```

### With docker

```bash
docker build -t meeting-frontend:latest .
docker run -d --name meeting-frontend -p 5000:5000 meeting-frontend:latest
```

---
