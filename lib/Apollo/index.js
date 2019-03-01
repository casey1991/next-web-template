import { ApolloClient } from "apollo-client";
import { isBrowser } from "../utils";
import getConfig from "next/config";
const { serverRuntimeConfig } = getConfig();
import { cache, links } from "./links";
export const createClient = new ApolloClient({
  cache,
  link: links,
  connectToDevTools: serverRuntimeConfig.DEV,
  shouldBatch: true,
  defaultHttpLink: false,
  ssrMode: !isBrowser()
});
