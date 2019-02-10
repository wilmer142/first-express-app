const express = require('express');
const app = express();

app.get('/makers/:name', (req, res) => {
	let name = req.params.name.charAt(0).toUpperCase() + req.params.name.slice(1);

  res.send(`<h1>Hola ${name}!</h1>`);
});

app.listen(3000, () => console.log('Listening on port 3000!'));