
const router = require('express').Router()
const express = require('express')

const { createNewTransaction } = require('../components/Transacciones/controller')
const { showAllTransaction} = require('../components/Transacciones/controller')
const { DeleteUniqueTransaction } = require('../components/Transacciones/controller')
const { GetTransactionById } = require('../components/Transacciones/controller')
const { UpdateTransactionById } = require('../components/Transacciones/controller')
const { GetAllMyTransactions } = require('../components/Transacciones/controller')



const bodyParser = require('body-parser')

const fecha = new Date()

router.get('/apiTransaction', (request, response, next) => {
  response.send('<h1>Bienvenidos a mi pagina con NODEJS</h1>' +
  '<br/><a href="/apiTransaction/transaction"><button>ver registros JSON</button></a>')
})

router.get('/apiTransaction/transaction', showAllTransaction)

router.get('/apiTransaction/transaction/:id', GetTransactionById)

router.delete('/apiTransaction/transaction/:id', DeleteUniqueTransaction)

router.post('/apiTransaction/transaction', createNewTransaction)

router.put('/apiTransaction/transaction', UpdateTransactionById)

router.get('/apiTransaction/transaction/getAllMyTransaction/:id', GetAllMyTransactions)

router.use(express.json())

module.exports = router
