// web socket and heep
import { split } from "apollo-link";
import { getMainDefinition } from "apollo-utilities";
import { wsLink } from "./websocket";
import { httpLinkWithAuth } from "./http";
export const whLink = process.browser
  ? split(
      ({ query }) => {
        const { kind, operation } = getMainDefinition(query);
        return kind === "OperationDefinition" && operation === "subscription";
      },
      wsLink,
      httpLinkWithAuth
    )
  : httpLinkWithAuth;
