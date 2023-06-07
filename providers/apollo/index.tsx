import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as Provider,
} from "@apollo/client";
import { createHttpLink } from "apollo-link-http";
import { ReactNode, useMemo } from "react";
import { useAuthContext } from "../auth";
import { SplashScreen } from "expo-router";

const GRAPHQL_ENDPOINT = "your_graphql_endpoint";

export const createApolloClient = ({ token }: { token?: string }) => {
  if (token) {
    const httpLink = createHttpLink({
      uri: GRAPHQL_ENDPOINT,
      headers: {
        authorization: `${token}`,
      },
    });

    return new ApolloClient({
      // @ts-ignore
      link: httpLink,
      cache: new InMemoryCache(),
    });
  }

  return new ApolloClient({
    uri: GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
  });
};

export const ApolloProvider = ({ children }: { children: ReactNode }) => {
  const { userAccessToken } = useAuthContext();

  const client = useMemo(() => {
    return createApolloClient({
      token: userAccessToken ?? undefined,
    });
  }, [userAccessToken]);

  if (!client) {
    return <SplashScreen />;
  }

  return <Provider client={client}>{children}</Provider>;
};
