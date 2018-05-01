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
    accounts: (_, args) => {
      return Accounts.find({ where: args });
    },
    getAllAccounts: () => {
      return Accounts.findAll();
    }
  },
  Mutation:{
      addAccounts:(_, args) =>{
        return Accounts.build(args).save();
      },
      updateAccounts:(_, args) =>{
        let updateSet = {};
        if(args.firstName){
          updateSet.firstName = args.firstName
        }
        if(args.lastName){
          updateSet.lastName = args.lastName
        }
        if(args.email){
          updateSet.email = args.email
        }
        return Accounts.update(updateSet, { where: { id: args.id }});
      },
      deleteAccounts:(_, args) =>{
        return Accounts.destroy({ where: { id: args.id }});
      },
      truncateAccounts:()=>{
        return Accounts.destroy({truncate:true});
      }
  }
};

export default accountsResolver;