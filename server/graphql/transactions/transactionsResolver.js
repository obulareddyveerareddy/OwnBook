import { Transactions, Accounts } from './../../orm/connectors';
const transactionsResolver = {
  Query: {
    transactions: (_, args) => {
      return Transactions.find({ where: args, include : [Accounts] });
    },
    getAllTransactions: () => {
      return Transactions.findAll({include : [Accounts] });
    }
  },
  Mutation:{
    addTransaction:(_, args) =>{
      return Transactions.build(args).save();
    }
  }
};

export default transactionsResolver;