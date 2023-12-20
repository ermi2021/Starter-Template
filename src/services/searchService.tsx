import axiosInstance from "./interceptor";
const API_BASE_URL = "https://bs.mehal.com.et/api";

export const searchGameService = async (searchTerm: string | undefined) => {
  try {
    const response = await axiosInstance.get(`${API_BASE_URL}/games`, {
      params: {
        search: searchTerm,
      },
    });

    if (response) {
      console.log("Successful response", response);
      return response;
    } else {
      console.error("Error: Unexpected response structure", response);
      return null; // or handle the error case based on your application logic
    }
  } catch (error) {
    console.error("Error in gameService", error);
    throw error; // or handle the error case based on your application logic
  }
};
