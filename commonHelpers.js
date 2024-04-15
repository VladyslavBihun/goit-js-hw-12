import{S as q,a as u,i as m}from"./assets/vendor-6e0bf343.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function y(a,s){const n=a.map(({webformatURL:i,largeImageURL:e,tags:t,likes:o,views:w,comments:L,downloads:S})=>`
        <li class="item">
        <a class="item-link" href="${e}">
        <img class="item-img" src="${i}" alt="${t}" />
        <div class="wrapper">
        <div class="span-wrapper">
        <span class="span-name">Likes</span>
        <span class="span-value">${o}</span>
        </div>
        <div class="span-wrapper">
        <span class="span-name">Views</span>
        <span class="span-value">${w}</span>
        </div>
        <div class="span-wrapper">
        <span class="span-name">Comments</span>
        <span class="span-value">${L}</span>
        </div>
        <div class="span-wrapper">
        <span class="span-name">Downloads</span>
        <span class="span-value">${S}</span>
        </div>
        </div>
        </a>
        </li>
        `).join("");s.insertAdjacentHTML("beforeend",n),k.refresh()}let k=new q(".list a",{sourceAttr:"href",captionsData:"alt",captionDelay:250});u.defaults.baseURL="https://pixabay.com/api/";const B="43311395-53aae2d6cf7a92acb61eb4f46",f=15;async function g(a,s=1){return(await u.get("",{params:{key:B,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:f,page:s}})).data}const h=document.querySelector(".form"),v=document.querySelector(".input"),l=document.querySelector(".list"),p=document.querySelector(".loader"),d=document.querySelector(".loader-top"),r=document.querySelector(".load-more");h.addEventListener("submit",$);r.addEventListener("click",()=>C(b));async function $(a){a.preventDefault(),d.style.display="inline-block";const s=v.value;try{const n=await g(s);if(n.hits.length===0)throw new Error;l.innerHTML="",y(n.hits,l),r.style.display="block"}catch{l.innerHTML="",m.error({message:"Sorry, there are no images matching your search query. Please try again!",theme:"dark",messageColor:"#fff",messageSize:"16px",messageLineHeight:"1.5",backgroundColor:"#EF4040",position:"topRight",progressBarColor:"#B51B1B"}),r.style.display="none"}finally{d.style.display="none",h.reset()}}let b="";v.addEventListener("input",a=>{b=a.target.value});let c=1;async function C(a){r.style.display="none",p.style.display="inline-block",c+=1;try{const s=await g(a,c);y(s.hits,l),r.style.display="block",p.style.display="none",E(),c*f>=s.totalHits&&(r.style.display="none",m.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(s){console.log(s.message)}}function E(){const s=document.querySelector(".item").getBoundingClientRect().height;window.scrollBy({top:s*2,left:0,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
