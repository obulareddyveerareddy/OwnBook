const appuserTypeDefs = `
scalar Date

type Query {
  getAllAppUsers: [AppUser]
  findAppUserById(id:Int): AppUser
  getGoogleAuthSessionProfile:Session
  findAppUserByGooglerefid(googlerefid:String):AppUser
}

type AppUser{
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
  addNewAppUser(displayName:String!, email:String, googleRefId:String): AppUser
}
`;

export default appuserTypeDefs;