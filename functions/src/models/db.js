const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('codeburger-postgres', 'postgres', 'Julia2912@', {
  host: '144.22.225.20',
  dialect: 'postgres',
  dialectModule: require('pg'),
})

sequelize
  .authenticate()
  .then(() => {
    console.log('conectado com sucesso!.')
  })
  .catch(err => {
    console.error('erro ao conectar ao database:', err)
  })

module.exports = sequelize
