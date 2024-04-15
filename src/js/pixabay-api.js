import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api/";
const key = '43311395-53aae2d6cf7a92acb61eb4f46';
    


export async function searchImage(userValue, page =1) {

        const response = await axios.get(``, {
            params: {
                key,
                q: userValue,
                image_type: "photo",
                orientation: "horizontal",
                safesearch: true,
                per_page: 15, 
                page,
                }
        }
        );

        return response.data;
};

