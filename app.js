const express = require('express');
const app = express()

const handler = (req, res) => {
  res.send(req.query.first + req.query.last)
}

app.route('/name').get(handler).post(handler)

app.listen(3000);
console.log("Hello World");
