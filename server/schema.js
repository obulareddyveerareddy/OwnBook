import { makeExecutableSchema } from 'graphql-tools';
import _                        from 'lodash';

import appuserResolver         from './graphql/appusers/appuserResolver';

import typeDefsQueries          from './typeDefsQueries';

const schema = makeExecutableSchema({   typeDefs:[typeDefsQueries], 
                                        resolvers:_.merge(appuserResolver) 
                                    });
export default schema;