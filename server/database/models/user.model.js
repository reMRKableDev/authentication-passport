module.exports = (Sequelize, connector) => {
  const User = connector.define("user", {
    firstname: Sequelize.STRING,
    lastname: Sequelize.STRING,
    password: Sequelize.STRING,
    email: Sequelize.STRING,
  });

  return User;
};
