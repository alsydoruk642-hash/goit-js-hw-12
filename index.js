import{a as w,S as v,i as n}from"./assets/vendor-DcHCnVjq.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const P="56004594-0d53303489bdba13508ce5bdb",S=15;async function d(o,t){return(await w.get("https://pixabay.com/api/",{params:{key:P,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:S}})).data}const u=document.querySelector(".gallery"),f=document.querySelector(".loader"),m=document.querySelector(".load-more"),M=new v(".gallery a");function h(o){const t=o.map(r=>`<li class="gallery-item">
  <a href="${r.largeImageURL}">
    <img
      class="gallery-image"
      src="${r.webformatURL}"
      alt="${r.tags}"
    />
  </a>

  <div class="info">
    <p><b>Likes</b>${r.likes}</p>
    <p><b>Views</b>${r.views}</p>
    <p><b>Comments</b>${r.comments}</p>
    <p><b>Downloads</b>${r.downloads}</p>
  </div>
</li>`).join("");u.insertAdjacentHTML("beforeend",t),M.refresh()}function q(){u.innerHTML=""}function y(){f.classList.add("is-visible")}function g(){f.classList.remove("is-visible")}function p(){m.classList.remove("hidden")}function b(){m.classList.add("hidden")}const $=document.querySelector(".form"),E=document.querySelector(".load-more");let a=1,c="";const L=15;$.addEventListener("submit",B);E.addEventListener("click",O);async function B(o){if(o.preventDefault(),c=o.currentTarget.elements["search-text"].value.trim(),!!c){a=1,q(),b(),y();try{const t=await d(c,a);if(t.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}h(t.hits);const r=Math.ceil(t.totalHits/L);a>=r?n.info({message:"We're sorry, but you've reached the end of search results."}):p()}catch{n.error({message:"Something went wrong. Try again later."})}finally{g()}}}async function O(){a+=1,b(),y();try{const o=await d(c,a);h(o.hits);const t=Math.ceil(o.totalHits/L);a>=t?n.info({message:"We're sorry, but you've reached the end of search results."}):p();const i=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:i*2,behavior:"smooth"})}catch{n.error({message:"Something went wrong. Try again later."})}finally{g()}}
//# sourceMappingURL=index.js.map
