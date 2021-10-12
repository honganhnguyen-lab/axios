import axiosClient from "./AxiosClient";
const url = "/product";
const productAPI = {
    getAll:() => {
        return axiosClient.get(url);
    },
    getById: (id: any) => {
        return axiosClient.get(`${url}/${id}`);
    },
    delete: (id: any) => {
        return axiosClient.delete(`${url}/${id}`);
    },
    create: (params: any) => {
        return axiosClient.post(url,params);
    },
    update: (params: any,id:any) => {
        return axiosClient.put(`${url}/${id}`,params);
    }
}
export default productAPI;