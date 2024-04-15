import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { createMarkup } from './js/render-functions';
import { searchImage } from './js/pixabay-api';
import { per_page } from "./js/pixabay-api";

const form = document.querySelector(".form");
const input = document.querySelector(".input");
const list = document.querySelector(".list");
const loader = document.querySelector(".loader");
const loaderTop = document.querySelector(".loader-top");
const loadBtn = document.querySelector(".load-more");

form.addEventListener("submit", handleSubmit);
loadBtn.addEventListener("click", () => handleClick(inputValue));

async function handleSubmit(event) {
    event.preventDefault();
    loaderTop.style.display = 'inline-block';

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
        loadBtn.style.display = "none";

    } finally {
        loaderTop.style.display = 'none';
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
        
        createMarkup(response.hits, list);

        loadBtn.style.display = 'block';
        loader.style.display = 'none';

        scrolling();
            
        if (page * per_page >= response.totalHits) {
            loadBtn.style.display = 'none';
            iziToast.info({
                message: "We're sorry, but you've reached the end of search results.",
                position: 'topRight',
            });
        }

    } catch(error) {
        console.log(error.message);
    }
}

function scrolling() {

    const item = document.querySelector(".item");
    const itemHeight = item.getBoundingClientRect().height;

    window.scrollBy({
        top: itemHeight * 2,
        left: 0,
        behavior: "smooth",
    });
};
