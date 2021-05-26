/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoEntidadRepository')} obj.EntidadRepository
 */
module.exports = ({ EntidadRepository }) => {
  return async ({ name, number, mail, password, identity_document }) => {
    const newEntity = {
      name: name,
      number: number,
      mail: mail,
      password: password,
      identity_document: identity_document
      // cuentas_cupo: [],
      // transacciones: []
    }

    return await EntidadRepository.add(newEntity)
  }
}
