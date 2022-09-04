const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('node-order', 'mlluiz', 'Julia2912@', {
  host: '150.230.80.167',
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
