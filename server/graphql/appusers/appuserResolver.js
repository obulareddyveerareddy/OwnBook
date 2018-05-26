import { AppUser } from './../../orm/connectors';
import { GraphQLScalarType } from 'graphql';

const appuserResolver = {
  Date:new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    parseValue(value) {
      return new Date(value);
    },
    serialize(value) {
      return value.getTime();
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10);
      }
      return null;
    },
  }),
  Query: {
    getAllAppUsers: () => {
      return AppUser.findAll();
    },
    findAppUserById: (_, args, context) => {
      return AppUser.find({ where: args });
    },
    getGoogleAuthSessionProfile:(_, args, context) =>{
      console.log('~~~~~~~~~~~~~~~ >>> getGoogleAuthSessionProfile:(...) <<< ~~~~~~~~~~~~~~~');
      console.log(context);
      return {profile:JSON.stringify(context.session)};
    },
    findAppUserByGooglerefid:(_, args, context) => {
      console.log('~~~~~~~~~~~~~~~ >>> findAppUserByGooglerefid:(...) <<< ~~~~~~~~~~~~~~~');
      console.log(args);
      return AppUser.find({where: args});
    }
  },
  Mutation:{
    addNewAppUser:(_, args, context) =>{
      console.log('~~~~~~~~~~~~~~~ >>> addNewAppUser:(...) <<< ~~~~~~~~~~~~~~~');
      console.log(args);
      console.log(context);
      return AppUser.build(args).save();
    }
  }
};

export default appuserResolver;