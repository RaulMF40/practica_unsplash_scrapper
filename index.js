const { scrapper } = require('./src/scrapper/scrapper')
const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

const funcionPalabra = async (req, res, next) => {
  try {
    const { key } = req.params
    const imgs = await scrapper(`https://unsplash.com/es/s/fotos/${key}`)
    return res.status(200).json(imgs)
  } catch (error) {
    return res.status(400).json('Not Found')
  }
} // esto es hacer un controlador y una ruta sencilla ya que no tenemos base de datos en este caso

app.use('/api/v1/:key', funcionPalabra)

app.listen(3000, () => {
  console.log('Escuchando en http://localhost:3000')
})
