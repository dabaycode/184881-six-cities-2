import axios from 'axios';

const createAPI = () => {
  const api = axios.create({baseURL: `https://htmlacademy-react-2.appspot.com/six-cities`, timeout: 5000, withCredentials: true});

  const onSuccess = (response) => response;
  const onFail = (err) => {

    switch (err.response.status) {
      case 401:
        return err;

      default:
        return err;
    }
  };

  api
    .interceptors
    .response
    .use(onSuccess, onFail);

  return api;
};

export {createAPI};
