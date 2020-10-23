const terminal = require('readline-sync');
const bank = require('./bank');


// Exibe o titulo do app.
console.log(bank.showMainTitle());

let value = 0;


while(value != 4){
    console.log(bank.showMenu());
    value = parseInt(terminal.prompt());
    
    let message = bank.getOption(value);
    console.log(message);

}