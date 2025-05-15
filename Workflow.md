
# 📘 Gradlyft API Documentation

This document outlines the complete API workflow and lifecycle for the Gradlyft backend.

---

## ✅ 1. Authentication

### `POST /api/signup`
- **Description**: Register a user (Student/Employer/Admin)
- **Body**:
```json
{
  "email": "user@gradlyft.com",
  "password": "123456",
  "role": "STUDENT",
  "profile": {
    "name": "...",
    "college": "...",
    "degree": "...",
    "year": 2,
    "interests": "AI"
  }
}
```
- **Response**: 201 Created / 409 Conflict

### `POST /api/token`
- **Description**: Manual login, sets cookie with JWT
- **Body**:
```json
{ "email": "user@gradlyft.com", "password": "123456" }
```
- **Response**: 200 OK with `gradlyft_token` cookie

---

## ✅ 2. Jobs

### `POST /api/jobs`
- **Who**: EMPLOYER only
- **Body**:
```json
{
  "title": "...",
  "description": "...",
  "type": "Internship",
  "duration": "3 months",
  "location": "Remote",
  "stipend": "5000",
  "skills": "React, JS",
  "applyMethod": "mailto:hr@company.com"
}
```
- **Response**: 201 Created

### `GET /api/jobs`
- **Query Filters**: `type`, `location`, `remote`, etc.
- **Response**: List of jobs

---

## ✅ 3. Bookmarks

### `POST /api/bookmarks`
- **Who**: STUDENT
- **Body**:
```json
{ "jobId": "job-id" }
```
- **Response**:
```json
{ "bookmarked": true } // or false if unbookmarked
```

---

## ✅ 4. Events

### `POST /api/events` (Admin Only)
```json
{
  "title": "...",
  "date": "2025-05-20",
  "time": "2 PM",
  "mode": "ONLINE",
  "description": "..."
}
```

### `POST /api/events/register` (Student Only)
```json
{ "eventId": "event-id" }
```
- `409 Conflict` if already registered

---

## ✅ 5. Upskilling

### `POST /api/upskilling` (Admin)
```json
{
  "title": "Resume Building",
  "category": "Resume",
  "type": "PDF",
  "fileUrl": "https://..."
}
```

### `GET /api/upskilling` (Student)
- Returns list of resources

---

## ✅ 6. Analytics (Admin)

### `GET /api/admin/analytics`
Returns:
```json
{
  "averageSessionTime": 124,
  "topVisitedPages": [{ "page": "/jobs", "count": 23 }],
  "activeUsers": 12,
  "mostBookmarkedJobs": [{ "jobId": "...", "count": 5 }]
}
```

---

## ✅ 7. Tracking

### `POST /api/track`
```json
{
  "page": "/dashboard",
  "action": "visit",
  "duration": 30
}
```

---

## 🔐 Token Extraction Logic
```ts
const cookieHeader = req.headers.get("cookie") || "";
const token = jwt.verify(parsedCookies["gradlyft_token"], process.env.NEXTAUTH_SECRET);
```

---

## 🔁 Common Error Format
```json
{ "error": "Unauthorized" }
```
