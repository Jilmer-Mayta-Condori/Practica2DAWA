
const router = require('express').Router()
const { persons } = require('../utils/mockup')
const express = require('express')

const { createNewEntity } = require('../components/Entidad/controller')
const { showAllEntity } = require('../components/Entidad/controller')
const { DeleteUniqueEntity } = require('../components/Entidad/controller')
const { GetEntityById } = require('../components/Entidad/controller')
const { UpdateById } = require('../components/Entidad/controller')

const bodyParser = require('body-parser')

const fecha = new Date()

router.get('/', (request, response, next) => {
  response.send('<h1>Bienvenidos a mi pagina con NODEJS</h1>' +
  '<br/><a href="/form"><button>agregar nuevos registros</button></a> <br/>' +
  '<br/><a href="/api/entidad"><button>ver registros JSON</button></a>')
})

router.get('/api/entidad', showAllEntity)

router.get('/api/entidad/:id', GetEntityById)

router.delete('/api/entidad/:id', DeleteUniqueEntity)

router.post('/api/entidad', createNewEntity)

router.put('/api/entidad', UpdateById)

router.get('/form', (request, response) => {
  response.send('<h1>Bienvenidos a mi formulario con NODEJS</h1>' +
   '<form method="POST" action="/api/personas">' +
   '  <label>Nombre</label><br/>' +
   '    <input type="text" name="nombre"> <br/><br/>' +
   '  <label>Documento de Identidad</label><br/>' +
   '    <input type="text" name="documento"> <br/><br/>' +
   '  <label>Correo</label><br/>' +
   '    <input type="text" name="correo"> <br/><br/>' +
   '  <label>Telefono</label><br/>' +
   '    <input type="text" name="numero"> <br/><br/>' +
   '  <button type="submit">Enviar</button>' +
   '</form>')
})

router.use(express.json())

module.exports = router
