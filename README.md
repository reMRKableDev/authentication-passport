# Authentication Passport.js - Node.js X React.js

An introduction to implementing authentication using Passport.js strategies. Generating and passing JWT between the back and front. 

## Technologies
**Frontend : React.js**

Read more about client repo here --> [README.md](./client/README.md)

**Backend : Node.js**

Read more about server repo here --> [README.md](./server/README.md)


## Getting Started

In the ```server/```, change the ```.env.default``` file to an ```.env``` file which will hold the environment variables associated with your database.

Configure your Sequelize connector to read from process.env

```javascript
const connector = new Sequelize(
  process.env.YOUR_DATABASE_NAME,
  process.env.YOUR_DATABASE_USER,
  process.env.YOUR_DATABASE_PASSWORD,
  {
    host: process.env.YOUR_DATABASE_HOST,
    dialect: YOUR_DATABASE_DIALECT
  }
);
```

### How To:

To use the examples provided:

```
1. Clone repo.
2. Run 'npm install' to get the required dependencies.
3. Use 'npm run server' to get the server running and test endpoint wit Postman.

```

Have fun :)
