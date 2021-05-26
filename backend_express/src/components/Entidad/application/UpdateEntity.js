/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoEntidadRepository')} obj.EntidadRepository
 */
 module.exports = ({ EntidadRepository }) => {
    return async ({ id, id_cuenta }) => {
        const ChangeEntity = {
            id_cuenta: id_cuenta
        }
  
      return await EntidadRepository.update(id, ChangeEntity)
    }
}
  