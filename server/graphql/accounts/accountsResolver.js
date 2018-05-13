import { Accounts } from './../../orm/connectors';
import { GraphQLScalarType } from 'graphql';

const accountsResolver = {
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
    accounts: (_, args, context) => {
      return Accounts.find({ where: args });
    },
    getAllAccounts: () => {
      return Accounts.findAll();
    },
    getProfileByAccountId:(_, args, context) =>{
      console.log('~~~~~~~~~~~~~~~ >>> getProfileByAccountId:(...) <<< ~~~~~~~~~~~~~~~');
      return {profile:JSON.stringify(context.session)};
    },
    findAccountByGooglerefid:(_, args, context) => {
      console.log('~~~~~~~~~~~~~~~ >>> findAccountByGooglerefid:(...) <<< ~~~~~~~~~~~~~~~');
      console.log(args);
      return Accounts.find({where: args});
    }
  },
  Mutation:{
    addNewAccount:(_, args, context) =>{
      console.log('~~~~~~~~~~~~~~~ >>> addNewAccount:(...) <<< ~~~~~~~~~~~~~~~');
      console.log(args);
      return Accounts.build(args).save();
    }
  }
};

export default accountsResolver;