import Cookies from "js-cookie";
import { isBrowser } from "~/lib/utils";
export const persistToken = token => {
  if (isBrowser()) {
    // expires by days
    Cookies.set("token", token, { expires: 7 });
  } else {
    // throw exception
  }
};
export const getToken = () => {
  if (isBrowser) {
    return Cookies.get("token");
  } else {
    // TODO return token from req
  }
};

export const removeToken = () => {
  if (isBrowser()) {
    // expires by days
    Cookies.remove("token");
  } else {
    // throw exception
  }
};
