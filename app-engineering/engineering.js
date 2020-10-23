// ***** Lógica do Calculo do Assentamento.

function showMainTitle (){
    const maintitle = "\n+++ Bem vindo ao APP - Custos da sua Obra +++ \n";
    return maintitle;
}

function showTitleAssentament (){
    const showTitleAssentament = "+++ Calcule os custos com o Assentamento +++";
    return showTitleAssentament;
}

function getMessageWidthAssentament(){
    const messageWidthAssentament = "Informe a Largura";
    return messageWidthAssentament;
}

function getMessageHeightAssentament(){
    const messageHeightAssentament = "Informe a Altura";
    return messageHeightAssentament;
}

function costAssentament(widthAssentament, heightAssentament){
    
    let costSquareMeter = 9.90;
    const totalArea = widthAssentament * heightAssentament;
    let totalCostAssentament = totalArea * costSquareMeter;
    let resultAssentament = "Sua área total é de " + totalArea + "m²" + " e o assentamento terá o custo de:R$ " + totalCostAssentament;
    return resultAssentament;
}   // console.log(costAssentament(2,5));

// ***** Lógica do Calculo do Reboco a ser aplicado.

function showTitlePlaster (){
    const showTitlePlaster = "\n\n+++ Calcule os custos com o Reboco +++";
    return showTitlePlaster;
}

function getMessageWidthPlaster(){
    const messageWidthPlaster = "Informe a Largura";
    return messageWidthPlaster;
}

function getMessageHeightPlaster(){
    const messageHeightPlaster = "Informe a Altura";
    return messageHeightPlaster;
}

function getMessageDepthPlaster(){
    const messageDepthPlaster = "Informe a Profundidade";
    return messageDepthPlaster;
}

function costPlaster(widthPlaster, heightPlaster, depthPlaster){
    
    let costCubicMeter = 205;
    const volume = widthPlaster * heightPlaster * depthPlaster;
    let totalCostPlaster = volume * costCubicMeter;
    let resultPlaster = "Sua área total é de " + volume + "m³" + " e o reboco terá o custo de:R$ " + totalCostPlaster;
    return resultPlaster;
}   // console.log(costPlaster(2,3,0.02));


module.exports = {
    costAssentament,
    showMainTitle,
    showTitleAssentament,
    getMessageWidthAssentament,
    getMessageHeightAssentament,
    showTitlePlaster,
    getMessageWidthPlaster,
    getMessageHeightPlaster,
    getMessageDepthPlaster,
    costPlaster    
}
