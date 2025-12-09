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

## API Endpoints (summary)
- `POST /api/auth/register` — register a new user
- `POST /api/auth/login` — login and receive JWT
- `GET /api/products` — list all products
- `GET /api/products/:id` — product details
- `POST /api/cart` — add product to cart (protected)
- `PUT /api/cart/:itemId` — update quantity of a cart item (protected)
- `DELETE /api/cart/:itemId` — remove cart item (protected)

Use ThunderClient / Postman to test. Include `Authorization: Bearer <token>` header when calling protected routes.

