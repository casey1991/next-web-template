import { InMemoryCache } from "apollo-cache-inmemory";
import { withClientState } from "apollo-link-state";
export const cache = new InMemoryCache();
export const stateLink = withClientState({
  cache
});
