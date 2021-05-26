const MongoLib = require('../../../lib/mongo')

class MongoCuentaRepository {
  constructor () {
    this.collection = 'CuentasCupo'
    this.mongoDB = new MongoLib()
  }

  async add (Cuenta) {
    await this.mongoDB.create(this.collection, Cuenta)
    return { ...Cuenta }
  }
  async delete ({ id }) {
    return this.mongoDB.delete(this.collection, id)
  }

  async getById ({ id }) {
    return await this.mongoDB.get(this.collection, id)
  }

  async getAll () {
    const query = null
    return this.mongoDB.getAll(this.collection, query)
  }

  async update (id, entidad ) {
    return this.mongoDB.update(this.collection, id, entidad)
  }
  async getAllCoincident (id ) {
    return this.mongoDB.getAllCoincident(this.collection, id)
  }
}

module.exports = MongoCuentaRepository
