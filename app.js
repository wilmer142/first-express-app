const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hola ' + (Object.keys(req.query).length == 0 ? "desconocido" : req.query.name.length == 0 ? "desconocido" : req.query.name) + '!</h1>');
});

app.listen(3000, () => console.log('Listening on port 3000!'));