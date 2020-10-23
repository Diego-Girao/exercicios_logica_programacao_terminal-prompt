const terminal = require('readline-sync');
const imc = require('./imc');

    console.log("\n=== Calculadora de IMC ===\n");

    console.log("Informe o seu peso em Kg, exemplo: 120");
    let weight = parseFloat(terminal.prompt());
   
    while(weight > 0){
    console.log("Informe a sua altura em metros, exemplo: 1.82");
    const height = parseFloat(terminal.prompt());

    const measures = imc.getMeasures(weight,height);
    console.log("\nO seu IMC é: " + measures);

    console.log("Informe o seu peso em Kg, exemplo: 120");
    weight = parseFloat(terminal.prompt());

}