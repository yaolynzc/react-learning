import originAxios from "axios";
import { message } from "antd";

const axios = originAxios.create({
  timeout: 20000,
});

axios.interceptors.response.use(
  function (response) {
    if (response.data && response.data.flag === 1) {
      let errorMsg = response.data.msg;
      message.error(errorMsg);
      return Promise.reject(errorMsg);
    }
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export function get(url: string, data: any) {
  return axios.get(url, {
    params: data,
  });
}

// 发送form表单格式（不发生默认的json格式）
export function post(url: string, data: any) {
  return axios({
    method: "post",
    url,
    data,
  });
}

export default axios;
