import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api/";
const key = 'key=43311395-53aae2d6cf7a92acb61eb4f46';
    
export async function searchImage(userValue) {

    const response = await axios.get(`?${key}`, {
        params: {
            q: userValue,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
            }
    });
    
    return response.data;

};

