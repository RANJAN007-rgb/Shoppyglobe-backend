# ShoppyGlobe API - Node.js + Express + MongoDB

This project implements the backend required by your assignment: Build APIs with Node.js and Express for a simple e-commerce (ShoppyGlobe).

# 🚀 Features
## 🔐 Authentication (JWT)

User Registration

User Login

Password Hashing (bcrypt)

Protected Routes using JWT middleware

## 🛍 Product APIs

Get all products

Get product by ID

Seed demo products

## 🛒 Cart APIs

Add item to cart

Update quantity

Remove item

Access only with valid JWT token

## 🗄 Database

MongoDB + Mongoose

Models: User, Product, CartItem
## 🛠 Tech Stack

Node.js

Express.js

MongoDB

Mongoose

JWT Authentication

bcrypt.js

Nodemon

## Quick start

1. Install dependencies
```
npm install
```

2. Create `.env` file based on `.env.example` and set `MONGO_URI` and `JWT_SECRET`.

3. Seed sample products (optional)
```
npm run seed
```

4. Start server
```
npm run dev
```

Server will run on `http://localhost:5000` by default.

# 🧪 API Endpoints
## 🔐 Auth Routes
Method	Endpoint	Description
POST	/api/auth/register: Register a new user
POST	/api/auth/login:	Login and return JWT token
