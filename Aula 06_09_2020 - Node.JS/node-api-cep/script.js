var clientHttp = require('axios');
var fs = require('fs');

main();

function main(){ 
    var ceps = fs.readFileSync('ceps.txt', 'utf8');
    console.log(ceps);

    ceps.split(",").forEach(element => {
        clientHttp.get(`https://viacep.com.br/ws/${element}/json/`)
        .then(response => {
            console.log(response.data)
        });    
    });
}