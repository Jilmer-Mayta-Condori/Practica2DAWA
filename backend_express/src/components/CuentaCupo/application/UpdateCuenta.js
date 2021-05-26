/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoCuentaCupoRepository')} obj.CuentaRepository
 */
 module.exports = ({ CuentaRepository }) => {
    return async ({ id, saldo }) => {
        const ChangeSaldo = {
            saldo: saldo
        }
  
      return await CuentaRepository.update(id, ChangeSaldo)
    }
}
  