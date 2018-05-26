const accountsTypeDefs = `

type Query {
  getAllAccountsByAppUserId(id:Int): [Accounts],
  getAllAccounts:[Accounts]
}

type Accounts{
  id:Int
  bankName:String
  accountHolderName:String
  accountNumber:String
  aliasName:String
  accountType:String
  appUserId:Int
  cardDetails:[CardDetailsOutput]
}

type CardDetailsOutput{
    accountId:Int
    key:String
    value:String
}

input CardDetailsInput{
    accountId:Int
    key:String
    value:String
}


type Mutation {
  addAccount(bankName:String
            ,accountHolderName:String
            ,accountNumber:String
            ,aliasName:String
            ,accountType:String
            ,cardDetails:[CardDetailsInput]): Accounts
}
`;

export default accountsTypeDefs;