function Case () {
    let dia = 3;
    switch(dia){
        case 1:
            return "Domingo ";
            break;
        case 2:
            return  "Segunda-Feira";
            break;
        case 3:
            return  "terça-Feira";
            break;
        case 4:
            return  "Quarta-Feira";
            break;
        case 5:
            return "Quinta-Feira";
            break;
        case 6:
            return "sexta-Feira";
            break;
        case 7:
            return "Sabado";
            break;
        default:
            return "Dia invalido";

    }
}
Case()
export {Case} 