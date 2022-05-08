import axios from 'axios';

export const createUser = async (data) => {
  await axios.post('http://localhost:5000/app/create', data).then(
    (response) => {},
    (error) => console.log(error)
  );
};

export const showUserList = async () => {
  return axios.get('http://localhost:5000/app/get').then(
    (response) => response.data,
    (error) => console.log(error)
  );
};

export const getSelectedUser = async (searchValue) => {
  return axios.get(`http://localhost:5000/app/getselecteduser/${searchValue}`).then(
    (response) => response.data,
    (error) => console.log(error)
  );
};

export const editUser = async (id, data) => {
  await axios.put(`http://localhost:5000/app/edit/${id}`, data).then(
    (result) => {},
    (error) => console.log(error)
  );
};

export const deleteUser = async (id) => {
  await axios.delete(`http://localhost:5000/app/delete/${id}`).then(
    (result) => {},
    (error) => console.log(error)
  );
};
