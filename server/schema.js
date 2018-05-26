import { makeExecutableSchema } from 'graphql-tools';
import _                        from 'lodash';

import appuserResolver          from './graphql/appusers/appuserResolver';
import accountsResolver         from './graphql/accounts/accountsResolver';
import codeResolver             from './graphql/metadata/codeResolver';
import codeValuesResolver       from './graphql/metadata/codeValuesResolver';

import typeDefsQueries         from './typeDefsQueries';

const schema = makeExecutableSchema({   typeDefs:[typeDefsQueries], 
                                        resolvers:_.merge(codeResolver
                                                        , codeValuesResolver
                                                        , appuserResolver
                                                        , accountsResolver) 
                                    });
export default schema;