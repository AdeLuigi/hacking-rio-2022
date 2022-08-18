const express = require('express')
const router = require('./routes/routes')
const app = express()
const port = process.env.PORT || 80

app.use(router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
