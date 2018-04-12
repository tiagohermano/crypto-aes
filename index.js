var aesjs = require('aes-js');
var fs = require('fs');
var path = require('path');
var counter = require('./counter');

var filePath = path.join(__dirname, "texto.txt");
fs.readFile(filePath, {encoding: 'utf-8'}, function(err,texto){
    if (!err) {
        console.log("texto lido: ",texto);

        counter(texto);
    }
});
