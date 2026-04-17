function Vetor(novoValor) {
    const frutas = ["Maçã", "Banana", "laranja"];

    if (novoValor) {
        frutas[1] = novoValor;
    }

    return frutas;
}

export { Vetor };