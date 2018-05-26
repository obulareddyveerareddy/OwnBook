import { mergeTypes }       from 'merge-graphql-schemas';
import appuserTypeDefs      from './graphql/appusers/appuserTypeDefs';
import accountsTypeDefs     from './graphql/accounts/accountsTypeDefs';
import codeTypeDefs         from './graphql/metadata/codeTypeDefs';
import codeValuesTypeDefs   from './graphql/metadata/codeValuesTypeDefs';

const types = [
    codeTypeDefs
  , codeValuesTypeDefs
  , appuserTypeDefs
  , accountsTypeDefs
];

export default mergeTypes(types, { all: true });