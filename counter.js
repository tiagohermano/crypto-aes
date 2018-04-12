var aesjs = require('aes-js');

module.exports = function counter(text) {
  // Exemplo de chave: chave de 128-bit (16 bytes * 8 bits/byte = 128 bits)
  var key = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ];

  // Conversão de texto para bytes
  var textBytes = aesjs.utils.utf8.toBytes(text);

  // Counter é opcional, e se omitido começará em 1
  var aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
  var encryptedBytes = aesCtr.encrypt(textBytes);

  // Conversão de bytes para hex
  var encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
  console.log('Hex criptografado: ',encryptedHex);

  // DECRYPT

  // Conversão da string em hex para bytes novamente
  var encryptedBytes = aesjs.utils.hex.toBytes(encryptedHex);

  var aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
  var decryptedBytes = aesCtr.decrypt(encryptedBytes);

  // Conversão dos bytes em texto
  var decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
  console.log('Texto descriptografado: ',decryptedText);
}
