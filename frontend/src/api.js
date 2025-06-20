// src/api.js
const apiUrl = import.meta.env.VITE_API_URL;

export const getProducts = async () => {
  const response = await fetch(`${apiUrl}/api/products`);
  return response.json();
};