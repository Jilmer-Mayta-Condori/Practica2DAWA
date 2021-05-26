/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoTransaccionRepository')} obj.TransactiondRepository
 */
 module.exports = ({ TransactiondRepository }) => {

    return async ({ id }) => {
        return await TransactiondRepository.getAllTransactionGet({ id })
    }
}
  