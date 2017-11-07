const app = require('express')();

var port = process.env.PORT || 8080;

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('home');
})

app.listen(port)
