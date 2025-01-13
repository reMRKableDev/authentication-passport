# 🛡️ Authentication with Passport.js – Node.js & React.js

[![CodeFactor](https://www.codefactor.io/repository/github/remrkabledev/authentication-passport/badge)](https://www.codefactor.io/repository/github/remrkabledev/authentication-passport)

This project shows how to implement **authentication** using **Passport.js** strategies in a **full-stack application**. It covers **JWT token generation & management** between the backend (Node.js) and frontend (React.js). 🚀

## 📌 Features

- 🔐 **JWT Authentication** with Passport.js
- 🔄 **Token-based authentication** between client & server
- 🗄 **Sequelize ORM** for database interactions
- 🌍 **REST API** for authentication flows
- 📡 **React.js Frontend** for UI authentication flow

## 🛠 Technologies

### FE: React.js
- Read more in the client-side documentation ➡ [README.md](./client/README.md)

### BE: Node.js (using Express.js)
- Read more in the server-side documentation ➡ [README.md](./server/README.md)


## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/remrkabledev/authentication-passport.git
cd authentication-passport
```

### 2️⃣ Install Dependencies
Run the following in both `client/` and `server/` directories:

```bash
npm install
```

### 3️⃣ Configure Environment Variables
1. Navigate to `server/`
2. Rename `.env.default` to `.env`
3. Set up your database credentials:
  ```plaintext
  YOUR_DATABASE_NAME=your_db_name
  YOUR_DATABASE_USER=your_db_user
  YOUR_DATABASE_PASSWORD=your_db_password
  YOUR_DATABASE_HOST=your_db_host
  YOUR_DATABASE_DIALECT=your_db_dialect
  ```

### 4️⃣ Configure Sequelize
Modify server/config/database.js to read from .env:

```javascript
const connector = new Sequelize(
  process.env.YOUR_DATABASE_NAME,
  process.env.YOUR_DATABASE_USER,
  process.env.YOUR_DATABASE_PASSWORD,
  {
    host: process.env.YOUR_DATABASE_HOST,
    dialect: process.env.YOUR_DATABASE_DIALECT,
  }
);
```

### 5️⃣ Run the Application
**Start the Backend**
```bash
cd server
npm run server
```
Test API endpoints using Postman or cURL.

**Start the Frontend**
```bash
cd client
npm start
```
Access the UI at http://localhost:3000.

## 🤝 Contributing
To contribute:
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m "Added new feature"`
4. Push to the branch: `git push origin feature-name`
5. Open a Pull Request.

---
### Have fun 🤩
