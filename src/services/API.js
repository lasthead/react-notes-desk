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

export const authorizationUserApi = async (dataForm) => {
  return await axios.post('/auth/login', dataForm);
};

export const createUserApi = async (dataForm) => {
  return await axios.post('/auth/create', dataForm);
};

export const getItemsListApi = async () => {
  return await axios.get('/get_items_list', {
    headers: {
      Authorization: localStorage.getItem('refreshToken')
    }
  });
};

export const getItemByIdApi = async (id) => {
  const params = {
    id
  };
  return await axios.get('/get_item', {
    params,
    headers: {
      Authorization: localStorage.getItem('refreshToken')
    }
  });
};

export const createNoteApi = async (dataForm) => {
  return await axios.post('/create_item', dataForm, {
    headers: {
      Authorization: localStorage.getItem('refreshToken')
    }
  });
};

export const updateNoteApi = async (dataForm) => {
  return await axios.put('/update_item', dataForm, {
    headers: {
      Authorization: localStorage.getItem('refreshToken')
    }
  });
};

export const removeNoteApi = async (id) => {
  const params = {
    id
  };
  return await axios.delete('/remove_item', {
    params,
    headers: {
      Authorization: localStorage.getItem('refreshToken')
    }
  });
};
