import { API_BASE_URL } from "../config";

export const fetchHello = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/hello`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch hello:", error);
    throw error;
  }
};
