import { Resolver, Query, Ctx } from 'type-graphql';
import { Request } from '../db/entity/Request';
import { Context } from './types/context';

@Resolver()
export class RequestResolver {
  @Query(() => [Request])
  requests(@Ctx() { tenantId }: Context) {
    return Request.find({ where: { tenantId } });
  }
}
