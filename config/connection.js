require('dotenv').config();
const Sequelize = require('sequelize');

let sequelize;

if (process.env.JAWSDB_URL) {
  // Use JAWSDB_URL if available (deployed on Heroku)
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  // Use local database settings if JAWSDB_URL is not available (local development)
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    }
  );
}
console.log('DB_NAME:', process.env.DB_NAME);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);

module.exports = sequelize;
