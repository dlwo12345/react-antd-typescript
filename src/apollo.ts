import {ApolloClient, InMemoryCache} from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://dev-saem-api.solarconnect.kr/graphql', // graphql 요청 주소
  cache: new InMemoryCache(),
});
