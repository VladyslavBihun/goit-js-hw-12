import{S as f,a as l,i as y}from"./assets/vendor-6e0bf343.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();function g(r,a){const t=r.map(({webformatURL:o,largeImageURL:e,tags:s,likes:n,views:u,comments:d,downloads:m})=>`
        <li class="item">
        <a class="item-link" href="${e}">
        <img class="item-img" src="${o}" alt="${s}" />
        <div class="wrapper">
        <div class="span-wrapper">
        <span class="span-name">Likes</span>
        <span class="span-value">${n}</span>
        </div>
        <div class="span-wrapper">
        <span class="span-name">Views</span>
        <span class="span-value">${u}</span>
        </div>
        <div class="span-wrapper">
        <span class="span-name">Comments</span>
        <span class="span-value">${d}</span>
        </div>
        <div class="span-wrapper">
        <span class="span-name">Downloads</span>
        <span class="span-value">${m}</span>
        </div>
        </div>
        </a>
        </li>
        `).join("");a.innerHTML=t,h.refresh()}let h=new f(".list a",{sourceAttr:"href",captionsData:"alt",captionDelay:250});l.defaults.baseURL="https://pixabay.com/api/";const v="43311395-53aae2d6cf7a92acb61eb4f46";async function w(r){return(await l.get("",{params:{key:v,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const p=document.querySelector(".form"),b=document.querySelector(".input"),i=document.querySelector(".list"),c=document.querySelector(".loader");p.addEventListener("submit",L);async function L(r){r.preventDefault(),c.style.display="inline-block";const a=b.value;try{const t=await w(a);if(t.hits.length===0)throw new Error;g(t.hits,i)}catch{i.innerHTML="",y.error({message:"Sorry, there are no images matching your search query. Please try again!",theme:"dark",messageColor:"#fff",messageSize:"16px",messageLineHeight:"1.5",backgroundColor:"#EF4040",position:"topRight",progressBarColor:"#B51B1B"})}finally{c.style.display="none",p.reset()}}
//# sourceMappingURL=commonHelpers.js.map
