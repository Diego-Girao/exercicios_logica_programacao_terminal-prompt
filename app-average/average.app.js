const terminal = require('readline-sync');
const average = require('./average');

console.log("\n=== Calcule a Média do Aluno ===\n");
console.log("Digite a primeira nota");
const note1 = parseFloat(terminal.prompt());
console.log("Digite a segunda nota");
const note2 = parseFloat(terminal.prompt());
console.log("Digite a terceira nota");
const note3 = parseFloat(terminal.prompt());

const studentAverage = average.getNotes(note1,note2,note3);
console.log("\nA média do aluno é: " + studentAverage);

if(studentAverage >= 9){
    console.log("Conceito: Excelente");
}else if(studentAverage >= 8 && studentAverage < 9){
    console.log("Conceito: Muito Bom");
}else if(studentAverage >= 6 && studentAverage < 8){
    console.log("Conceito: Bom");
}else if(studentAverage >= 5 && studentAverage < 6){
    console.log("Conceito: Regular");
}else{
    console.log("Conceito: Insuficiente");
}