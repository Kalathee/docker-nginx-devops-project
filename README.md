# 🚀 Docker Nginx DevOps Project

## 📌 Project Overview

This project demonstrates a **full-stack application deployment** using:

* Frontend (React)
* Backend (Node.js)
* Nginx (Reverse Proxy)
* Docker (Containerization)

It is designed to showcase **DevOps concepts** like containerization, service management, and deployment.

---

## 🏗️ Project Structure

```
.
├── backend/
├── frontend/
├── dockerfile
├── nginx.conf
├── .gitignore
└── README.md
```

---

## ⚙️ Technologies Used

* Node.js
* React
* Nginx
* Docker
* Git & GitHub

---

## 🚀 How to Run the Project

### 1. Clone the repository

```
git clone https://github.com/Kalathee/docker-nginx-devops-project.git
cd docker-nginx-devops-project
```

---

### 2. Run Backend

```
cd backend
npm install
node server.js
```

---

### 3. Run Frontend

```
cd frontend
npm install
npm start
```

---

### 4. Run using Docker (Recommended)

```
docker build -t my-app .
docker run -p 80:80 my-app
```

---

## 🌐 Access the Application

* Frontend: http://localhost:3000
* Backend: http://localhost:5000
* Docker/Nginx: http://localhost

---

## 🔐 Environment Variables

Create a `.env` file in root (not included in repo):

```
PORT=5000
```

---

## 📦 Features

* Full-stack application setup
* Docker containerization
* Nginx reverse proxy configuration
* Clean Git workflow

---

## ❗ Important Notes

* `node_modules` is ignored using `.gitignore`
* `.env` file is not pushed for security reasons

---

## 🎯 Future Improvements

* Add Docker Compose
* Deploy on AWS (EC2 / ECS)
* CI/CD pipeline integration

---

## 👨‍💻 Author

**Kalatheeswaran M**

---

## ⭐ If you like this project

Give it a star on GitHub ⭐
