
const router = require('express').Router()
const express = require('express')

const { createNewBankAccount } = require('../components/CuentaCupo/controller')
const { showAllBankAccount } = require('../components/CuentaCupo/controller')
const { DeleteUniqueBankAccount } = require('../components/CuentaCupo/controller')
const { GetBankAccountById} = require('../components/CuentaCupo/controller')
const { UpdateBankAccountById } = require('../components/CuentaCupo/controller')
const { GetAllCoincident } = require('../components/CuentaCupo/controller')
const { AddMoneyBankAccount } = require('../components/CuentaCupo/controller')
const { WithDrawMoneyBankAccount } = require('../components/CuentaCupo/controller')
const { GetAllBalanceBankAccount} = require('../components/CuentaCupo/controller')

const bodyParser = require('body-parser')

const fecha = new Date()

router.get('/apiBank', (request, response, next) => {
  response.send('<h1>Bienvenidos a mi pagina con NODEJS</h1>' +
  '<br/><a href="/apiBank/entidad"><button>ver registros JSON</button></a>')
})

router.get('/apiBank/account', showAllBankAccount)

router.get('/apiBank/account/:id',   GetBankAccountById)

router.delete('/apiBank/account/:id', DeleteUniqueBankAccount)

router.post('/apiBank/account', createNewBankAccount)

router.put('/apiBank/account', UpdateBankAccountById)

router.get('/apiBank/account/GetAllByIdEntity/:id', GetAllCoincident)

router.put('/apiBank/account/addMoneyAccount', AddMoneyBankAccount)

router.put('/apiBank/account/withdrawMoneyAccount', WithDrawMoneyBankAccount)

router.get('/apiBank/account/getBalanceBankAccount/:id', GetAllBalanceBankAccount)

router.use(express.json())

module.exports = router
