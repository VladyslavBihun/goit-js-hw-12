import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { createMarkup } from './js/render-functions';
import { searchImage } from './js/pixabay-api';


const form = document.querySelector(".form");
const input = document.querySelector(".input");
const list = document.querySelector(".list");
const loader = document.querySelector(".loader");
const loadBtn = document.querySelector(".load-more");

form.addEventListener("submit", handleSubmit);
loadBtn.addEventListener("click", () => handleClick(inputValue));

async function handleSubmit(event) {
    event.preventDefault();
    loader.style.display = 'inline-block';

    const inputValue = input.value;

    try {  
        const imageData = await searchImage(inputValue);
            
        if (imageData.hits.length === 0) {
            throw new Error;
        }

        list.innerHTML = "";
        
        createMarkup(imageData.hits, list);
            
        loadBtn.style.display = 'block';
            
    
    } catch (error) {
        list.innerHTML = '';
        iziToast.error({
            message: `Sorry, there are no images matching your search query. Please try again!`,
            theme: 'dark',
            messageColor: '#fff',
            messageSize: '16px',
            messageLineHeight: '1.5',
            backgroundColor: '#EF4040',
            position: 'topRight',
            progressBarColor: '#B51B1B',
        });

    } finally {
        loader.style.display = 'none';
        form.reset();
    }
};

let inputValue = '';

input.addEventListener('input', (event) => {
    inputValue = event.target.value;
});

let page = 1;

async function handleClick(inputValue) {
    loadBtn.style.display = 'none';
    loader.style.display = 'inline-block';
    
    page += 1;
    
    try {
        const response = await searchImage(inputValue, page);
        console.log(response);
        
        createMarkup(response.hits, list);
        loadBtn.style.display = 'block';
        loader.style.display = 'none';
            
    } catch(error) {
        console.log(error);
    }

}