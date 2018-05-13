const accountsTypeDefs = `
scalar Date

type Query {
  getAllAccounts: [Accounts]
  accounts(id:Int): Accounts
  getProfileByAccountId:Session
  findAccountByGooglerefid(googlerefid:String):Accounts
}

type Accounts{
  id: Int
  displayName: String
  email: String
  googleRefId:String
  createdAt: Date
  updatedAt: Date
}

type Session{
  profile:String
}

type Mutation {
  addNewAccount(displayName:String!, email:String, googleRefId:String): Accounts
}
`;

export default accountsTypeDefs;