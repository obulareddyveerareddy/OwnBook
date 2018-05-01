const codesTypeDefs = `
type Query {
  getAllCodes: [Codes]
  codes(id:Int): Codes
}

type Codes{
  id: Int
  name: String
  description: String
  createdAt: Date
  updatedAt: Date
}

type Mutation {
  addCodes(name:String!, description:String): Codes
  updateCodes(id:Int!, name:String!, description:String):Codes
  deleteCodes(id:Int!):Codes
  truncateCodes:Codes
}
`;

export default codesTypeDefs;