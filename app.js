const express = require('express');
const app = express();
// returns 'development' if NODE_ENV is not set
const env = app.get('env');

app.set('view engine', 'ejs');

// app.use(express.static('public'));
app.use(express.static('assets'));

app.set('views', `${__dirname}/views`);
app.get('/', function (req, res) {
  res.render('index', { env });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
