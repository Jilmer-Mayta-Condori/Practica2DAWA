/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoEntidadRepository')} obj.EntidadRepository
 */
module.exports = ({ EntidadRepository }) => {
  return async () => {
    return await EntidadRepository.getAll()
  }
}
