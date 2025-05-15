# Gradlyft Backend Setup Guide

This guide provides all commands and steps to **set up and test the Gradlyft backend APIs**.

---

## ✅ 1. Clone the Project

```bash
git clone https://github.com/NamanBhatia-NB/gradlyft-backend
cd Gradlyft
```

---

## ✅ 2. Install Dependencies

```bash
npm install
```

---

## ✅ 3. Set Up PostgreSQL Database

Make sure PostgreSQL is installed and running.

Create a new database:

```bash
createdb -U postgres gradlyft_db
```

> If `createdb` doesn't work, create the database manually via pgAdmin or psql.

---

## ✅ 4. Configure Environment Variables

Create a `.env` file in the root directory with:

```env
DATABASE_URL="postgresql://postgres:<your_password>@localhost:5432/gradlyft_db"
NEXTAUTH_SECRET="your_super_secret_string"   # openssl rand -base64 32
```

- Replace `<your_password>` with your actual PostgreSQL password.
- To create your NEXTAUTH_SECRET , use this command :
```
openssl rand -base64 32
```
---

## ✅ 5. Prisma Setup

```bash
npx prisma format
npx prisma generate
npx prisma migrate dev --name init
```

---

## ✅ 6. Run the Development Server

Add this to `package.json` if missing:

```json
"scripts": {
  "dev": "next dev"
}
```

Then run:

```bash
npm run dev
```

---

## ✅ 7. Seed Users

Use Postman or a REST client to call:

```
POST /api/signup
```

### Sample Payloads:

**Admin**

```json
{
  "email": "admin@gradlyft.com",
  "password": "admin123",
  "role": "ADMIN",
  "employer": { "name": "Admin", "company": "Gradlyft", "designation": "CTO" }
}
```

**Employer**

```json
{
  "email": "employer@gradlyft.com",
  "password": "employer123",
  "role": "EMPLOYER",
  "employer": { "name": "John Doe", "company": "Acme", "designation": "Manager" }
}
```

**Student**

```json
{
  "email": "student@gradlyft.com",
  "password": "student123",
  "role": "STUDENT",
  "student": {
    "name": "Jane Student",
    "college": "ABC University",
    "degree": "B.Tech",
    "year": 2025,
    "interests": "AI, Web Dev",
    "cvUrl": "https://example.com/cv.pdf"
  }
}
```

---

## ✅ 8. Login (Token-Based)

```
POST /api/token
```

Payload:

```json
{
  "email": "employer@gradlyft.com",
  "password": "employer123"
}
```

**Returns a JWT Token**. Save this for future requests.

---

## ✅ 9. Using the Token

Send token as:

* `Authorization: Bearer <token>` header, or
* `Cookie: gradlyft_token=<token>`

Used in routes like:

* `/api/jobs`
* `/api/bookmarks`
* `/api/events/register`
* `/api/admin/analytics`

---

## ✅ 10. Admin Analytics

```
GET /api/admin/analytics
```

Returns:

* average session duration
* most visited pages
* number of users
* most bookmarked jobs

---

## ✅ 11. Session Tracking

```
POST /api/track
```

Payload:

```json
{
  "page": "/dashboard",
  "action": "visit",
  "duration": 120
}
```

Call this to log user activity.

---

## 🧩 Miscellaneous

* **Reset DB**:

```bash
npx prisma migrate reset
```

* **Prisma Studio (GUI)**:
- To view Database on localhost:5555
```bash
npx prisma studio
```

---

You're all set to use the Gradlyft backend!
