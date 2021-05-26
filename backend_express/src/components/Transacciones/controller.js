const MongoTransactionRepository = require('./infraestructure/MongoTransaccionRepository')
const CreateBankTransaction = require('./application/CreateTransaction')
const ShowAllBankTransaction = require('./application/ShowAllTransaction')
const DeleteBankTransaction = require('./application/DeleteTransaction')
const GetBankTransaction = require('./application/GetTransaction')
const UpdateBankTransaction = require('./application/UpdateTransaction')
const GetAllTransaction = require('./application/GetAllTransactionbyIdEntity')
const GetAllTransactionGet = require('./application/GetAllTransactionGet')

const TransactiondRepository = new MongoTransactionRepository()
/**
 * @param {import('express').Request} _
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const createNewTransaction = async (req, res, next) => {
  try {
    const query = CreateBankTransaction({ TransactiondRepository })
    const transaction = await query(req.body)
    
    res.status(201).json({
      data: transaction,
      message: 'New Transaction created'
    })
  } catch (e) {
    next(e)
  }
}

const showAllTransaction = async (_, res, next) => {
  try {
    const query = ShowAllBankTransaction({ TransactiondRepository })
    const allentity = await query()
    res.json(allentity)
  } catch (e) {
    next(e)
  }
}

const DeleteUniqueTransaction = async (req, res, next) => {
  try {
    const query = DeleteBankTransaction({ TransactiondRepository })
    const id = await query(req.params)
    res.status(204).end()
  } catch (e) {
    next(e)
  }
}

const GetTransactionById = async (req, res, next) => {
  try {
    const query = GetBankTransaction({ TransactiondRepository })
    const UniqueTransaction = await query(req.params)
    if (UniqueTransaction) {
      res.json(UniqueTransaction)
    } else {
      res.send('<h3>no existe persona con el id enviado</h3>')
    }
  } catch (e) {
    next(e)
  }
}

const UpdateTransactionById = async (req, res, next) => {
  try {
    const query = UpdateBankTransaction({ TransactiondRepository })
    const UniqueTransaction = await query(req.body)
    if (UniqueTransaction) {
      res.json(UniqueTransaction)
    } else {
      res.send('<h3>no existe persona con el id enviado</h3>')
    }
  } catch (e) {
    next(e)
  }
}

// const GetAllBankTransaction = async (req, res, next) => {
//   try {
//     const query = GetAllTransaction({ TransactiondRepository })
//     const UniqueTransaction = await query(req.params)
//     if (UniqueTransaction) {
//       res.json(UniqueTransaction)
//     } else {
//       res.send('<h3>no Realizaste niguna transaccion</h3>')
//     }
//   } catch (e) {
//     next(e)
//   }
// }

// const GetAllBankTransactionGet = async (req, res, next) => {
//   try {
//     const query = GetAllTransactionGet({ TransactiondRepository })
//     const UniqueTransaction = await query(req.params)
//     if (UniqueTransaction) {
//       res.json(UniqueTransaction)
//     } else {
//       res.send('<h3>no Recibiste niguna transaccion</h3>')
//     }
//   } catch (e) {
//     next(e)
//   }
// }

const GetAllMyTransactions = async (req, res, next) => {
  try {
    const queryTransactionSet = GetAllTransaction({ TransactiondRepository })
    const TransactionSet = await queryTransactionSet(req.params)
    const queryTransactionGet = GetAllTransactionGet({ TransactiondRepository })
    const TransactionGet = await queryTransactionGet(req.params)
    const AllMyTransaction = []
    
    if (TransactionSet) {
      TransactionSet.map((transaccion)=>{
        AllMyTransaction.push(transaccion)
      })

      if (TransactionGet) {
        TransactionGet.map((transaccion)=>{
          AllMyTransaction.push(transaccion)
        })
        res.json(AllMyTransaction)
      } else{
        res.json(AllMyTransaction)
      }
      res.json(AllMyTransaction)
      
    } else {
      res.send('<h3>no Recibiste ninguna transaccion</h3>')
    }
  } catch (e) {
    next(e)
  }
}

module.exports = {
  createNewTransaction,
  showAllTransaction,
  DeleteUniqueTransaction,
  GetTransactionById,
  UpdateTransactionById,
  // GetAllMyTransactions,
  // GetAllTransactionGet,
  GetAllMyTransactions
}
