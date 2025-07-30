# 📦 Full-Stack Inventory Management System

This is a complete inventory management application built with a secure Node.js backend and a responsive React frontend. It provides user authentication and REST APIs for managing inventory products, including adding, updating, and listing items.

![Node.js](https://img.shields.io/badge/Node.js-18+-green?style=for-the-badge\&logo=node.js)
![Express](https://img.shields.io/badge/Express-4.x-black?style=for-the-badge\&logo=express)
![MySQL](https://img.shields.io/badge/MySQL-8.x-blue?style=for-the-badge\&logo=mysql)
![React](https://img.shields.io/badge/React-18.x-blue?style=for-the-badge\&logo=react)
![Vite](https://img.shields.io/badge/Vite-Fast-yellow?style=for-the-badge\&logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.x-cyan?style=for-the-badge\&logo=tailwindcss)

---

## ✨ Key Features

* **Secure Authentication**: JWT-based login system with securely hashed passwords using `bcryptjs`.
* **Full Product Management**: REST APIs for creating products, updating stock quantities, and fetching a paginated list of all items.
* **Protected Routes**: Backend middleware and frontend route guards ensure only authenticated users can access the inventory dashboard.
* **Responsive Frontend**: A clean and modern user interface built with React and Tailwind CSS that works seamlessly on all screen sizes.
* **Interactive API Documentation**: Integrated Swagger UI for easy visualization and testing of all backend endpoints.

---

## 💠 Tech Stack

| Area         | Technology                                     |
| :----------- | :--------------------------------------------- |
| **Backend**  | Node.js, Express.js, MySQL, JWT, bcryptjs      |
| **Frontend** | React, Vite, Tailwind CSS, Axios, React Router |
| **API Docs** | Swagger (`swagger-ui-express`)                 |

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
  PORT=8080
  
  JWT_SECRET=your_strong_jwt_secret_key_here
  
  DB_HOST=mysql
  DB_USER=root
  DB_PASSWORD=Sudarshan@18
  DB_NAME=inventory_db
  ```

* **Run the backend server locally:**

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

## 📄 Docker Deployment

You can deploy the backend using Docker. The `Dockerfile` is located inside the `backend/` folder.

### **Build Docker Image**

```bash
cd backend
sudo docker build -t sudarshankandala/epify-backend .
```

### **Run Docker Container**

```bash
sudo docker run -d -p 8080:8080 --env-file .env sudarshankandala/epify-backend
```

Make sure your MySQL server is accessible from the container and your `.env` file is configured correctly.

### **Push Image to Docker Hub**

```bash
sudo docker login
sudo docker push sudarshankandala/epify-backend
```

View on Docker Hub: [https://hub.docker.com/repository/docker/sudarshankandala/epify-backend](https://hub.docker.com/repository/docker/sudarshankandala/epify-backend)

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

| Requirement                         | Status |
| ----------------------------------- | :----: |
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

## 😋 About Me

👤 **Name**: Sudarshan Kandala
📧 **Email**: [kandalasudai@gmail.com](mailto:kandalasudai@gmail.com)
🏫 **College**: IIIT Nagpur
💻 **Branch**: Computer Science and Engineering
🎯 **Batch**: 2026
