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
    },
    dialectOptions: {
      ssl: {      /* <----- Add SSL option */
        require: true,
        rejectUnauthorized: false
      }
    },
    production: {
        use_env_variable: 'DATABASE_URL',
        dialect: 'postgres',
        seederStorage: 'sequelize',
      }
};
