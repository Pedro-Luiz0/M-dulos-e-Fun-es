function opeAritmeticas(precoMaca, quantidade, desconto) {
    let resultado = (precoMaca * quantidade) - desconto;
    return `O valor final é: R$ ${resultado}`;
}

export { opeAritmeticas };