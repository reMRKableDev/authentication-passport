const server = require("./app");
const { PORT } = process.env;
const port = PORT || 8080;

server.listen(port, () => console.log(`Listening to port: ${port}`));
