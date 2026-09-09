import axios from "axios";


const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;

    if (status === 401) {
      localStorage.removeItem("token");
    }

    const mensagem =
      error.response?.data?.message ||
      "Não foi possível concluir a operação. Tente novamente.";

    return Promise.reject({ status, mensagem, original: error });
  }
);

export default api;
