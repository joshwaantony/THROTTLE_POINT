import api from "./axios";

export async function getProductsByCategory(category) {
  const res = await api.get(`/products/categorywise?category=${category}`);
  return res.data?.data || res.data; // adjust based on backend response
}
