import { makeExecutableSchema } from 'graphql-tools';
import _                        from 'lodash';

import accountsResolver         from './graphql/accounts/accountsResolver';
import transactionsResolver     from './graphql/transactions/transactionsResolver';
import codesResolver            from './graphql/metadata/codesResolver';
import codevaluesResolver       from './graphql/metadata/codevaluesResolver';

import typeDefsQueries          from './typeDefsQueries';

const schema = makeExecutableSchema({   typeDefs:[typeDefsQueries], 
                                        resolvers:_.merge(accountsResolver, transactionsResolver, codesResolver, codevaluesResolver) 
                                    });
export default schema;