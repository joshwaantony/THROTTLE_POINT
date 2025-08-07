import api from "./axios"


export const signUp = async (credentials) => {
 const res = await api.post('/auth/signUp',credentials)
 return res.data;
}

export const signIn = async (credentials) => {
 const res = await api.post('/auth/signIn',credentials)
 return res.data;
}
export const resetPassword = async (credentials) => {
  const res = await api.post('/auth/resetPassword', credentials);
  return res.data;
};

