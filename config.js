const { config } = require('dotenv')
config()

const appconfig = {
  port: process.env.PORT || 5000,
  dbUser: process.env.DB_USER || '',
  dbPassword: process.env.DB_PASSWORD || '',
  dbServer: process.env.DB_SERVER || '',
  dbDatabase: process.env.DB_DATABASE || '',
}

module.exports = appconfig
