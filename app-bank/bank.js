
function showMainTitle (){
    const maintitle = "\n+++ Bem vindo ao DJF Bank APP +++ \n";
    return maintitle;
}

function showMenu (){
    const menu = "\nInforme a opção desejada:\n(1) - Sacar\n(2) - Depositar\n(3) - Verificar Saldo\n(4) - Sair\n";
    return menu;
}

function getOption(value){
    let message = "";

    switch(value){

        case 1:
            message = "Você selecionou a opção - Sacar";
            break;
            
        case 2:
            message = "Você selecionou a opção - Depositar";
            break;

        case 3:
            message = "Você selecionou a opção - Verificar Saldo";
            break;

        case 4:
            message = "Obrigado por utilizar os nossos terminais de auto-atendimento !";    
            break;

        default:
            message = "Opção inválida";
            break;
    }
    return  message;
}

module.exports = {
    getOption,
    showMainTitle,
    showMenu
}