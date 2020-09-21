import gql from 'graphql-tag';

const typeDefs = gql`
  type Feature @key(fields: "id") {
    id: ID!
    name: String
    enabled: Boolean
    tenantId: String
  }

  type Query {
    feature(id: ID!): Feature
    features: [Feature]
  }

  type Mutation {
    addFeature(name: String!, enabled: Boolean!): Feature
  }
`;

export default typeDefs;
