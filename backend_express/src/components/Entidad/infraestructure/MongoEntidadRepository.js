const MongoLib = require('../../../lib/mongo')

class MongoEntidadRepository {
  constructor () {
    this.collection = 'Entidad'
    this.mongoDB = new MongoLib()
  }

  async add (entidad) {
    await this.mongoDB.create(this.collection, entidad)
    return { ...entidad }
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

}

module.exports = MongoEntidadRepository
