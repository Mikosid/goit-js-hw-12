import{a as p,i as m,S as g}from"./assets/vendor-b0d10f48.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function l(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=l(r);fetch(r.href,o)}})();async function f(e,t){const l="https://pixabay.com/api/",n="44836601-5a8b44801a2932315159889f0",r=new URLSearchParams({key:n,q:e.replace(/\s+/g,"+"),image_type:"photo",orientation:"horizontal",safesearch:!0,page:t.currentPage,per_page:t.per_page});try{return(await p.get(`${l}?${r}`)).data}catch(o){throw new Error(o.response.statusText)}}function d(e){m.error({title:"Error",message:e})}function y(e){return`
    <div class="gallery-item">
      <a href="${e.largeImageURL}" class="gallery-link">
        <img src="${e.webformatURL}" alt="${e.tags}" class="gallery-image" />
      </a>
      <div class="item-info-block">
        ${c("Likes",e.likes)}
        ${c("Views",e.views)}
        ${c("Comments",e.comments)}
        ${c("Downloads",e.downloads)}
      </div>
    </div>
  `}function c(e,t){return`
    <div class="block">
      <p class="title">${e}</p>
      <p class="amount">${t}</p>
    </div>
  `}function E(e){const t=document.querySelector(".gallery"),l=e.map(n=>y(n)).join("");t.insertAdjacentHTML("beforeend",l)}const L=new g(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,overlay:!0,close:!0,className:"custom-lightbox"}),s={searchFormEl:document.querySelector(".js-search"),searchInputEl:document.querySelector(".input-search"),loadMoreBtnEl:document.querySelector(".btn-load-more"),endTextEl:document.querySelector(".end-text"),galleryEl:document.querySelector(".gallery"),loaderEl:document.querySelector(".loader")},a={currentPage:1,per_page:15},v=()=>{const e=s.galleryEl.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:e*2,left:0,behavior:"smooth"})},u=async e=>{s.loaderEl.classList.remove("is-hidden");try{const t=await f(e,a);if(!t.hits.length&&a.currentPage===1){s.loadMoreBtnEl.classList.add("is-hidden"),s.loaderEl.classList.add("is-hidden"),d("Sorry, there are no images matching your search query. Please try again!");return}E(t.hits),s.loadMoreBtnEl.classList.remove("is-hidden"),L.refresh(),(t.hits.length<a.per_page||a.currentPage*a.per_page>=t.totalHits)&&(s.loadMoreBtnEl.classList.add("is-hidden"),s.endTextEl.classList.remove("is-hidden"),s.loadMoreBtnEl.removeEventListener("click",h)),s.loaderEl.classList.add("is-hidden")}catch{d("Unknown error. Please try again!")}};s.searchFormEl.addEventListener("submit",async e=>{e.preventDefault(),a.currentPage=1,s.galleryEl.innerHTML="";const t=s.searchInputEl.value.trim();t&&(await u(t),s.endTextEl.classList.add("is-hidden"),s.loadMoreBtnEl.addEventListener("click",h))});const h=async e=>{a.currentPage+=1;const t=s.searchInputEl.value.trim();u(t),v()};
//# sourceMappingURL=commonHelpers.js.map
