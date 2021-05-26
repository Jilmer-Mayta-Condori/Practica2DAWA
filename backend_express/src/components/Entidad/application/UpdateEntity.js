/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoEntidadRepository')} obj.EntidadRepository
 */
 module.exports = ({ EntidadRepository }) => {
    return async ( {id, cuentas }) => {
        const ChangeEntity = {
          cuentas_cupo: [{
            saldo: cuentas.saldo,
            tipo_cambio: cuentas.tipo_cambio
          }]
        }
  
      return await EntidadRepository.update(id, ChangeEntity)
    }
}
  