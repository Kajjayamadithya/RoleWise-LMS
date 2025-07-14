#  LMS Platform – Module 6 Assignment


---

##  Objective

To build a functional routing system and a role-based dashboard for the LMS platform using TanStack Router and JWT-based role management.

---

##  Features Implemented

-  TanStack Router setup with nested and protected routes  
-  JWT-based login & role-aware route access  
-  AuthContext with token decoding and user state  
-  Register/Login pages with validation using react-hook-form and yup  
-  Role-based Dashboard:  
  -  *Student* – View enrolled courses  
  -  *Instructor* – Manage created courses  
  -  *Admin* – View and manage all users  

---

##  Folder Structure

```
Module6_Assignment/
│
├── server/
│   ├── utils/
│   │   └── generateToken.ts
│   ├── models/
│   │   └── user_model.ts
│   ├── routes/
│   │   └── auth.ts
│   ├── middleware/
│   │   └── auth_middleware.ts
│   ├── server.ts
│   ├── .gitignore
│   └── .env
│
├── client/
│   ├── src/
│   │   ├── api/
│   │   │   └──axios.ts
│   │   ├── context/
│   │   │   └── AuthContext.tsx
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── Login.tsx
│   │   │   ├── Register.tsx
│   │   │   ├── Dashboard.tsx
│   │   ├── dashboard/
│   │   │   ├── StudentDashboard.tsx
│   │   │   ├── InstructorDashboard.tsx
│   │   │   └── AdminDashboard.tsx
│   │   ├── routes/
│   │   │   └── router.tsx
│   │   ├── utils/
│   │   │   └── auth.ts
│   │   ├── App.tsx
│   │   └── main.tsx
│   └── index.html
│
└── README.md
```
---

*Tech Stack:* React (Vite + TypeScript), Tailwind CSS, TanStack Router, JWT, Axios, Node.js, MongoDB

---




---

##  How to Run the Project

###  Backend Setup

1. Navigate to the backend directory:


cd backend


2. Create a .env file with the following content:

env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000


3. Install backend dependencies:


npm install


4. Start the backend server:


npm run dev


The backend should be running on:  
 http://localhost:5000

---

###  Frontend Setup

1. Navigate to the client directory:


cd client


2. Install frontend dependencies:


npm install


3. Start the Vite development server:


npm run dev


The frontend should be running on:  
 http://localhost:5173

---

##  API Endpoints Tested in Postman

###  Register

*POST* http://localhost:5000/api/auth/register

json
{
  "name": "Adithya",
  "email": "adithya@gmail.com",
  "password": "123456",
  "role": "student"
}


---

###  Login

*POST* http://localhost:5000/api/auth/login

json
{
  "email": "adithya@gmail.com",
  "password": "123456"
}


---
