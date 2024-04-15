import{S,a as u,i as d}from"./assets/vendor-6e0bf343.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(e){if(e.ep)return;e.ep=!0;const a=n(e);fetch(e.href,a)}})();function m(t,s){const n=t.map(({webformatURL:i,largeImageURL:e,tags:a,likes:r,views:b,comments:L,downloads:w})=>`
        <li class="item">
        <a class="item-link" href="${e}">
        <img class="item-img" src="${i}" alt="${a}" />
        <div class="wrapper">
        <div class="span-wrapper">
        <span class="span-name">Likes</span>
        <span class="span-value">${r}</span>
        </div>
        <div class="span-wrapper">
        <span class="span-name">Views</span>
        <span class="span-value">${b}</span>
        </div>
        <div class="span-wrapper">
        <span class="span-name">Comments</span>
        <span class="span-value">${L}</span>
        </div>
        <div class="span-wrapper">
        <span class="span-name">Downloads</span>
        <span class="span-value">${w}</span>
        </div>
        </div>
        </a>
        </li>
        `).join("");s.insertAdjacentHTML("beforeend",n),k.refresh()}let k=new S(".list a",{sourceAttr:"href",captionsData:"alt",captionDelay:250});u.defaults.baseURL="https://pixabay.com/api/";const q="43311395-53aae2d6cf7a92acb61eb4f46",f=15;async function y(t,s=1){return(await u.get("",{params:{key:q,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:f,page:s}})).data}const g=document.querySelector(".form"),h=document.querySelector(".input"),l=document.querySelector(".list"),c=document.querySelector(".loader"),o=document.querySelector(".load-more");g.addEventListener("submit",$);o.addEventListener("click",()=>E(v));async function $(t){t.preventDefault(),c.style.display="inline-block";const s=h.value;try{const n=await y(s);if(n.hits.length===0)throw new Error;l.innerHTML="",m(n.hits,l),o.style.display="block"}catch{l.innerHTML="",d.error({message:"Sorry, there are no images matching your search query. Please try again!",theme:"dark",messageColor:"#fff",messageSize:"16px",messageLineHeight:"1.5",backgroundColor:"#EF4040",position:"topRight",progressBarColor:"#B51B1B"})}finally{c.style.display="none",g.reset()}}let v="";h.addEventListener("input",t=>{v=t.target.value});let p=1;async function E(t){o.style.display="none",c.style.display="inline-block",p+=1;try{const s=await y(t,p);m(s.hits,l),o.style.display="block",c.style.display="none",p*f>=s.totalHits&&(o.style.display="none",d.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(s){console.log(s.message)}}
//# sourceMappingURL=commonHelpers.js.map
