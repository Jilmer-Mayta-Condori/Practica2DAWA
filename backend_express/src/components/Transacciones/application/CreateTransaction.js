/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoTransaccionRepository')} obj.TransactiondRepository
 */
 module.exports = ({ TransactiondRepository }) => {
    const today = new Date()
    return async ({ id_entity_set, id_entity_get, amount}) => {
      const newTransaction = {
        id_entity_set: id_entity_set,
        id_entity_get: id_entity_get,
        amount: amount,
        date: today
      }
      return await TransactiondRepository.add(newTransaction)
    }
  }
  