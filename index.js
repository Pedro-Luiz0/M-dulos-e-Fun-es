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

app.get('/ex1/filtro', (req, res) => {
  const { campo, valor } = req.query

  if (!campo || !valor) {
      return res.status(400).json({ erro: "Informe campo e valor na query string" })
  }

  const objetos = objCasa()

  const resultado = objetos.filter(item =>
      item[campo]?.toLowerCase().includes(valor.toLowerCase())
  )

  if (resultado.length === 0) {
      return res.status(404).json({ mensagem: "Nenhum objeto encontrado" })
  }

  return res.json({ campo, valor, resultado })
})

app.get('/ex2/:nome/:idade/:pais', (req, res) => {
    let {nome, idade, pais} = req.params
    let resposta = decVariavel(nome, idade, pais)
  res.send(resposta)
})

app.get('/ex3', (req, res) => {
    let { precoMaca, quantidade, desconto } = req.query;

    let resultado = opeAritmeticas(
        Number(precoMaca),
        Number(quantidade),
        Number(desconto)
    );

    res.json({ resultado });
});


app.get('/ex4', (req, res) => {
    let { idadeCliente, idadeMinima } = req.query;

    let resultado = opeRelacionais(
        Number(idadeCliente),
        Number(idadeMinima)
    );

    res.json({ resultado });
});


app.get('/ex5', (req, res) => {
    let { idade, temCarteira } = req.query;

    let resultado = opeLogicas(
        Number(idade),
        temCarteira === 'true'
    );

    res.json({ resultado });
});

app.get('/ex6', (req, res) => {
    let { nota } = req.query;

    let resultado = ifElse(Number(nota));

    res.json({ resultado });
});

app.get('/ex7', (req, res) => {
    let { dia } = req.query;

    let resultado = Case(Number(dia));

    res.json({ resultado });
});

app.get('/ex8', (req, res) => {
    let resultado = laçoRep();

    res.json({ resultado });
});

app.get('/ex9', (req, res) => {
    let { novoValor } = req.query;

    let resultado = Vetor(novoValor);

    res.json({ resultado });
});


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})