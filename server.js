var express  = require('express');

var app = express();
var port = process.env.PORT || 5009;

app.use('/', express.static(__dirname + '/public'));

app.listen(port, function(){
  console.log('Server now listening on port ' + port);
});
