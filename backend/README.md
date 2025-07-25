
📦 Inventory Management System - Backend
This is a robust REST API for an inventory management system. It provides user authentication and core functionalities for managing products, built with Node.js, Express, and MySQL.

✨ Key Features
Secure Authentication: JWT-based login and registration flow with hashed passwords using bcryptjs.

Protected Routes: Middleware to secure product management endpoints, ensuring only authenticated users can access them.

Product Management: Full CRUD-like functionality to add products, update stock quantities, and list all items with pagination.

Interactive API Docs: Integrated Swagger UI for easy visualization and testing of all API endpoints.

Scalable Structure: Organized into controllers, models, and routes for maintainability.

🛠️ Tech Stack
Category	Technology
Backend	Node.js, Express.js
Database	MySQL
Authentication	JSON Web Tokens (JWT), bcryptjs
API Docs	Swagger (swagger-jsdoc, swagger-ui-express)

Export to Sheets
🚀 Getting Started
Follow these steps to get the backend server running on your local machine.

1. Prerequisites
Node.js: Version 18 or higher (node -v).

MySQL: An active instance of MySQL server.

2. Installation & Setup
Clone the repository and navigate to the backend folder:

Bash

git clone <your-repository-url>
cd <repository-folder>/backend
Install dependencies:

Bash

npm install
3. Database Setup
Connect to your MySQL instance and run the following SQL script to create the database and required tables.

SQL

-- Create the database
CREATE DATABASE inventory_db;

-- Use the database
USE inventory_db;

-- Create the 'users' table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

-- Create the 'products' table
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(255),
    sku VARCHAR(255) UNIQUE,
    image_url VARCHAR(2048),
    description TEXT,
    quantity INT NOT NULL DEFAULT 0,
    price DECIMAL(10, 2) NOT NULL
);
4. Environment Configuration
Create a .env file in the backend directory and add the following configuration. Replace the placeholder values with your actual credentials.

Code snippet

# Server Port
PORT=8080

# JWT Secret Key
JWT_SECRET=your_strong_jwt_secret_key_here

# MySQL Database Configuration
DB_HOST=localhost
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_NAME=inventory_db
5. Run the Server
For development (with auto-reload):

Bash

npm run dev
For production:

Bash

npm start
The server will be running at http://localhost:8080.

📘 API Documentation
Interactive API documentation is available via Swagger UI. Once the server is running, navigate to:

http://localhost:8080/api-docs

To test protected endpoints, click the Authorize button and enter your JWT token in the format Bearer <your_token>.

🤖 A Note on AI Usage
This project was completed with the goal of learning and delivering a high-quality result. AI assistants like Gemini and ChatGPT were leveraged for:

Refactoring code for better structure and clarity.

Generating boilerplate for Swagger documentation.

Debugging complex errors and suggesting best practices.

Creating a clean and comprehensive README file.

All final code, logic, and implementation choices were reviewed and validated by me to ensure they met the project requirements.