/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoCuentaCupoRepository')} obj.CuentaRepository
 */
 module.exports = ({ CuentaRepository }) => {
    return async ({ id }) => {
      return await CuentaRepository.delete({ id })
    }
  }
  