var aesjs = require('aes-js');
var fs = require('fs');
var ctr = require('./ctr');

var texto = 'O texto pode ser de qualquer tamanho';
ctr(texto);

// var filePath = path.join(__dirname, "texto.txt");
// fs.readFile(filePath, {encoding: 'utf-8'}, function(err,texto){
//     if (!err) {
//         console.log("texto lido: ",texto);
//
//         var decriptografado = decriptaArq(texto);
//         console.log("texto decriptografado: ",decriptografado);
//     }
// });
