import axios from "axios"

const API = "http://localhost:8888"
const createProduct = (formData) => {
    return axios.post(
        `${API}/products`, 
        formData, 
        {
            headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).then(res => res.data)
}

const getAllProducts = () => {
    return axios.get(`${API}/products`).then(res => res.data)
}

const getProductById = (id) => {
    return axios.get(`${API}/products/${id}`).then(res => res.data)
}

// For edit
const updateProductById = (id) => {
    return axios.put(`${API}/products/${id}`).then(res => res.data)
}

// For delete
const deleteProductById = (id) => {
    return axios.delete(`${API}/products/${id}`).then(res => res.data)
}

export {
    createProduct,
    getAllProducts,
    getProductById,
    updateProductById,
    deleteProductById
}