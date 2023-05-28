import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BACK_END_URL;

function GetAllProducts() {
  return axios.get(`${BASE_URL}/product`);
}
function GetAllCategories() {
  return axios.get(`${BASE_URL}/category`);
}
function GetProductById(id) {
  return axios.get(`${BASE_URL}/product/${id}`);
}
function GetCategoryById(id) {
  return axios.get(`${BASE_URL}/category/${id}`);
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
function PutProduct({body, token}) {
  return axios.put(`${BASE_URL}/product`, body, {headers: { Authorization: `Bearer ${token}`}})
}
function PutCategory({body, token}) {
  return axios.put(`${BASE_URL}/category`, body, {headers: { Authorization: `Bearer ${token}`}})
}
function DeleteProduct({ body, token }) {
  return axios.delete(`${BASE_URL}/product`, {
    data: body,
    headers: { Authorization: `Bearer ${token}` },
  });
}
function DeleteCategory({ body, token }) {
  return axios.delete(`${BASE_URL}/category`, {
    data: body,
    headers: { Authorization: `Bearer ${token}` },
  });
}
const api = {
  GetAllProducts,
  GetAllCategories,
  GetProductById,
  Login,
  CreateCategoty,
  CreateProduct,
  PutProduct,
  DeleteProduct,
  PutCategory,
  GetCategoryById,
  DeleteCategory
};

export default api;
