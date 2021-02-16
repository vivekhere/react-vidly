import axios from "axios";
import logger from "./logService";
import auth from "./authService";
import { toast } from "react-toastify";

// Configuring default headers
axios.defaults.headers.common["x-auth-token"] = auth.getJwt();
// This will include the "x-auth-token" header in the request.
// With ".common", we can set header on all kinds of http requests.
// We also have other properties like ".post" and with this we can configure
// headers that are applicable on http post request.

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    logger.log(error);
    toast.error("An unexpected error occurred.");
  }

  // to pass control to our catch block return a rejected promise
  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
