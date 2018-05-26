const codeTypeDefs = `

type Query {
  getCodeById(codeId:Int): Code,
  getAllCodes:[Code]
}

type Code{
  id:Int
  name:String
  description:String
  codeId:Int
  createdAt: Date
  updatedAt: Date
}


type Mutation {
    addCode(name:String, description:String, codeId:Int):Code
    updateCode(id:Int, name:String, description:String, codeId:Int):Boolean
    deleteCode(id:Int):Boolean
    deleteByCodeId(codeId:Int):Boolean
}
`;

export default codeTypeDefs;