const express = require('express')

const cors = require('cors')
const serverless = require('serverless-http')

const app = express()

const Order = require('./src/models/Order')

const router = express.Router()

app.use(cors())
app.use(express.json())

router.get('/order', async (req, res) => {
  const order = await Order.findAll()
  return res.json(order)
})

router.get('/order/:id', async (req, res) => {
  const order = await Order.findByPk(req.params.id)
  return res.json(order)
})

router.post('/order', async (req, res) => {
  const { firstName, hamburger, drink, follow_up } = req.body
  const order = await Order.create({
    id: Order.id,
    firstName,
    hamburger,
    drink,
    follow_up,
  })
  return res.json(order)
})

router.put('/order/:id', async (req, res) => {
  const { firstName, hamburger, drink, follow_up } = req.body
  const order = await Order.update(
    { firstName, hamburger, drink, follow_up },
    { where: { id: req.params.id } }
  )
  return res.json(order)
})

router.delete('/order/:id', async (req, res) => {
  const order = await Order.destroy({ where: { id: req.params.id } })
  return res.json(order)
})

app.use('/', router)

module.exports.handler = serverless(app)
