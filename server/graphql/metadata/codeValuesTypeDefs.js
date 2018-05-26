const codeTypeDefs = `

type Query {
  getCodeValueByCodeId(codeId:Int): [CodeValues],
  getAllCodeValuesByCodeIdList(codeIds:[Int]):[CodeValues],
  getAllCodeValues:[CodeValues]
}

type CodeValues{
  id:Int
  codeValueId:Int
  name:String
  description:String
  codeId:Int
  codes:Codes
  createdAt: Date
  updatedAt: Date
}

type Codes{
  id:Int
  name:String
  description:String
  codeId:Int
}

type Mutation {
    addCodeValue(codeValueId:Int, name:String, description:String, codeId:Int):CodeValues
    updateCodeValue(codeValueId:Int, name:String, description:String, codeId:Int):Boolean
    deleteCodeValueById(codeValueId:Int):Boolean
}
`;

export default codeTypeDefs;