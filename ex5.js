function opeLogicas(idade, temCarteira) {
    let podeDirigir = (idade >= 18 && temCarteira);

    return podeDirigir 
        ? "Pode dirigir" 
        : "Não pode dirigir";
}

export { opeLogicas };