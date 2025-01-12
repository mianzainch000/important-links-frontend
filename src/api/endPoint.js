import api from "./config";

export const signup = async (data) => {
  return await api.post("signup", data);
};

export const login = async (data) => {
  return await api.post("login", data);
};

export const forgotPassword = async (data) => {
  return await api.post("forgotPassword", data);
};

export const resetPassword = async (data, token) => {
  return await api.post(`resetPassword/${token}`, data);
};
