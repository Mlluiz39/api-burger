const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('devburger', 'postgres', 'Julia2912@', {
  host: '144.22.166.54',
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
