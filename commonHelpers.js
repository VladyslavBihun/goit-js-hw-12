import{S as L,a as u,i as w}from"./assets/vendor-6e0bf343.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=n(e);fetch(e.href,a)}})();function d(t,s){const n=t.map(({webformatURL:o,largeImageURL:e,tags:a,likes:r,views:h,comments:v,downloads:b})=>`
        <li class="item">
        <a class="item-link" href="${e}">
        <img class="item-img" src="${o}" alt="${a}" />
        <div class="wrapper">
        <div class="span-wrapper">
        <span class="span-name">Likes</span>
        <span class="span-value">${r}</span>
        </div>
        <div class="span-wrapper">
        <span class="span-name">Views</span>
        <span class="span-value">${h}</span>
        </div>
        <div class="span-wrapper">
        <span class="span-name">Comments</span>
        <span class="span-value">${v}</span>
        </div>
        <div class="span-wrapper">
        <span class="span-name">Downloads</span>
        <span class="span-value">${b}</span>
        </div>
        </div>
        </a>
        </li>
        `).join("");s.insertAdjacentHTML("beforeend",n),S.refresh()}let S=new L(".list a",{sourceAttr:"href",captionsData:"alt",captionDelay:250});u.defaults.baseURL="https://pixabay.com/api/";const k="43311395-53aae2d6cf7a92acb61eb4f46";async function m(t,s=1){return(await u.get("",{params:{key:k,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:s}})).data}const f=document.querySelector(".form"),y=document.querySelector(".input"),i=document.querySelector(".list"),l=document.querySelector(".loader"),c=document.querySelector(".load-more");f.addEventListener("submit",q);c.addEventListener("click",()=>$(g));async function q(t){t.preventDefault(),l.style.display="inline-block";const s=y.value;try{const n=await m(s);if(n.hits.length===0)throw new Error;i.innerHTML="",d(n.hits,i),c.style.display="block"}catch{i.innerHTML="",w.error({message:"Sorry, there are no images matching your search query. Please try again!",theme:"dark",messageColor:"#fff",messageSize:"16px",messageLineHeight:"1.5",backgroundColor:"#EF4040",position:"topRight",progressBarColor:"#B51B1B"})}finally{l.style.display="none",f.reset()}}let g="";y.addEventListener("input",t=>{g=t.target.value});let p=1;async function $(t){c.style.display="none",l.style.display="inline-block",p+=1;try{const s=await m(t,p);console.log(s),d(s.hits,i),c.style.display="block",l.style.display="none"}catch(s){console.log(s)}}
//# sourceMappingURL=commonHelpers.js.map
