const Sequelize = require('sequelize')
const db = require('./db')


const Order = db.define('order', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
    allowNull: false
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  hamburger: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  drink: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  follow_up: {
    type: Sequelize.STRING,
    allowNull: false,
  },
})

Order.sync()

module.exports = Order
