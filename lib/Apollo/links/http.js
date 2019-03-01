import { HttpLink } from "apollo-link-http";
import getConfig from "next/config";
import fetch from "isomorphic-unfetch";
import { authLink } from "./auth";
const { publicRuntimeConfig } = getConfig();
export const httpLink = new HttpLink({
  uri: publicRuntimeConfig.API_URL,
  fetch
});
export const httpLinkWithAuth = authLink.concat(httpLink);
