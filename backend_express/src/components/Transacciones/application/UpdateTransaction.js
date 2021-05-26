/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoTransaccionRepository')} obj.TransactiondRepository
 */
 module.exports = ({ TransactiondRepository }) => {
    return async ({ id, date }) => {
        const ChangeTransaccion = {
            date: date
        }
  
      return await TransactiondRepository.update(id, ChangeTransaccion)
    }
}
  