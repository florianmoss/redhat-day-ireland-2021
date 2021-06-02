const express = require('express')
const app = express()
const port = process.env.PORT || 8080

data = []

app.get('/', (req, res) => {
  res.send(data)
})

app.get('/user/:name', function (req, res) {
    data.push(req.params.name);
    res.send(req.params.name)
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})