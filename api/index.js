const express = require('express')
const router = require('./routes/routes')
const app = express()
const port = 4000

app.use(router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
