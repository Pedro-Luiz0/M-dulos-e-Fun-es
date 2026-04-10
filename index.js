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
    let ex3 = opeAritmeticas()
    let resposta = {
        enunciado: 'Crie uma função chamada opeAritmeticas que simule o cálculo de uma compra. Dentro da função, declare as seguintes variáveis: precoMaca, do tipo numérico, com valor 2.50 (preço de uma maçã) quantidade, do tipo numérico, com valor 4 (quantidade comprada) desconto, do tipo numérico, com valor 1.50 (desconto aplicado na compra) A função deve calcular o valor total da compra multiplicando o preço pela quantidade e, em seguida, subtrair o desconto.',
        resultado: ex3

    }
  res.json(resposta)
})

app.get('/ex4', (req, res) => {
    let ex4 = opeRelacionais()
    let resposta = {
        enunciado: 'Crie uma função chamada opeRelacionais que verifique se um cliente pode entrar em um determinado estabelecimento. Dentro da função, declare as seguintes variáveis: idadeCliente, do tipo numérico, com valor 20 idadeMinima, do tipo numérico, com valor 18 Utilize um operador relacional para comparar as duas idades e determinar se o cliente possui idade suficiente para entrar. Armazene o resultado dessa comparação em uma variável chamada podeEntrar. A função deve retornar o valor dessa variável, que será true ou false.',
        resultado: ex4
    }
  res.json(resposta)
})

app.get('/ex5', (req, res) => {
    let ex5 = opeLogicas()
    let resposta = {
        enunciado: 'Crie uma função chamada opeLogicas que verifique se uma pessoa pode dirigir. Dentro da função, declare as seguintes variáveis: idade, do tipo numérico, com valor 20 temCarteira, do tipo booleano, com valor true Utilize um operador lógico AND (&&) para verificar se a pessoa atende às duas condições necessárias para dirigir: Ter idade maior ou igual a 18 anos Possuir carteira de habilitação Armazene o resultado dessa verificação em uma variável chamada podeDirigir. A função deve retornar uma mensagem informando se a pessoa pode ou não dirigir.',
        resultado: ex5

    }
  res.json(resposta)
})

app.get('/ex6', (req, res) => {
    let ex6 = ifElse()
    let resposta = {
        enunciado: 'Crie uma função chamada ifElse que avalie o desempenho de um aluno com base em sua nota. Dentro da função, declare uma variável: nota, do tipo numérico, com valor 7.5 Utilize uma estrutura condicional (if, else if, else) para classificar o aluno da seguinte forma: Se a nota for menor que 5, o aluno está reprovado Se a nota for maior ou igual a 5 e menor que 7, o aluno está em recuperação Se a nota for maior ou igual a 7, o aluno está aprovado A função deve retornar uma mensagem informando a situação do aluno. Após isso, execute a função e exporte-a para que possa ser utilizada em outros arquivos.',
        resultado: ex6
    }
  res.json(resposta)
})

app.get('/ex7', (req, res) => {
    let ex7 = Case()
    let resposta = {
        enunciado: 'Crie uma função chamada Case que identifique o dia da semana com base em um número. Dentro da função, declare uma variável: dia, do tipo numérico, com valor 3 Utilize uma estrutura de controle switch para verificar o valor de dia e retornar o nome correspondente do dia da semana, seguindo a tabela abaixo: 1 → Domingo 2 → Segunda-feira 3 → Terça-feira 4 → Quarta-feira 5 → Quinta-feira 6 → Sexta-feira 7 → Sábado Caso o valor não esteja entre 1 e 7, a função deve retornar a mensagem "Dia inválido".',
        resultado: ex7
    }
  res.json(resposta)
})

app.get('/ex8', (req, res) => {
    let ex8 = laçoRep()
    let resposta = {
        enunciado: 'Crie uma função chamada laçoRep que utilize uma estrutura de repetição para exibir números. Dentro da função, declare uma variável: i, do tipo numérico, com valor inicial 1 Utilize um laço de repetição while para percorrer os números de 1 até 10. A cada repetição, o valor de i deve ser incrementado em 1. A função deve retornar ou exibir os números de 1 até 10.',
        resultado: ex8
    }
  res.json(resposta)
})

app.get('/ex9', (req, res) => {
    let ex9 = Vetor()
    let resposta = {
        enunciado: 'Crie uma função chamada Vetor que trabalhe com um array de frutas. Dentro da função, declare um array chamado frutas contendo os seguintes elementos: "Maçã" "Banana" "laranja" Em seguida, altere o valor do segundo elemento do array (índice 1) para "morango". Por fim, a função deve retornar o array atualizado.',
        resultado: ex9
    }
  res.json(resposta)
})



app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})