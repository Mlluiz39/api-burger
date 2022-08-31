const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('node-burger-api', 'postgres', 'Julia2912@', {
  host: '140.238.183.195',
  dialect: 'pg',
  dialectModule: 'pg',
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
