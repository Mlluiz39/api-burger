const express = require('express')
const cors = require('cors')
const serverless = require('serverless-http')

const app = express()

require('dotenv/config')

const Order = require('./src/models/Order')

const router = express.Router()

app.use(express.json())
app.use('/', router)
app.use(cors())
app.use((req, res, next) => {
  res.header(
    'Access-Control-Allow-Headers, *, Access-Control-Allow-Origin',
    'Origin, X-Requested-with, Content_Type,Accept,Authorization'
  )
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE,GET')
    return res.status(200).json({})
  }
  next()
})

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

// app.listen(port, () => {
//   console.log(`Listening at http://localhost:${port}`)
// })

module.exports.handler = serverless(app)
