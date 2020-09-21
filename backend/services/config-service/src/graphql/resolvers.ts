import Feature from '../models/feature';

const resolvers = {
  Query: {
    feature(parent: any, { id }: any, { tenantId }: any) {
      return Feature.findOne({ tenantId, _id: id });
    },
    features(parent: any, args: any, { tenantId }: any) {
      return Feature.find({ tenantId });
    },
  },
  Mutation: {
    addFeature(parent: any, { name, enabled }: any, { tenantId }: any) {
      const feature = new Feature({
        name,
        tenantId,
        enabled,
      });
      return feature.save();
    },
  },
};

export default resolvers;
