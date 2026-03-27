function opeLogicas () {
    let idade = 20;
    let temCarteira = true ;
    let podeDirigir = (idade >= 18 && temCarteira);
    return "pode dirigir?", podeDirigir; //resultado: true
}

opeLogicas()
export {opeLogicas}