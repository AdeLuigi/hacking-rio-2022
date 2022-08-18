const express = require('express')
const router = require('./routes/routes')
const cors = require('cors')
const app = express()

app.use(cors({
  origin: '*'
}));

const port = process.env.PORT ||  4000

app.use(router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
