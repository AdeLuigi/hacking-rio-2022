const express = require('express')
const router = require('./routes/routes')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const User = require('./schemas/User.schema')

app.use(express.json())

mongoose.connect("mongodb+srv://admin:"+process.env.MONGO_PASSWORD+"@cluster0.ws0tq.mongodb.net/test", {
  enableUtf8Validation:false
} ,() => {
  console.log("conectou no mongo")
}, e => console.log(e))

app.use(cors({
  origin: '*'
}));

const port = process.env.PORT ||  80

app.use(router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
