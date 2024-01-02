import axios from "axios";

interface Request {
  method: string;
  resource: string;
  params?: object;
  data?: object;
}

interface Response {
  success: boolean;
  data: unknown;
}

const baseUrl: string = "https://localhost:8080";

const REST = async (request: Request) => {
  const response: Response = {} as Response;

  await axios
    .request({
      method: request.method,
      url: `${baseUrl}${request.resource}`,
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
};

export default REST;
