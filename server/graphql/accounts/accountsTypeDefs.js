const accountsTypeDefs = `
scalar Date

type Query {
  getAllAccounts: [Accounts]
  accounts(id:Int): Accounts
}

type Accounts{
  id: Int
  firstName: String
  lastName: String
  email: String
  createdAt: Date
  updatedAt: Date
}

type Mutation {
  addAccounts(firstName:String!, lastName:String, email:String!): Accounts
  updateAccounts(id:Int!, firstName:String, lastName:String, email:String):Accounts
  deleteAccounts(id:Int!):Accounts
  truncateAccounts:Accounts
}
`;

export default accountsTypeDefs;