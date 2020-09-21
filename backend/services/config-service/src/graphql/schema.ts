import { buildFederatedSchema } from '@apollo/federation';
import typeDefs from './type-defs';
import resolvers from './resolvers';

const schema = buildFederatedSchema({
  typeDefs,
  resolvers,
});

export default schema;
