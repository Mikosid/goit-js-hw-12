import{S as y,i as n,a as g}from"./assets/vendor-c493984e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))m(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&m(u)}).observe(document,{childList:!0,subtree:!0});function l(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function m(r){if(r.ep)return;r.ep=!0;const a=l(r);fetch(r.href,a)}})();const o={searchForm:document.querySelector(".js-search-form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".js-loader"),loadmore:document.querySelector(".loadmore-button")},p=new y(".gallery a",{captionDelay:250,overlayOpacity:.8,scrollZoom:!1});p.on("show.simplelightbox",function(){});n.settings({timeout:2500,resetOnHover:!0,transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight",titleSize:25,messageSize:25,backgroundColor:"rgba(255, 182, 66, 0.8)"});function b(e){return e.map(t=>`<li class="card">
            <a href="${t.largeImageURL}" class="big gallery-link">
              <img
                src="${t.previewURL}"
                alt="${t.tags}"
                title="${t.tags}"
                class="card-img"
            /></a>
            <ul class="card-title">
              <li class="card-text-blok">
                <h2 class="card-title-text">Likes</h2>
                <p class="card-text-value">${t.likes}</p>
              </li>
              <li class="card-text-blok">
                <h2 class="card-title-text">Views</h2>
                <p class="card-text-value">${t.views}</p>
              </li>
              <li class="card-text-blok">
                <h2 class="card-title-text">Comments</h2>
                <p class="card-text-value">${t.comments}</p>
              </li>
              <li class="card-text-blok">
                <h2 class="card-title-text">Downloads</h2>
                <p class="card-text-value">${t.downloads}</p>
              </li>
            </ul>
          </li>`).join("")}function d(e){switch(o.loader.classList.remove("loader"),e){case"outdata":n.warning({title:"Error",message:"Введіть данні для пошуку!"});break;case"nodata":n.warning({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});break;default:n.error({title:"Error",message:"Щось пішло не так. Ми працюемо над вирішенням питання!"});break}}function L(){const e=document.querySelector(".card").getBoundingClientRect().height;window.scrollBy({left:0,top:Math.ceil(e*2),behavior:"smooth"})}function f(e){o.loader.classList.remove("loader"),o.gallery.insertAdjacentHTML("beforeend",b(e)),p.refresh()}g.defaults.baseURL="https://pixabay.com/api";const c={key:"44836601-5a8b44801a2932315159889f0",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:1};async function h(){return(await g.get("/",{params:c})).data}o.searchForm.addEventListener("submit",x);let s,i;function x(e){e.preventDefault(),s=1,i=1;const t=e.target.searchtext.value.trim().toLowerCase();if(!t){d("outdata");return}c.q=t,c.page=s,o.gallery.innerHTML="",o.loader.classList.add("loader"),h().then(l=>{if(i=Math.ceil(l.totalHits/c.per_page),i===0){d("nodata");return}f(l.hits),i>s&&(s+=1,v())}).catch(l=>{d(l)}).finally(o.searchForm.reset())}function v(){o.loadmore.style.setProperty("--lmb-dispay","block"),o.loadmore.addEventListener("click",()=>{if(o.loader.classList.add("loader"),c.page=s,h().then(e=>{f(e.hits),L()}).catch(e=>{d(e)}),i===s){o.loadmore.style.setProperty("--lmb-dispay","none");return}else s+=1})}
//# sourceMappingURL=commonHelpers.js.map
