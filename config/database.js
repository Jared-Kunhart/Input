let {
    db: { username, password, database, host },
} = require("./index");

module.exports = {
    development: {
      username,
      password,
      database,
      host,
      dialect: 'postgres',
      ssl: true,
    },
    production: {
        use_env_variable: 'DATABASE_URL',
        dialect: 'postgres',
        seederStorage: 'sequelize',
      }
};
