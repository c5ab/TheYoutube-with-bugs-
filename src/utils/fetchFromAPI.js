import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

export const fetchFromAPI = async (url, params = {}) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, {
      params: {
        maxResults: 100, // Fetch up to 10 results
        ...params,
      },
      headers: {
        'X-RapidAPI-Key': "803163ac03mshbb568f3e7a25f6fp1a846ejsn9ef0c7803523", // Replace with your actual API key
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
      },
    });
    return data;
  } catch (error) {
    console.error("Error fetching data from API:", error.response?.data || error.message);
    throw error; // Re-throw the error for further handling
  }
};