/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoCuentaCupoRepository')} obj.CuentaRepository
 */
 module.exports = ({ CuentaRepository }) => {
    return async () => {
      return await CuentaRepository.getAll()
    }
  }
  