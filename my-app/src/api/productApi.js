import axiosClient from "./axiosClients";

const productApi = {
  getAll(params) {
    const url = "/Products";
    return axiosClient.get(url, { params: params });
  },

  get(id) {
    const url = `/Products/${id}`;
    return axiosClient.get(url);
  },

  create(data) {
    const url = `/Products`;
    return axiosClient.post(url, data);
  },

  update(id,data) {
    const url = `/Products/${id}`;
    return axiosClient.patch(url, data);
  },

  remove(id) {
    const url = `/Products/${id}`;
    return axiosClient.delete(url);
  },
};

export default productApi;
