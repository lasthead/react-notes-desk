import axios from "axios";

export const getUserData = async () => {
  return await axios.get(
    '/auth/user',
    {
      headers: {
        Authorization: localStorage.getItem('refreshToken')
      }
    });
};

export const authorizationUser = async (dataForm) => {
  return await axios.post('/auth/login', dataForm);
};
