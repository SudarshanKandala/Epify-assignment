# 📦 Full-Stack Inventory Management System

This is a complete inventory management application built with a secure Node.js backend and a responsive React frontend. It provides user authentication and REST APIs for managing inventory products, including adding, updating, and listing items.

---

## ✨ Key Features

* **Secure Authentication**: JWT-based login system with securely hashed passwords using `bcryptjs`.
* **Full Product Management**: REST APIs for creating products, updating stock quantities, and fetching a paginated list of all items.
* **Protected Routes**: Backend middleware and frontend route guards ensure only authenticated users can access the inventory dashboard.
* **Responsive Frontend**: A clean and modern user interface built with React and Tailwind CSS that works seamlessly on all screen sizes.
* **Interactive API Documentation**: Integrated Swagger UI for easy visualization and testing of all backend endpoints.

---

## 🛠️ Tech Stack

| Area      | Technology                                                       |
| :-------- | :--------------------------------------------------------------- |
| **Backend** | Node.js, Express.js, MySQL, JWT, bcryptjs                        |
| **Frontend** | React, Vite, Tailwind CSS, Axios, React Router                   |
| **API Docs** | Swagger (`swagger-ui-express`)                                   |

---

## 🚀 Getting Started

Follow these steps to get the entire application running on your local machine.

### **Prerequisites**

* **Node.js**: Version 18.x or higher.
* **MySQL**: An active instance of a MySQL server.

### **1. Backend Setup**

* **Navigate to the backend directory:**
    ```bash
    cd backend
    ```

* **Install dependencies:**
    ```bash
    npm install
    ```

* **Set up the database:**
    Connect to your MySQL instance and run the following SQL script to create the database and tables.
    ```sql
    CREATE DATABASE inventory_db;
    USE inventory_db;

    CREATE TABLE users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL
    );

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
    ```

* **Configure environment variables:**
    Create a `.env` file in the `backend` directory and add your credentials.
    ```env
    # Server Port
    PORT=8080

    # JWT Secret Key
    JWT_SECRET=your_strong_jwt_secret_key_here

    # MySQL Database Configuration
    DB_HOST=localhost
    DB_USER=your_mysql_username
    DB_PASSWORD=your_mysql_password
    DB_NAME=inventory_db
    ```

* **Run the backend server:**
    ```bash
    npm run dev
    ```
    The backend API will be running at `http://localhost:8080`.

### **2. Frontend Setup**

* **Open a new terminal** and navigate to the frontend directory:
    ```bash
    cd frontend
    ```

* **Install dependencies:**
    ```bash
    npm install
    ```

* **Run the frontend development server:**
    ```bash
    npm run dev
    ```
    The React application will be available at `http://localhost:5173` (or another port if 5173 is busy).

---

## 📘 API Documentation

Once the backend server is running, interactive API documentation is available via Swagger UI at:

**`http://localhost:8080/api-docs`**

You can use this interface to test all API endpoints directly from your browser.

---

## 🤖 A Note on AI Usage

This project was built with a strong focus on learning and creating a high-quality application. To accelerate development and ensure best practices, **AI assistants like Gemini and ChatGPT were used for:**

* Refining code structure and improving readability.
* Generating boilerplate for components and API documentation.
* Debugging complex errors related to configuration and database connectivity.
* Creating a clean, professional, and comprehensive README file.

⚠️ The core application logic, architectural decisions, and final implementation were all done by me.

---

## ✅ Final Checklist

| Requirement                         | Status  |
| ----------------------------------- | :-----: |
| Login/Register API                  | ✅ Done |
| Secure Auth with JWT                | ✅ Done |
| Add, Update, Get Products API       | ✅ Done |
| Auth Middleware                     | ✅ Done |
| Interactive Swagger Docs            | ✅ Done |
| MySQL Database Integration          | ✅ Done |
| Clean, Simple, Functional Code      | ✅ Done |
| Full-Stack Project with React       | ✅ Done |
| README with Usage and Documentation | ✅ Done |
| Honest Mention of AI Usage          | ✅ Done |

---

## 🙋 About Me

👤 **Name**: Sudarshan Kandala
📧 **Email**: [kandalasudai@gmail.com](mailto:kandalasudai@gmail.com)
🎓 **College**: IIIT Nagpur
💻 **Branch**: Computer Science and Engineering
🎯 **Batch**: 2026
