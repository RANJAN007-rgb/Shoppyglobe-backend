# ShoppyGlobe API - Node.js + Express + MongoDB

This project implements the backend required by your assignment: Build APIs with Node.js and Express for a simple e-commerce (ShoppyGlobe).

## Features implemented
- Products API: list products, get product by id
- Cart API: add/update/delete cart items (protected via JWT)
- User registration and login with JWT
- MongoDB integration with Mongoose
- Validation and error handling
- Seed script to add sample products

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
