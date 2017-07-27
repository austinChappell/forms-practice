const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const app = express();

let port = process.env.PORT || 3000;

let mustacheInstance = mustacheExpress();
mustacheInstance.cache = null;
app.engine('mustache', mustacheInstance);

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true }));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/sayhello', (req, res) => {
  let data = req.body;
  res.render('form-submit', data);
});

app.listen(port, () => {
  console.log(`Your app is running on PORT ${ port }.`);
});
