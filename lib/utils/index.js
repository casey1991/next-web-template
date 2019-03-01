import _ from "lodash";
import Router from "next/router";
export const redirect = (context, target) => {
  if (isBrowser()) {
    Router.replace(target);
  } else {
    context.res.writeHead(303, { Location: target });
    context.res.end();
  }
};
const hasDocument = typeof document === "object" && document !== null;
const hasWindow =
  typeof window === "object" && window !== null && window.self === window;

// eslint-disable-next-line no-confusing-arrow
export const isBrowser = () =>
  !_.isNil(isBrowser.override) ? isBrowser.override : hasDocument && hasWindow;
