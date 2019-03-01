import { WebSocketLink } from "apollo-link-ws";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
export const wsLink = process.browser
  ? new WebSocketLink({
      uri: publicRuntimeConfig.SOCKET_URL,
      options: { reconnect: true }
    })
  : null;
