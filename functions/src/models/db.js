const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('devburger', 'postgres', 'Julia2912@', {
  host: '144.22.237.192',
  dialect: 'postgres',
  dialectModule: pg,
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
