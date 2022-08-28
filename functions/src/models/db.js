const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
  'postgres://woxmhyfp:XckR6ybQzIz6DtNZqX_dGzCpUlVaF8XB@tuffi.db.elephantsql.com/woxmhyfp',
  {
    dialect: 'postgres',
  }
)

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

module.exports = sequelize
