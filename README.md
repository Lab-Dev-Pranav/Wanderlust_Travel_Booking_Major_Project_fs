# 🏡 MAJOR-PRO Event & Property Booking Platform

A modern solution for property/event bookings, user management, and seamless payment workflows.

---

## 🗂️ Overview

MAJOR-PRO is a full-featured platform for discovering, booking, and managing event venues or properties.  
**Key qualities:** User-friendly, secure, and built for real-world event needs.

---

## 🚀 Features

- **🏠 Property & Venue Listings:**  
  Browse listings with images, pricing, capacity, and owner info.

- **📅 Booking System:**  
  - Select dates, number of people, instant price (with GST).
  - Bookings held for limited time (e.g., 24h/5d) until payment.
  - Auto-cancel if payment not made in time.

- **🔒 User Authentication:**  
  Secure login/signup, session management, profile pages.

- **👤 Profile Management:**  
  View/cancel/pay for bookings, real-time status.

- **💳 Payment Workflow:**  
  - "Pay Now" for pending bookings.
  - Status updates to "confirmed" after payment.
  - Expiry timer & auto-cancel for unpaid bookings.

- **🛠️ Admin & Owner Controls:**  
  Manage listings, view all bookings, moderate users.

- **📱 Responsive UI:**  
  Bootstrap 5 & custom CSS.

---

## 🏗️ Project Structure

```
controllers/
  user.js
  listing.js
  booking.js
models/
  user.js
  listing.js
  booking.js
routes/
  user.js
  listing.js
  booking.js
views/
  listings/
  bookings/
  users/
public/
  css/
uploads/
app.js
```

---

## 📝 Booking Flow

1. **Search Listings:**  
   Filter by location, capacity, etc.

2. **Book a Property:**  
   Pre-filled forms, select dates/people, instant price & GST.

3. **Booking Confirmation:**  
   "Pending" until payment, expiry timer, auto-cancel, "Pay Now"/"Cancel" options.

---

## 💡 User Experience

- **Homepage:**  
  Browse/search listings, quick booking.

- **Profile:**  
  View/manage bookings, payment status.

- **Booking Page:**  
  Pre-filled, real-time validation, price calculation.

- **Owner/Admin Dashboard:**  
  Manage listings, view bookings, moderate users.

---

## ⚙️ Technologies

- Node.js, Express.js, MongoDB, Mongoose
- EJS templating
- Bootstrap 5, custom CSS
- Passport.js (authentication)
- Cloudinary (media uploads)
- Nodemailer (emails)

---

## 🔒 Security & Accessibility

- Passwords hashed, secure sessions, privacy policy
- Responsive design, accessible forms, clear navigation

---

## About

_No description, website, or topics provided._

---

## Resources

- Readme
- Security policy

---

## Activity

- Stars: 0
- Watchers: 1
- Forks: 0

---

## Releases & Packages

- No releases published
- No packages published

---

## Languages

- EJS: 51.8%
- JavaScript:
