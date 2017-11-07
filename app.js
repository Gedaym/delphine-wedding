const app = require('express')();

var port = process.env.PORT || 8080;
var index = require('./routes/index.js')

app.set('view engine', 'ejs')
app.use('/', index)

app.listen(port)
