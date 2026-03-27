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
  res.send(ex1)
})

app.get('/ex2', (req, res) => {
    let ex2 =  decVariavel()
  res.send(ex2)
})

app.get('/ex3', (req, res) => {
    let ex3 = opeAritmeticas()
  res.send(ex3)
})

app.get('/ex4', (req, res) => {
    let ex4 = opeRelacionais()
  res.send(ex4)
})

app.get('/ex5', (req, res) => {
    let ex5 = opeLogicas()
  res.send(ex5)
})

app.get('/ex6', (req, res) => {
    let ex6 = ifElse()
  res.send(ex6)
})

app.get('/ex7', (req, res) => {
    let ex7 = Case()
  res.send(ex7)
})

app.get('/ex8', (req, res) => {
    let ex8 = laçoRep()
  res.send(ex8)
})

app.get('/ex9', (req, res) => {
    let ex9 = Vetor()
  res.send(ex9)
})



app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})