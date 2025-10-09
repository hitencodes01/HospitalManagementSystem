# 🏥 Hospital Management System – Backend

This is the **backend server** for the College Major Project **Hospital Management System**, built using **Node.js**, **Express**, and **MongoDB (Mongoose)**.  
It provides RESTful APIs to manage patients, doctors, appointments, and other related operations in a hospital environment.

---

## 🚀 Features

- RESTful API with Express.js
- MongoDB integration using Mongoose
- JWT-based authentication
- File uploads using `multer`
- Secure environment configuration using `dotenv`
- Cross-Origin support with `cors`

---

## 🧰 Tech Stack

| Technology         | Purpose                   |
| ------------------ | ------------------------- |
| Node.js            | Runtime environment       |
| Express.js         | Web framework             |
| MongoDB + Mongoose | Database & ODM            |
| JWT                | Authentication            |
| Multer             | File uploads              |
| dotenv             | Environment configuration |
| cookie-parser      | Cookie handling           |
| cors               | Cross-origin requests     |
| nodemon            | Development auto-restart  |

---

## 📦 Installation

1. **Clone the repository**

   git clone https://github.com/your-username/hospital-management-backend.git
   cd hospital-management-backend

2. **Install dependencies**
   npm install

3. **Create a .env file in the root directory and add**
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   SESSION_SECRET=your_session_secret

4. **Run the server**
   npm start

## 📁 Folder Structure

backend/
├── models/ # Mongoose schemas
├── routes/ # Express route handlers
├── controllers/ # Business logic
├── middleware/ # Authentication, validation, etc.
├── uploads/ # Uploaded files
├── index.js # Entry point
├── .env # Environment variables
└── package.json