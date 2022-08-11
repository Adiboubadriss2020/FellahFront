import httpClient from "../http-common";

const getAll = () => {
    return httpClient.get('/getAll');
}

const create = data => {
    return httpClient.post("/add", data);
}

const get = id => {
    return httpClient.get(`/employees/${id}`);
}

const update = (id,data) => {
    return httpClient.put(`/update/${id}`,data);
}

const remove = id => {
    return httpClient.delete(`/delete/${id}`);
}
export default { getAll, create, get, update, remove };