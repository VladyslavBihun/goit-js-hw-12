import{S as f,a as l,i as y}from"./assets/vendor-06b1bbdf.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();function g(t,a){const r=t.map(({webformatURL:o,largeImageURL:e,tags:s,likes:n,views:u,comments:d,downloads:m})=>`
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
        `).join("");a.innerHTML=r,h.refresh()}let h=new f(".list a",{sourceAttr:"href",captionsData:"alt",captionDelay:250});l.defaults.baseURL="https://pixabay.com/api/";const v="key=43311395-53aae2d6cf7a92acb61eb4f46";async function b(t){return(await l.get(`?${v}`,{params:{q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const p=document.querySelector(".form"),L=document.querySelector(".input"),i=document.querySelector(".list"),c=document.querySelector(".loader");p.addEventListener("submit",w);function w(t){t.preventDefault(),c.style.display="inline-block";const a=L.value;b(a).then(r=>g(r.hits,i)).catch(()=>{i.innerHTML="",y.error({message:"Sorry, there are no images matching your search query. Please try again!",theme:"dark",messageColor:"#fff",messageSize:"16px",messageLineHeight:"1.5",backgroundColor:"#EF4040",position:"topRight",progressBarColor:"#B51B1B"})}).finally(()=>{c.style.display="none",p.reset()})}
//# sourceMappingURL=commonHelpers.js.map
