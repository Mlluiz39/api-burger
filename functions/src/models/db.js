const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
  'postgres://woxmhyfp:XckR6ybQzIz6DtNZqX_dGzCpUlVaF8XB@tuffi.db.elephantsql.com/woxmhyfp',
  {
    dialect: 'postgres',
    dialectModule: require('pg'),
  }
)

sequelize
  .authenticate()
  .then(() => {
    console.log('conectado com sucesso!.')
  })
  .catch(err => {
    console.error('erro ao conectar ao database:', err)
  })

module.exports = sequelize
