import{a,i as d,S as u,N as f,P as p,K as b,A as m}from"./assets/vendor-Cyx9SAP-.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const y=document.querySelector(".header-menu-btn"),i=document.querySelector("#mob-menu"),g=document.querySelector(".mob-menu-close-btn");y.addEventListener("click",k);g.addEventListener("click",l);function k(){i.classList.add("is-open"),document.body.classList.add("scroll-locked")}function l(){i.classList.remove("is-open"),document.body.classList.remove("scroll-locked")}document.querySelectorAll(".mob-menu-logo, .mob-menu-nav-link, .mob-menu-book-btn").forEach(o=>{o.addEventListener("click",l)});const h=document.querySelector(".feedbacks-list"),v=document.querySelector(".feedbacks-button-prev"),L=document.querySelector(".feedbacks-button-next"),w=document.querySelector(".feedbacks-pagination");a.defaults.baseURL="https://wedding-photographer.b.goit.study/api";async function S(o=10,s=1){return(await a.get("/feedbacks",{params:{limit:o,page:s}})).data}async function q(){try{const o=await S();h.innerHTML=o.feedbacks.map(s=>`
          <li class="feedbacks-item swiper-slide">
            <blockquote class="feedbacks-card">
              <p class="feedbacks-text">
                ${s.descr}
              </p>

              <p class="feedbacks-author">
                ${s.name}
              </p>
            </blockquote>
          </li>
        `).join("")}catch(o){throw d.error({title:"Error",message:"Failed to load feedbacks. Please try again later.",position:"topRight"}),o}}function P(){new u(".feedbacks-slider",{modules:[f,p,b,m],slidesPerView:1,spaceBetween:24,navigation:{prevEl:v,nextEl:L},keyboard:{enabled:!0,onlyInViewport:!0},pagination:{el:w,clickable:!0,bulletClass:"feedbacks-dot",bulletActiveClass:"is-active"},a11y:{prevSlideMessage:"Previous feedback",nextSlideMessage:"Next feedback"},breakpoints:{768:{slidesPerView:3}}})}async function M(){try{await q(),P()}catch(o){console.error(o)}}M();
//# sourceMappingURL=index.js.map
