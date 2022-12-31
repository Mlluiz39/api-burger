const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('devclub-postgres', 'postgres', 'Julia2912@', {
  host: '144.22.189.13',
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
