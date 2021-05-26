const MongoCuentaCupoRepository = require('./infraestructure/MongoCuentaCupoRepository')
const CreateAccount = require('./application/CreateCuenta')
const ShowAllAccount = require('./application/ShowAllCuenta')
const DeleteAccount = require('./application/DeleteCuenta')
const GetAccount = require('./application/GetCuenta')
const UpdateAccount = require('./application/UpdateCuenta')
const GetAllAccount = require('./application/GetCoincidentIdEntidad')
const AddMoneyAccount = require('./application/AddMoneyAccount')
const WithdrawMoneyAccount = require('./application/WithdrawMoneyAccount')

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

const GetAllCoincident = async (req, res, next) => {
  try {
    console.log(req.params)
    const query = GetAllAccount({ CuentaRepository })
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

const AddMoneyBankAccount = async (req, res, next) => {
  try {
    const querygetById = GetAccount({ CuentaRepository })
    const UniqueAccount = await querygetById(req.body)
    const query = AddMoneyAccount({ CuentaRepository })
    const AddMoney = await query(req.body, UniqueAccount)
    if (AddMoney) {
      res.json(AddMoney)
    } else {
      res.send('<h3>error en el abonado/h3>')
    }
  } catch (e) {
    next(e)
  }
}

const WithDrawMoneyBankAccount = async (req, res, next) => {
  try {
    const querygetById = GetAccount({ CuentaRepository })
    const UniqueAccount = await querygetById(req.body)
    const query = WithdrawMoneyAccount({ CuentaRepository })
    const WithDrawMoney = await query(req.body, UniqueAccount)
    if (WithDrawMoney) {
      res.json(WithDrawMoney)
    } else {
      res.send('<h3>error en el retiro</h3>')
    }
  } catch (e) {
    next(e)
  }
}

const GetAllBalanceBankAccount = async (req, res, next) => {
  try {
    console.log(req.params)
    const query = GetAllAccount({ CuentaRepository })
    const UniqueAccount = await query(req.params)
    const Saldo = []

    if (UniqueAccount) {
      UniqueAccount.map((unico)=>{
        const unique = {
          cuenta: unico._id,
          saldo: unico.saldo
        }
        Saldo.push(unique)
      })
      res.json(Saldo)
    } else {
      res.send('<h3>No cuentas con ninguna cuenta Cupo</h3>')
    }
  } catch (e) {
    next(e)
  }
}

const GetTotalAmountBankAccount = async (req, res, next) => {
  try {
    console.log(req.params)
    const query = GetAllAccount({ CuentaRepository })
    const UniqueAccount = await query(req.params)
    const Saldo = []
    let total = 0

    if (UniqueAccount) {
      UniqueAccount.map((unico)=>{
        total += parseFloat(unico.saldo)
        
      })
      const unique = {
        saldoTotal: total
      }
      Saldo.push(unique)
      res.json(Saldo)
    } else {
      res.send('<h3>No cuentas con ninguna cuenta Cupo</h3>')
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
  UpdateBankAccountById,
  GetAllCoincident,
  AddMoneyBankAccount,
  WithDrawMoneyBankAccount,
  GetAllBalanceBankAccount,
  GetTotalAmountBankAccount
}
