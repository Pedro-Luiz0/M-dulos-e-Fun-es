import {objCasa} from './ex1.js'
import {decVariavel} from './ex2.js'
import {opeAritmeticas} from './ex3.js'
import {opeRelacionais} from './ex4.js'
import {opeLogicas} from './ex5.js'
import {ifElse} from './ex6.js'
import {Case} from './ex7.js'
import {laçoRep} from './ex8.js'
import {Vetor} from './ex9.js'
import inquirer from "inquirer";

var questions = [
    {
        type:"input",
        name:"valor",
        message:"digite o case"
    }
]
const resp = await inquirer.prompt(questions);
var valor = parseInt (resp.valor);
switch (valor) {
    case 1:
        await objCasa();
        break;
    case 2:
        await decVariavel();
        break;
    case 3:
        await opeAritmeticas();
        break;
    case 4:
        await opeLogicas();
        break;
    case 5:
        await ifElse();
        break;
    case 6:
        await Case();
        break;
    case 7:
        await laçoRep();
        break;
    case 8:
        await Vetor();
        break;
    default:
        console.log("Valor invalido, digite um numero de 0 a 7 ")
        break;
}