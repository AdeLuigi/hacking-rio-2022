import * as dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import ScrapperController from './controllers/scrapper.controller'

dotenv.config()
const app = express()

app.use(express.json())

// mongoose.connect("mongodb+srv://admin:" + process.env.MONGO_PASSWORD + "@cluster0.ws0tq.mongodb.net/test", null, () => {
//   console.log("conectou no mongo")
// })

app.use(cors({
  origin: '*'
}));

app.use('/scrapper', ScrapperController)

const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log(`Application started at http://localhost:${port}`)
})
