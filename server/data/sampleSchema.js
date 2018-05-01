import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import resolvers from './resolvers';
import mocks from './mocks';

const typeDefs = `
type Query {
  channels: [Channel]
}

type Channel {
  id: ID!
  name: String
}

type Mutation {
  addChannel(name: String!): Channel
}
`;

const sampleSchema = makeExecutableSchema({ typeDefs, resolvers });

//addMockFunctionsToSchema({ schema, mocks });

export default sampleSchema;