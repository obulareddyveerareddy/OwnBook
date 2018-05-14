import { mergeTypes }         from 'merge-graphql-schemas';
import appuserTypeDefs       from './graphql/appusers/appuserTypeDefs';

const types = [
  appuserTypeDefs,
];

export default mergeTypes(types, { all: true });