const express = require('express')
const app = express()
const ejs = require('ejs');
const port = process.env.PORT || 8080

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

data = []

app.get('/', (req, res) => {
    res.render("index", data);
})

app.get('/user/:name', function (req, res) {
    data.push(req.params.name);
    res.send(req.params.name)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})