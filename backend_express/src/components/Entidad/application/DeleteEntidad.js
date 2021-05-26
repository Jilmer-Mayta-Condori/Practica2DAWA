/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoEntidadRepository')} obj.EntidadRepository
 */
module.exports = ({ EntidadRepository }) => {
  return async ({ id }) => {
    return await EntidadRepository.delete({ id })
  }
}
