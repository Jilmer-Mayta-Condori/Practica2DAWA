/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoTransaccionRepository')} obj.TransactiondRepository
 */
 module.exports = ({ TransactiondRepository }) => {
    return async ({ id_entity_set, id_entity_get, amount, date}) => {
      const newTransaction = {
        id_entity_set: id_entity_set,
        id_entity_get: id_entity_get,
        amount: amount,
        date: date
      }
      return await TransactiondRepository.add(newTransaction)
    }
  }
  