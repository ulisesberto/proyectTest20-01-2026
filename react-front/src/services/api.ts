import { environment } from "../environments/environment";

export const fetchHello = async () => {
  try {
    const response = await fetch(`${environment.apiBaseUrl}/api/hello`);
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
