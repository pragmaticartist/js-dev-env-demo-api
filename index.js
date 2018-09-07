var express =  require('express');
var cors = require('cors');

const app = express();
app.use(cors());

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
  response.send('Hello World!')
});

app.get('/users', function(req, res){
  // Fake production API. Hard coding for simplicity.
  res.json([
    {"id": 1,"firstName":"Karen","lastName":"Nelson","email":"momsemail@yahoo.com"},
    {"id": 2,"firstName":"Ashley","lastName":"Hall","email":"sistersemail@gmail.com"},
    {"id": 3,"firstName":"David","lastName":"Hall","email":"brothersemail@gmail.com"},
    {"id": 4,"firstName":"Talimama","lastName":"Vale","email":"paemail@gmail.com"}
  ]);
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port')); 
});