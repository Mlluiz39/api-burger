const express = require('express')
const cors = require('cors')
const serverless = require('serverless-http')

const app = express()
const port = process.env.PORT || 3001
require('dotenv/config');

<<<<<<< HEAD
=======

>>>>>>> parent of b38b247 (remove port)
const Order = require('./src/models/Order')

const router = express.Router()

app.use(express.json())
app.use(cors())
<<<<<<< HEAD
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

router.get('/order', async (req, res) => {
  const order = await Order.findAll()
  return res.json(order)
=======
app.use('/', router)  

router.get('/order', async (req, res) => {
 const orders = await Order.findAll()
  return res.json(orders)
>>>>>>> parent of b38b247 (remove port)
})

router.get('/order/:id', async (req, res) => {
  const order = await Order.findByPk(req.params.id)
  return res.json(order)
})

router.post('/order', async (req, res) => {
 const { firstName, hamburger, drink, follow_up } = req.body
  const order = await Order.create({ id: Order.id, firstName, hamburger, drink, follow_up })
  return res.json(order)
})

router.put('/order/:id', async (req, res) => {
 const { firstName, hamburger, drink, follow_up } = req.body
  const order = await Order.update({ firstName, hamburger, drink, follow_up }, { where: { id: req.params.id } })
  return res.json(order)
})

router.delete('/order/:id', async (req, res) => {
    const order = await Order.destroy({ where: { id: req.params.id } })
    return res.json(order)
  })

module.exports.handler = serverless(app)
