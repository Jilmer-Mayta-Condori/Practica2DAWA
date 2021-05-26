
/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoCuentaCupoRepository')} obj.CuentaRepository
 */
 module.exports = ({ CuentaRepository }) => {
    return async ({ id, saldo }, UniqueAccount) => {
        const nuevoSaldo = parseFloat(UniqueAccount.saldo)+parseFloat(saldo)
        const ChangeSaldo = {
            saldo: nuevoSaldo
        }
      return await CuentaRepository.update(id, ChangeSaldo)
    }
}
  