import axios from "axios";


export const getBookList = (title) => {
  return axios.get("http://localhost:5001/api/books", { params: { title: title } });
};

export const getRegistrationList = (title) => {
  return axios.get("http://localhost:5001/api/books", { params: { title: title } });
};

export const getOrderList = (title) => {
  return axios.get("http://localhost:5001/api/books", { params: { title: title } });
};

export const getStoneTypes = () => {
  return axios.get("https://localhost:5001/api/registrations");
};

export const getDetailedBookInfo = (bookId) => {
  return axios.get(`http://localhost:5001/api/books/${bookId}`);
};

export const postOrder = (order) => {
    return axios.post("http://localhost:5001/api/orders", order);
}