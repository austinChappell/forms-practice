const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

let port = process.env.PORT || 3000;

app.engine('mustache', mustacheExpress());

app.set('view engine', 'mustache');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`Your app is running on PORT ${ port }.`);
});
