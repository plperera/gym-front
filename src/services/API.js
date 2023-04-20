import axios from 'axios';
const BASE_URL = 'http://localhost:4000';

function GetAllProducts() {
  return axios.get(`${BASE_URL}/product`);
}
function GetAllCategories() {
  return axios.get(`${BASE_URL}/category`);
}
function GetProductById(id) {
  return axios.get(`${BASE_URL}/product/${id}`);
}
function Login(body) {
  return axios.post(`${BASE_URL}/auth/sign-in`, body)
}
function CreateCategoty({body, token}) {
  return axios.post(`${BASE_URL}/category`, body, {headers: { Authorization: `Bearer ${token}`}})
}
function CreateProduct({body, token}) {
  return axios.post(`${BASE_URL}/product`, body, {headers: { Authorization: `Bearer ${token}`}})
}
const api = {
  GetAllProducts,
  GetAllCategories,
  GetProductById,
  Login,
  CreateCategoty,
  CreateProduct
};

export default api;
