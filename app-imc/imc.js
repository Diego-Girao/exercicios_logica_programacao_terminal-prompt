function getMeasures(weight,height){
    const measures = weight / (height * height);
    return measures;
}

module.exports = {
    getMeasures
}