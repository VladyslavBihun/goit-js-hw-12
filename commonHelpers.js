import{S as d,i as f}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();function h(r,t){const a=r.map(({webformatURL:n,largeImageURL:e,tags:s,likes:o,views:p,comments:u,downloads:m})=>`
        <li class="item">
        <a class="item-link" href="${e}">
        <img class="item-img" src="${n}" alt="${s}" />
        <div class="wrapper">
        <div class="span-wrapper">
        <span class="span-name">Likes</span>
        <span class="span-value">${o}</span>
        </div>
        <div class="span-wrapper">
        <span class="span-name">Views</span>
        <span class="span-value">${p}</span>
        </div>
        <div class="span-wrapper">
        <span class="span-name">Comments</span>
        <span class="span-value">${u}</span>
        </div>
        <div class="span-wrapper">
        <span class="span-name">Downloads</span>
        <span class="span-value">${m}</span>
        </div>
        </div>
        </a>
        </li>
        `).join("");t.innerHTML=a,y.refresh()}let y=new d(".list a",{sourceAttr:"href",captionsData:"alt",captionDelay:250});function g(r){const t="https://pixabay.com/api/",a="key=43311395-53aae2d6cf7a92acb61eb4f46",n=new URLSearchParams({q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${t}?${a}&${n}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{if(e.hits.length===0)throw new Error;return e})}const l=document.querySelector(".form"),v=document.querySelector(".input"),i=document.querySelector(".list"),c=document.querySelector(".loader");l.addEventListener("submit",w);function w(r){r.preventDefault(),c.style.display="inline-block";const t=v.value;g(t).then(a=>h(a.hits,i)).catch(()=>{i.innerHTML="",f.error({message:"Sorry, there are no images matching your search query. Please try again!",theme:"dark",messageColor:"#fff",messageSize:"16px",messageLineHeight:"1.5",backgroundColor:"#EF4040",position:"topRight",progressBarColor:"#B51B1B"})}).finally(()=>{c.style.display="none",l.reset()})}
//# sourceMappingURL=commonHelpers.js.map
