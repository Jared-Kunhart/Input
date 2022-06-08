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
      native: true,
      ssl: true,
      dialectOptions: {
        ssl: true
      },
    },
    production: {
        use_env_variable: 'DATABASE_URL',
        dialect: 'postgres',
        seederStorage: 'sequelize',
      }
};
