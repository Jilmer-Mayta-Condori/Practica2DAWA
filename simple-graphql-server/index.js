const { ApolloServer, gql } = require('apollo-server')
const { v4: uuid } = require('uuid')
const fetch = require('node-fetch');
const axios = require('axios');

let bankAccount = [
]

let entity = {}

let transaction = [
]
const typeDefs = gql`
  type Entity {
    name: String!
    number: String!
    mail: String!
    password: String!
    identity_document: String!
    _id: ID!
  }
  type BankAccount {
    id_entidad: String!
    saldo: String!
    tipo_cambio: String!
    _id: ID!
  }
  type Transaction {
    id_entity_set: String!
    id_entity_get: String!
    amount: String!
    date: String!
    _id: ID!
  }
  type Mutation {
    "Agrega una nueva entidad"
    addEntity(
        name: String!
        number: String!
        mail: String!
        password: String!
        identity_document: String!
    ): Entity
  }
  type Query {
    TotalAmountAccountbyEntity(id_entidad: String): [BankAccount!]!
    GetBankAccount: [BankAccount!]!
  }
`

const resolvers = {
  Query: {
    TotalAmountAccountbyEntity: async(root, args) => {
        bankAccount = []
        await fetch('http://localhost:3000/apiBank/account/getTotalAmount/'+args.id_entidad+'/')
          .then(response => response.json()) 
          .then(quote =>  {bankAccount = [...bankAccount, ...quote]
        console.log(args)})
        return bankAccount
      },
    GetBankAccount: async() => {
        bankAccount = []
        await fetch('http://localhost:3000/apiBank/account')
          .then(response => response.json()) 
          .then(quote =>  {bankAccount = [...bankAccount, ...quote]
        console.log(bankAccount)})
        return bankAccount
    },
  },
  Mutation: {
    addEntity: (root, args) => {
        entity = []
        let datos ={
            name : args.name,
            number : args.number,
            mail: args.mail,
            identity_document: args.identity_document,
            password: args.password,
        }
        axios.post('http://localhost:3000/api/entidad', datos)
            .then(res=>{
            entity = [...entity, res.data.data]
            console.log(entity)
        })
        return entity
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`)
})