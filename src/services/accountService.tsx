import axiosInstance from "./interceptor";
const API_BASE_URL = "https://bs.mehal.com.et/api";



export const accountService = async () => {
  try {
    const response = await axiosInstance.get(`${API_BASE_URL}/me`);

    if (response) {
      console.log("Successful response", response);
      return response; // Assuming the data is in the response's data property
    } else {
      console.error("Error response", response);
      return []; // Return an empty array or handle the error case based on your application logic
    }
  } catch (error) {
    console.error("Error in gameService", error);
    return []; // Return an empty array or handle the error case based on your application logic
  }
};

export const topUpAmount = async (pincode: string) => {
  try {
    const response = await axiosInstance.post(`${API_BASE_URL}/pincodes/check`, { pincode, key: localStorage.getItem('key') });

    if (response) {
      console.log("Successful top-up response", response);
      return true; // Assuming the data is in the response's data property
    } else {
      console.error("Error response", response);
      return false; // Return an empty array or handle the error case based on your application logic
    }
  } catch (error) {
    console.error("Error in topUpAmount", error);
  }
}