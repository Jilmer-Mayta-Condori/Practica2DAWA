/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoCuentaCupoRepository')} obj.CuentaRepository
 */
 module.exports = ({ CuentaRepository }) => {
    return async ({ id_entidad, saldo, tipo_cambio }) => {
      const newCuenta = {
        id_entidad: id_entidad,
        saldo: saldo,
        tipo_cambio: tipo_cambio
      }
  
      return await CuentaRepository.add(newCuenta)
    }
  }
  