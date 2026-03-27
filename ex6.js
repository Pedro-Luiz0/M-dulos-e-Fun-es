function ifElse (){
    let nota = 7.5;
    if (nota < 5) {
        return "aluno reprovado. ";
    } else if (nota < 7) {
        return "aluno em recuperação";
    } else {
        return " aluno aprovado! ";
    }
}

ifElse()
export {ifElse}