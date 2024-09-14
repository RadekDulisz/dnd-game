import bodyParser from "body-parser"
import express from "express"
import mongoose from "mongoose"

const app = express()

const mongoURI = process.env.MONGODB_URI as string
mongoose.connect(mongoURI)
mongoose.Promise = global.Promise

const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/api/characters', (req, res) => {
  res.send('Hello World!')
})

const port = 3001

db.once('open', () => {
  console.log('Connected!')
  app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port)
  })
})
