const codevaluesTypeDefs = `
type Query {
  getAllCodevalues: [Codevalues]
  codevalues(id:Int): Codevalues
}

type Codevalues{
  id: Int
  name: String
  description: String
  codeId: Int
  code:Codes
  createdAt: Date
  updatedAt: Date
}

type Mutation {
  addCodevalues(name:String!, description:String, codeId:Int): Codevalues
  updateCodevalues(id:Int!, name:String!, description:String, codeId:Int):Codevalues
  deleteCodevalues(id:Int!):Codevalues
  truncateCodevalues:Codevalues
}
`;

export default codevaluesTypeDefs;