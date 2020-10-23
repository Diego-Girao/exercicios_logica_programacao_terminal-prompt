// calculando a média do aluno

function getNotes(note1, note2, note3){
    let notes = note1 + note2 + note3;
    let studentAverage = notes / 3;
    return studentAverage;
}
module.exports = {
    getNotes
}