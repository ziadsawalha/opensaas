import { RemoteGraphQLDataSource } from '@apollo/gateway';

export default class AuthenticatedDataSource extends RemoteGraphQLDataSource {
  willSendRequest({ request, context }: any) {
    Object.entries(context.headers || {}).forEach(([key, value]) => request.http.headers.set(key, value));
  }
}
