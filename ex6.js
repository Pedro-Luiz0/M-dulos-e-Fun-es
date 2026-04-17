function ifElse(nota) {
    if (nota < 5) {
        return "Aluno reprovado";
    } else if (nota < 7) {
        return "Aluno em recuperação";
    } else {
        return "Aluno aprovado";
    }
}

export { ifElse };