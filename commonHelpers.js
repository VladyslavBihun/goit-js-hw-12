import{S as q,a as y,i as p}from"./assets/vendor-6e0bf343.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();function f(i,t){const a=i.map(({webformatURL:o,largeImageURL:e,tags:s,likes:n,views:w,comments:L,downloads:S})=>`
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
        `).join("");t.insertAdjacentHTML("beforeend",a),B.refresh()}let B=new q(".list a",{sourceAttr:"href",captionsData:"alt",captionDelay:250});y.defaults.baseURL="https://pixabay.com/api/";const H="43311395-53aae2d6cf7a92acb61eb4f46",d=15;async function h(i,t=1){return(await y.get("",{params:{key:H,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:d,page:t}})).data}const g=document.querySelector(".form"),v=document.querySelector(".input"),l=document.querySelector(".list"),u=document.querySelector(".loader"),m=document.querySelector(".loader-top"),r=document.querySelector(".load-more");g.addEventListener("submit",$);r.addEventListener("click",()=>C(b));async function $(i){i.preventDefault(),m.style.visibility="visible";const t=v.value;try{const a=await h(t);if(a.hits.length===0)throw new Error;l.innerHTML="",f(a.hits,l),r.style.visibility="visible",c*d>=a.totalHits&&(r.style.visibility="hidden",p.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{l.innerHTML="",p.error({message:"Sorry, there are no images matching your search query. Please try again!",theme:"dark",messageColor:"#fff",messageSize:"16px",messageLineHeight:"1.5",backgroundColor:"#EF4040",position:"topRight",progressBarColor:"#B51B1B"}),r.style.visibility="hidden"}finally{m.style.visibility="hidden",g.reset()}}let b="";v.addEventListener("input",i=>{b=i.target.value});let c=1;async function C(i){r.style.visibility="hidden",u.style.visibility="visible",c+=1;try{const t=await h(i,c);f(t.hits,l),r.style.visibility="visible",u.style.visibility="hidden",E(),c*d>=t.totalHits&&(r.style.visibility="hidden",p.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(t){console.log(t.message)}}function E(){const t=document.querySelector(".item").getBoundingClientRect().height;window.scrollBy({top:t*2,left:0,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
