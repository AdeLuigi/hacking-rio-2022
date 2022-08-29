const express = require('express')
const router = require('./routes/routes')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const User = require('./schemas/User.schema')

mongoose.connect("mongodb+srv://admin:"+process.env.MONGO_PASSWORD+"@cluster0.ws0tq.mongodb.net/test", () => {
  console.log("conectou no mongo")
}, e => console.log(e))

async function run() {
  const user = await User.create({name: "Ademario Vitor", age: 23 })
  console.log(user)
}

run()

app.use(cors({
  origin: '*'
}));

const port = process.env.PORT ||  80

app.use(router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
