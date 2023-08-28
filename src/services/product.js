import axios from "axios"

const API = "http://localhost:8888"
const createProduct = (formData) => {
    return axios.post(`${API}/products`, formData).then(res => res.data)
}

const getAllProducts = () => {
    return axios.get(`${API}/products`).then(res => res.data)
}

const getProductById = (id) => {
    return axios.get(`${API}/products/${id}`).then(res => res.data)
}

export {
    createProduct,
    getAllProducts,
    getProductById
}