const MongoLib = require('../../../lib/mongo')

class MongoTransactionRepository {
  constructor () {
    this.collection = 'Transaccion'
    this.mongoDB = new MongoLib()
  }

  async add (transaccion) {
    await this.mongoDB.create(this.collection, transaccion)
    return { ...transaccion }
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

  async update (id, transaccion ) {
    return this.mongoDB.update(this.collection, id, transaccion)
  }

  async getAllTransaction ({id}){
    return this.mongoDB.getAllTransaction(this.collection, id)
  }

  async getAllTransactionGet ({id}){
    return this.mongoDB.getAllTransactionGet(this.collection, id)
  }

}

module.exports = MongoTransactionRepository
