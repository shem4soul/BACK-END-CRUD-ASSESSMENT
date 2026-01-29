📦 Backend CRUD API with Authentication

This is a RESTful CRUD API built with Node.js, Express, TypeScript, and MongoDB.
The application includes JWT-based authentication and protected routes for managing items.

This project was developed as part of a backend technical assessment.

🚀 Tech Stack

Node.js

Express.js

TypeScript

MongoDB & Mongoose

JSON Web Token (JWT)

Bcrypt (Password Hashing)

📁 Project Structure
src/
│
├── config/        # Database connection setup
├── controllers/   # Request handling logic
├── middleware/    # Authentication & error handling
├── models/        # Mongoose schemas
├── routes/        # API route definitions
└── server.ts      # Application entry point

⚙️ Environment Variables

Create a .env file in the root directory and add the following:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key


⚠️ Do NOT commit your real .env file. Include a .env.example instead.

▶️ How to Run the Project Locally
1️⃣ Clone the repository
git clone <your-repository-link>
cd <your-project-folder>

2️⃣ Install dependencies
npm install

3️⃣ Start the development server
npm run dev


The server should start on:

http://localhost:5000

🔐 Authentication

This API uses JWT authentication. Users must register and log in to access protected routes.

📝 Register User

POST /api/users/register

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}

🔑 Login User

POST /api/users/login

{
  "email": "john@example.com",
  "password": "123456"
}


Response:

{
  "token": "your_jwt_token"
}


Use this token to access protected routes:

Authorization: Bearer your_jwt_token

📌 API Endpoints
👤 User Routes
Method	Endpoint	Description
POST	/api/users/register	Register a new user
POST	/api/users/login	Login and receive JWT
📦 Item Routes (Protected)

All item routes require a valid JWT token.

Method	Endpoint	Description
POST	/api/items	Create a new item
GET	/api/items	Get all items
GET	/api/items/:id	Get a single item
PUT	/api/items/:id	Update an item
DELETE	/api/items/:id	Delete an item
🧪 API Testing with Postman

A Postman collection is included in this repository:

Backend-Assessment.postman_collection.json

To test:

Open Postman

Click Import

Select the collection file

Run the requests

❗ Error Handling

The API uses centralized error handling and returns proper HTTP status codes:

200 OK

201 Created

400 Bad Request

401 Unauthorized

404 Not Found

500 Internal Server Error

🛡 Security Features

Passwords are hashed using bcrypt

JWT used for secure authentication

Protected routes via authentication middleware

Sensitive data stored in environment variables

👨🏽‍💻 Author

Emmanuel Shittu
Backend Developer
