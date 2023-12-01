
import axiosInstance from "./interceptor";
const API_BASE_URL = "https://bs.mehal.com.et/api";



export const getGameUrl = async (name:string | undefined) => {
    console.log('name inside service: ',name);
    
  try {
    const response = await axiosInstance.get(`${API_BASE_URL}/game/${name}`);

    if (response) {
      console.log("Successful response", response);
      return response; // Assuming the data is in the response's data property
    } else {
      console.error("Error response", response);
      return null; // Return an empty array or handle the error case based on your application logic
    }
  } catch (error) {
    console.error("Error in gameService", error);
    return null; // Return an empty array or handle the error case based on your application logic
  }
};

