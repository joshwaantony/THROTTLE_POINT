import api from "./axios";

export const getProfile = async () => {
  const res = await api.get('/user/profileView');
  return res.data;
};

export const putProfileUpdate = async (updatedData) => {
  const res = await api.put('/user/profile', updatedData);
  return res.data;
};

