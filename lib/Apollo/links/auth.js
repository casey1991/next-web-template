import { setContext } from "apollo-link-context";
import { getToken } from "~/lib/Cookie";
export const authLink = setContext((_, { headers }) => {
  const token = getToken();
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ""
    }
  };
});
