import { mergeTypes }         from 'merge-graphql-schemas';
import accountsTypeDefs       from './graphql/accounts/accountsTypeDefs';
import transactionsTypeDefs   from './graphql/transactions/transactionsTypeDefs';
import codesTypeDefs          from './graphql/metadata/codesTypeDefs';
import codevaluesTypeDefs     from './graphql/metadata/codevaluesTypeDefs';

const types = [
  accountsTypeDefs,
  transactionsTypeDefs,
  codesTypeDefs,
  codevaluesTypeDefs
];

export default mergeTypes(types, { all: true });