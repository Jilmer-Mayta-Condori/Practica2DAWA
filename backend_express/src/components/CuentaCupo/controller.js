const MongoCuentaCupoRepository = require('./infraestructure/MongoCuentaCupoRepository')
const CreateAccount = require('./application/CreateCuenta')
const ShowAllAccount = require('./application/ShowAllCuenta')
const DeleteAccount = require('./application/DeleteCuenta')
const GetAccount = require('./application/GetCuenta')
const UpdateAccount = require('./application/UpdateCuenta')

const CuentaRepository = new MongoCuentaCupoRepository()
/**
 * @param {import('express').Request} _
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const createNewBankAccount = async (req, res, next) => {
  try {
    const query = CreateAccount({ CuentaRepository })
    const contact = await query(req.body)
    res.status(201).json({
      data: contact,
      message: 'Bank Account created'
    })
  } catch (e) {
    next(e)
  }
}

const showAllBankAccount = async (_, res, next) => {
  try {
    const query = ShowAllAccount({ CuentaRepository })
    const allentity = await query()
    res.json(allentity)
  } catch (e) {
    next(e)
  }
}

const DeleteUniqueBankAccount = async (req, res, next) => {
  try {
    const query = DeleteAccount({ CuentaRepository })
    const id = await query(req.params)
    res.status(204).end()
  } catch (e) {
    next(e)
  }
}

const GetBankAccountById = async (req, res, next) => {
  try {
    const query = GetAccount({ CuentaRepository })
    const UniqueAccount = await query(req.params)
    if (UniqueAccount) {
      res.json(UniqueAccount)
    } else {
      res.send('<h3>no existe Cuenta con el id enviado</h3>')
    }
  } catch (e) {
    next(e)
  }
}

const UpdateBankAccountById = async (req, res, next) => {
  try {
    const query = UpdateAccount({ CuentaRepository })
    const UniqueAccount = await query(req.body)
    if (UniqueAccount) {
      res.json(UniqueAccount)
    } else {
      res.send('<h3>no existe cuenta con el id enviado</h3>')
    }
  } catch (e) {
    next(e)
  }
}

module.exports = {
  createNewBankAccount,
  showAllBankAccount,
  DeleteUniqueBankAccount,
  GetBankAccountById,
  UpdateBankAccountById
}
