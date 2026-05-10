import {objCasa} from './ex1.js'
import {decVariavel} from './ex2.js'
import {opeAritmeticas} from './ex3.js'
import {opeRelacionais} from './ex4.js'
import {opeLogicas} from './ex5.js'
import {ifElse} from './ex6.js'
import {Case} from './ex7.js'
import {laçoRep} from './ex8.js'
import {Vetor} from './ex9.js'
import express from 'express'

const app = express()


app.get('/ex1', (req, res) => {
    let ex1 = objCasa()
    let resposta = {
        enunciado: 'Selecionar 10 produtos e estruturar suas informações no padrão JSON, cada um deles deve possuir pelo menos 5 atributos.',
        resultado: ex1

    }
    res.json(resposta)
})

// EX1 -> QUERYSTRING
// http://localhost:3000/ex1/filtro?campo=cor&valor=azul
app.get('/ex1/filtro', (req, res) => {
  const { campo, valor } = req.query

  if (!campo || !valor) {
      return res.status(400).json({ erro: "Informe campo e valor na query string" })
  }

  const objetos = objCasa()

    const resultado = objetos.filter(item =>
        String(item[campo])
        .toLowerCase()
        .includes(valor.toLowerCase())
    )

  if (resultado.length === 0) {
      return res.status(404).json({ mensagem: "Nenhum objeto encontrado" })
  }

  return res.json({ campo, valor, resultado })
})

// EX2 -> PARAMS
// http://localhost:3000/ex2/Pedro/17/Brasil
app.get('/ex2/:nome/:idade/:pais', (req, res) => {
    let {nome, idade, pais} = req.params
    let resposta = decVariavel(nome, idade, pais)
  res.send(resposta)
})


// EX3 -> QUERY STRING
// localhost:3000/ex3?precoMaca=10&quantidade=5&desconto=2

app.get('/ex3', (req, res) => {

    const { precoMaca, quantidade, desconto } = req.query;

    const resultado = opeAritmeticas(
        Number(precoMaca),
        Number(quantidade),
        Number(desconto)
    );

    res.json({ resultado });
});


// EX4 -> PARAMS
// localhost:3000/ex4/18/16

app.get('/ex4/:idadeCliente/:idadeMinima', (req, res) => {

    const { idadeCliente, idadeMinima } = req.params;

    const resultado = opeRelacionais(
        Number(idadeCliente),
        Number(idadeMinima)
    );

    res.json({ resultado });
});


// EX5 -> QUERY STRING
// localhost:3000/ex5?idade=18&temCarteira=true

app.get('/ex5', (req, res) => {

    const { idade, temCarteira } = req.query;

    const resultado = opeLogicas(
        Number(idade),
        temCarteira === 'true'
    );

    res.json({ resultado });
});


// EX6 -> PARAMS
// localhost:3000/ex6/8

app.get('/ex6/:nota', (req, res) => {

    const { nota } = req.params;

    const resultado = ifElse(
        Number(nota)
    );

    res.json({ resultado });
});


// EX7 -> QUERY STRING
// localhost:3000/ex7?dia=3

app.get('/ex7', (req, res) => {

    const { dia } = req.query;

    const resultado = Case(
        Number(dia)
    );

    res.json({ resultado });
});


// EX8 -> PARAMS
// localhost:3000/ex8/10

app.get('/ex8/:numero', (req, res) => {

    const { numero } = req.params;

    const resultado = laçoRep(
        Number(numero)
    );

    res.json({ resultado });
});


// EX9 QUERY STRING
// localhost:3000/ex9?novoValor=banana

app.get('/ex9', (req, res) => {

    const { novoValor } = req.query;

    const resultado = Vetor(
        novoValor
    );

    res.json({ resultado });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})