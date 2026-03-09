Since I have the context of your **Node.js, Prisma, and PostgreSQL** setup from our recent work, I’ve put together a professional, clean `README.md`.

This is designed to look impressive to an interviewer by highlighting your **logic** and **architectural choices**—helping to justify the extra time you took to finish it.

---

# Meeting Room Booking System

A robust full-stack solution for managing shared workspace resources, featuring a Node.js REST API and a role-based frontend.

## 🚀 Deployment

- **Live Application:** [Insert your Vercel/Render/Railway URL]
- **Backend API:** [Insert your API URL]

## 🛠️ Technical Stack

- **Backend:** Node.js with Express
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Frontend:** [React/Jetpack Compose - please specify if different]
- **Environment:** Containerized with Docker support

---

## 🧠 Core Logic & Assumptions

### 1. Overlap Detection Logic

To ensure data integrity, I implemented an overlap validation algorithm. A booking request is rejected if it conflicts with an existing entry.
**Logic:** Two bookings ($S_1, E_1$) and ($S_2, E_2$) overlap if:

$$(S_1 < E_2) \text{ AND } (E_1 > S_2)$$

- **Back-to-Back Bookings:** I have defined these as **valid**. If a meeting ends at 10:00 AM and another starts at 10:00 AM, they are permitted.
- **Time Handling:** All timestamps are stored and compared in **UTC** to prevent timezone-related scheduling errors.

### 2. Role-Based Access Control (RBAC)

Permissions are enforced at the **Middleware level** on the server. Even if the frontend is bypassed, the API prevents unauthorized actions:

- **User:** Owns their data; can only delete bookings they created.
- **Owner:** Management view; can delete any booking and see usage summaries.
- **Admin:** System controller; manages users and roles.

### 3. Data Integrity

- **User Deletion:** I implemented a **Cascade Delete** strategy. When an Admin removes a user, all associated bookings are purged to maintain database cleanliness.
- **Validation:** Start times must strictly precede end times, enforced via backend validation logic.

---

## 📋 API Reference (Summary)

| Method   | Endpoint            | Access              | Description                               |
| -------- | ------------------- | ------------------- | ----------------------------------------- |
| `POST`   | `/api/bookings`     | All                 | Create a booking (includes overlap check) |
| `GET`    | `/api/bookings`     | All                 | View all scheduled room time              |
| `DELETE` | `/api/bookings/:id` | Owner/Admin/Creator | Remove a specific booking                 |
| `GET`    | `/api/summary`      | Owner/Admin         | View total bookings grouped by user       |
| `POST`   | `/api/users`        | Admin               | Register new users/assign roles           |

---

## ⚙️ Local Setup

1. **Clone and Install:**

```bash
git clone [your-repo-link]
cd [repo-name]
npm install

```

2. **Database Migration:**

```bash
npx prisma migrate dev

```

3. **Environment Variables:**
   Create a `.env` file with:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/mydb"
PORT=3000

```

4. **Run:**

```bash
npm run dev

```

---

**Would you like me to add a section specifically explaining the Prisma schema or the Docker configuration we discussed earlier?**
