const express = require('express')
const cors = require('cors')
const serverless = require('serverless-http')
const fs = require('fs')
const https = require('https')

const app = express()

require('dotenv/config')

const Order = require('./src/models/Order')

const router = express.Router()

app.use(express.json())
app.use('/', router)
app.use(
  cors({
    origin: ['https://node-burger.netlify.app/order'],
    methods: ['GET', 'POST', 'DELETE'],
    credentials: true,
    origin: true,
  })
)

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

app.listen(3000, () => {
  console.log(`Listening at http://localhost:${3000}`)
})

https
  .createServer(
    {
      cert: fs.readFileSync('.src/ssl/code.crt'),
      key: fs.readFileSync('.src/ssl/code.key'),
    },
    app
  )
  .listen(9002, () => {
    console.log('Listening at https://localhost:9002')
  })

module.exports.handler = serverless(app)
