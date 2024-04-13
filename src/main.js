import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { createMarkup } from './js/render-functions';
import { searchImage } from './js/pixabay-api';

const form = document.querySelector(".form");
const input = document.querySelector(".input");
const list = document.querySelector(".list");
const loader = document.querySelector(".loader")

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    loader.style.display = 'inline-block';

    const inputValue = input.value;

    searchImage(inputValue)
        .then(data => createMarkup(data.hits, list))
        .catch(() => {
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
        })
        .finally(() => {
            loader.style.display = 'none';
            form.reset();
        });
};

