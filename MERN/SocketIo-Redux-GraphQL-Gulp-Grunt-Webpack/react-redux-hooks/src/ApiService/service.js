import axios from 'axios';

export const getUserList = () => {
  return axios.get('http://localhost:5000/app/get').then(
    (response) => response.data,
    (error) => console.log(error)
  );
};
