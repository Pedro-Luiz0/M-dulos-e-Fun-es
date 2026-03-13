function ifElse (){
    let nota = 7.5;
    if (nota < 5) {
        console.log ("aluno reprovado. ");
    } else if (nota < 7) {
        console.log ("aluno em recuperação");
    } else {
        console.log (" aluno aprovado! ");
    }
}

ifElse()
export {ifElse}