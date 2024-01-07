import axios from "axios";

interface Request {
  resource: string;
  params?: object;
  data?: object;
}

interface Response {
  success: boolean;
  data: object | boolean | number | string;
}

const BASE_URL: string = "http://localhost:8080";

export const Rest = (() => {
  async function send(method: string, request: Request) {
    const response: Response = {} as Response;

    await axios
      .request({
        method,
        url: `${BASE_URL}${request.resource.startsWith("/") ? "" : "/"}${request.resource}`,
        params: request.params,
        data: request.data,
      })
      .then((res) => {
        response.success = true;
        response.data = res.data;
      })
      .catch((err) => {
        response.success = false;
        response.data = err.response.data;
      });

    return response;
  }

  return {
    get: (request: Request) => send("GET", request),
    post: (request: Request) => send("POST", request),
    put: (request: Request) => send("PUT", request),
    patch: (request: Request) => send("PATCH", request),
    delete: (request: Request) => send("DELETE", request),
  };
})();
