const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;

app.use(bodyParser.json());

app.listen(PORT,() => {
 console.log(`server running on port ${PORT}`)
});

app.post('/', (req, res) => {
  console.log(req.body.email);
  res.send('ok')
});