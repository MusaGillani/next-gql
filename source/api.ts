import { GraphQLClient } from "graphql-request";
import { QueryClient } from "@tanstack/react-query";

import { getSdk } from "./generated/graphql";

// gqlClient used to hit queries
const gqlClient = new GraphQLClient("http://localhost:4000");
// provide the client to codegen so its knows the query functions
export const { getGames } = getSdk(gqlClient);

// react query client
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});
