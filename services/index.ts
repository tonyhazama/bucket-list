import axios, { AxiosError } from "axios";

const config = {
  username: "baritodo@gmail.com",
	password: "P@ssw0rd",
  baseURL: "https://api-nodejs-todolist.herokuapp.com"
};




const errorResponseHandler = (error: AxiosError) => {
  return Promise.reject(error);
};

const getInstance = () => {
  const instance = axios.create({
    baseURL: config.baseURL,
    timeout: 60000,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
  });

  instance.interceptors.response.use(
    (response) => {
      return response;
    }, 
    (error) => {
      let res = error.response;
      if (res.status == 401) {
        window.location.href = "/login";
      }
      console.error("Looks like there was a problem. Status Code: " + res.status);
      return Promise.reject(error);
    }
  );
  return instance;
};

// axiosClient.interceptors.response.use(
//   function (response) {
//     return response;
//   }, 
//   function (error) {
//     let res = error.response;
//     if (res.status == 401) {
//       window.location.href = “https://example.com/login”;
//     }
//     console.error(“Looks like there was a problem. Status Code: “ + res.status);
//     return Promise.reject(error);
//   }
// );

const routes = {
  getCategories: () => `/https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-categories`,
  getBooks: (categoryId: number, page: number = 0, size: number = 10) => `/https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books?categoryId=${categoryId}&page=${page}&size=${size}`,
  
  login: () => `/user/login`,
  getTasks: () => `/task`,
  getTaskById: (id: string) => `/task/${id}`
};

export { getInstance, routes, config };
