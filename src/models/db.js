const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
  'postgres://admin:Julia2912@@168.138.240.103:5432/node_burger'
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