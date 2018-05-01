import accountsTypeDefs   from './../accounts/accountsTypeDefs';

const transactionsTypeDefs = `
type Query {
  getAllTransactions: [Transactions]
  transactions(id:Int): Transactions
}

type Transactions{
    id:Int
    label: String
    amount: Float
    recieved: Boolean
    given: Boolean
    accountId:Int
    account:Accounts
    createdAt: Date
    updatedAt: Date
}

type Mutation {
  addTransaction(label:String!, amount:Float, recieved:Boolean, given:Boolean, accountId:Int): Transactions
}
`;

export default transactionsTypeDefs;