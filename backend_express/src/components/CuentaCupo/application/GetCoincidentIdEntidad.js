/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoCuentaCupoRepository')} obj.CuentaRepository
 */
 module.exports = ({ CuentaRepository }) => {
    return async ({ id }) => {
      console.log(id)
      return await CuentaRepository.getAllCoincident({ id })
    }
  }
  