let tl2;function funcFilterNews(){document.querySelectorAll("[data-default-news]").forEach((e=>{e.remove()}))}document.addEventListener("DOMContentLoaded",(function(){"use strict";const e=window.matchMedia("(min-width:1200px )"),t=window.matchMedia("(min-width:2000px )"),i=window.matchMedia("(width:500px )");function n(e){e.matches&&(console.log("(min-width:1200px )"),console.log(window.innerHeight),tl2=ScrollTrigger.create({trigger:".navF",start:()=>`top ${$("header").outerHeight(!0)}`,endTrigger:".wrapperr",end:"bottom 80%",pin:!0,invalidateOnRefresh:!0,pinSpacing:!1}))}function l(e){e.matches&&(console.log("(min-width:1200px )"),tl2.kill())}function d(e){e.matches&&(console.log("width:500px )"),tl2.kill())}e.addListener(n),t.addListener(l),i.addListener(d),n(e),l(t),d(i)})),$(document).ready((function(){$("#default_news .flex-col").slice(0,12).show(),$(".seeMore").on("click",(function(e){e.preventDefault(),$("#default_news .flex-col:hidden").slice(0,12).slideDown(),setTimeout((()=>{tl2.refresh(),tl2.update()}),100),0==$("#default_news .flex-col:hidden").length&&($(".seeMore").css("visibility","hidden"),$(".seeMore").css("visibility","hidden"))}))}));let btns=document.querySelectorAll(".btn");btns[0].classList.add("activee");let inputs=document.querySelectorAll(".radionBtnActive");inputs.forEach((e=>{e.addEventListener("click",(e=>{if(console.log(e.currentTarget.checked),e.currentTarget.checked){let i=e.currentTarget.getAttribute("bc-value");console.log("chaked",i),console.log(e.currentTarget.parentNode);var t=`/loadNews.bc?catid=${i}`;setTimeout((()=>{$("#default_news .flex-col:hidden").slice(0,12).slideDown(),console.log($("#default_news .flex-col:hidden"),"hidden item"),0==$("#default_news .flex-col:hidden").length?$(".seeMore").css("visibility","hidden"):$("#default_news .flex-col:hidden").length-12>0?(console.log("newItem "),$(".seeMore").css("visibility","visible"),setTimeout((()=>{tl2.refresh(),tl2.update()}),100)):$(".seeMore").css("visibility","hidden")}),1e3),$("#default_news").load(t),btns.forEach((e=>{e.classList.remove("activee")})),e.currentTarget.parentNode.classList.add("activee")}else console.log("unchaked")}))}));let header1=document.querySelector("header .left a:nth-child(2)");header1.classList.add("active");