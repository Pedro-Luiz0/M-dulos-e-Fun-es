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
        enunciado: 'asdfad',
        resultado: ex1

    }
    res.json(resposta)
})

app.get('/ex2', (req, res) => {
    let ex2 =  decVariavel()
    let resposta = {
        enunciado: 'asdfad',
        resultado: ex2

    }
  res.json(resposta)
})

app.get('/ex3', (req, res) => {
    let ex3 = opeAritmeticas()
    let resposta = {
        enunciado: 'asdfad',
        resultado: ex3

    }
  res.json(resposta)
})

app.get('/ex4', (req, res) => {
    let ex4 = opeRelacionais()
    let resposta = {
        enunciado: 'asdfad',
        resultado: ex4

    }
  res.json(resposta)
})

app.get('/ex5', (req, res) => {
    let ex5 = opeLogicas()
    let resposta = {
        enunciado: 'asdfad',
        resultado: ex5

    }
  res.json(resposta)
})

app.get('/ex6', (req, res) => {
    let ex6 = ifElse()
    let resposta = {
        enunciado: 'asdfad',
        resultado: ex6

    }
  res.json(resposta)
})

app.get('/ex7', (req, res) => {
    let ex7 = Case()
    let resposta = {
        enunciado: 'asdfad',
        resultado: ex7

    }
  res.json(resposta)
})

app.get('/ex8', (req, res) => {
    let ex8 = laçoRep()
    let resposta = {
        enunciado: 'asdfad',
        resultado: ex8

    }
  res.json(resposta)
})

app.get('/ex9', (req, res) => {
    let ex9 = Vetor()
    let resposta = {
        enunciado: 'asdfad',
        resultado: ex9

    }
  res.json(resposta)
})



app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})