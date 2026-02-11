
# 🎵 Media Player Backend (JSON Server)

This is the backend server for the Media Player MERN application.

It is built using **Node.js** and **json-server** to simulate a REST API for managing videos, categories, and watch history.

---

## 🚀 Features

- 📁 Manage All Videos
- 🕒 Watch History API
- 🗂 Category Management
- 🔁 Full CRUD operations
- ⚡ Lightweight REST API using json-server

---

## 🛠 Tech Stack

- Node.js
- json-server
- REST API

---

## 📂 Project Structure

```

media-player-mern-jonserver/
│
├── db.json          # Database file
├── index.js         # Server configuration
├── package.json
└── package-lock.json

````

---

## ▶️ Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/media-player-mern-jonserver.git
````

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start the server

```bash
npm start
```

Server will run at:

```
http://localhost:3000
```

---

## 📡 Available API Endpoints

### 🎬 Videos

* GET /allvideos
* POST /allvideos
* DELETE /allvideos/:id

### 🕒 History

* GET /history
* POST /history
* DELETE /history/:id

### 📁 Categories

* GET /allcategory
* POST /allcategory
* DELETE /allcategory/:id
* PUT /allcategory/:id

---

## 📌 Example Data (db.json)

The server stores:

* All videos
* Watch history
* Video categories

---

## 📖 Author

**Salmanul Faris K**

Frontend & MERN Stack Developer

---



