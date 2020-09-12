var express = require('express');
var clientHttp = require('axios');

app = express();
app.listen(3000);

app.get('/ceps/:cep', function(request, res){

    clientHttp.get(`https://viacep.com.br/ws/${element}/json/`)
    .then(response => {
        res.json(response.data);
    });
    
});