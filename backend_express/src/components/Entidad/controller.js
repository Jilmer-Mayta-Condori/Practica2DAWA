const MongoEntidadRepository = require('./infraestructure/MongoEntidadRepository')
const CreateEntity = require('./application/CreateEntidad')
const ShowAllEntity = require('./application/ShowAllEntidad')
const DeleteEntity = require('./application/DeleteEntidad')
const GetEntity = require('./application/GetEntidad')
const UpdateEntity = require('./application/UpdateEntity')

const EntidadRepository = new MongoEntidadRepository()
/**
 * @param {import('express').Request} _
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const createNewEntity = async (req, res, next) => {
  try {
    const query = CreateEntity({ EntidadRepository })
    const contact = await query(req.body)
    res.status(201).json({
      data: contact,
      message: 'Entity created'
    })
  } catch (e) {
    next(e)
  }
}

const showAllEntity = async (_, res, next) => {
  try {
    const query = ShowAllEntity({ EntidadRepository })
    const allentity = await query()
    res.json(allentity)
  } catch (e) {
    next(e)
  }
}

const DeleteUniqueEntity = async (req, res, next) => {
  try {
    const query = DeleteEntity({ EntidadRepository })
    const id = await query(req.params)
    res.status(204).end()
  } catch (e) {
    next(e)
  }
}

const GetEntityById = async (req, res, next) => {
  try {
    const query = GetEntity({ EntidadRepository })
    const UniqueEntity = await query(req.params)
    if (UniqueEntity) {
      res.json(UniqueEntity)
    } else {
      res.send('<h3>no existe persona con el id enviado</h3>')
    }
  } catch (e) {
    next(e)
  }
}

const UpdateById = async (req, res, next) => {
  try {
    const query = UpdateEntity({ EntidadRepository })
    const UniqueContact = await query(req.body)
    if (UniqueContact) {
      res.json(UniqueContact)
    } else {
      res.send('<h3>no existe persona con el id enviado</h3>')
    }
  } catch (e) {
    next(e)
  }
}

module.exports = {
  createNewEntity,
  showAllEntity,
  DeleteUniqueEntity,
  GetEntityById,
  UpdateById
}
