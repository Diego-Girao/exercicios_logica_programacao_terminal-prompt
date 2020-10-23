const terminal = require('readline-sync');
const engineering = require('./engineering');

// Exibe o titulo do app.
console.log(engineering.showMainTitle());
// Aplicação da lógica para o calculo do Assentamento.
console.log(engineering.showTitleAssentament());
// Exibe mensagem que indica para informar a largura.
console.log(engineering.getMessageWidthAssentament());
const widthAssentament = parseFloat(terminal.prompt());
// Exibe mensagem que indica para informar a altura.
console.log(engineering.getMessageHeightAssentament());
const heightAssentament = parseFloat(terminal.prompt());
//Exibe o resultado final.
const resultAssentament = engineering.costAssentament(widthAssentament, heightAssentament);
console.log(resultAssentament);

// **** Aplicação da lógica para o calculo do reboco.

console.log(engineering.showTitlePlaster());
// Exibe mensagem que indica para informar a largura.
console.log(engineering.getMessageWidthPlaster());
const widthPlaster = parseFloat(terminal.prompt());
// Exibe mensagem que indica para informar a altura.
console.log(engineering.getMessageHeightPlaster());
const heightPlaster = parseFloat(terminal.prompt());
// Exibe mensagem que indica para informar a profundidade.
console.log(engineering.getMessageDepthPlaster());
const depthPlaster = parseFloat(terminal.prompt());
//Exibe o resultado final.
const resultPlaster = engineering.costPlaster(widthPlaster, heightPlaster, depthPlaster);
console.log(resultPlaster);
