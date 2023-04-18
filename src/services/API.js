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
const api = {
  GetAllProducts,
  GetAllCategories,
  GetProductById,
  Login
};

export default api;
