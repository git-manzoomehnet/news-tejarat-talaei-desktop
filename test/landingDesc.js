let SwiperF=new Swiper(".swiper-gallery",{centeredSlides:!0,slidesPerView:2.5,watchOverflow:!0,watchSlidesProgress:!0,updateOnWindowResize:!0,loop:!0,loopedSlides:3,spaceBetween:30,grabCursor:!0,breakpoints:{700:{slidesPerView:1.8},1e3:{slidesPerView:2.5},1200:{slidesPerView:3}},on:{init(e){let t=e.slides.length,r=e.realIndex,o=document.querySelector(".leftH .num"),l=document.querySelector(".rightH .num");o.innerHTML=r+1,l.innerHTML="",r<=0&&(r=""),console.log(r);let c=document.querySelectorAll(".Galerrys .sl");for(let r=0;r<t;r++)e.slides[r].setAttribute("data",r),c[r].querySelector("span").innerHTML=r+1},slideChange(e){e.slides.length;let t=e.realIndex,r=document.querySelector(".leftH .num"),o=document.querySelector(".rightH .num");r.innerHTML=t+1,o.innerHTML=t-1,t<=0&&(t="",o.innerHTML="")}}}),gallerys=document.querySelectorAll(".sl"),h=0,Is=!0,button=document.querySelectorAll(".Btn-Gallery .bt"),popupF=document.querySelector(".PopUPF-container"),sh=document.querySelector(".shareBox1 "),shB=document.querySelector(".Gallerypopup .share"),extraB=document.querySelectorAll(".btn2");button.forEach((e=>{e.addEventListener("click",(()=>{console.log("click"),popupF.classList.add("show")}))})),shB.addEventListener("click",(()=>{console.log("click"),sh.classList.toggle("show")})),gallerys.forEach((e=>{e.setAttribute("data",h),h++;let t="";extraB.forEach((e=>{e.addEventListener("click",(e=>{let r=document.querySelector(".current"),o=Number(e.currentTarget.parentElement.parentElement.getAttribute("data"));t=Number(e.currentTarget.parentElement.parentElement.getAttribute("data")),r.innerHTML=o+1,console.log("clicked",t),document.querySelector(".Gallerypopup").classList.add("show");let l=e.currentTarget.parentElement.parentElement.querySelector("img").getAttribute("src");console.log(l);let c=document.querySelector("img.Main");c.setAttribute("src",l),c.classList.add("active");let n=[],u=[];for(let e=0;e<gallerys.length;e++)gallerys[e].getAttribute("data")!=t&&(u=gallerys[e]),n.push(gallerys[e]);let s=document.querySelector(" img.Main"),a=t;function i(){let e=t,r=gallerys[a].querySelector("img");console.log("sel",gallerys[e],e),console.log("indec",a),s.classList.remove("active"),setTimeout((()=>{s.setAttribute("src",r.getAttribute("src")),s.classList.add("active")}),200),document.querySelector(".current").innerHTML=a+1}let d=document.querySelector(".Gnext"),m=document.querySelector(".Gprev");d.onclick=()=>{a++,console.log("glen",gallerys.length),console.log("in",a),a==gallerys.length?(a=0,i()):i()},m.onclick=()=>{console.log("in",a),a--,a<0?(a=gallerys.length-1,i()):i()},zoomMax=1.7,currZoom=1,zoomMin=.5,document.querySelector(".zoomIn").addEventListener("click",(()=>{console.log("zoomin"),currZoom<zoomMax&&(currZoom+=.1,document.querySelector("img.Main").style.scale=currZoom)})),document.querySelector(".zoomout").addEventListener("click",(()=>{console.log("zoomout"),currZoom>zoomMin&&(currZoom-=.1,document.querySelector("img.Main").style.scale=currZoom)})),document.querySelector(".download").addEventListener("click",(()=>{!function(){let e=document.querySelector("img.Main").getAttribute("src");document.querySelector(".download a").setAttribute("href",`http://a112tl.undertest.ir${e}`)}()})),Is&&n.forEach((e=>{})),Is=!1,document.querySelector(".total").innerHTML=gallerys.length,document.querySelector(".Gallerypopup .fullscreen").addEventListener("click",(()=>{document.querySelector(".PopUPF-container").classList.add("show"),setTimeout((()=>{document.querySelector(".Gallerypopup").classList.remove("show")}),1e3)}))}))})),e.addEventListener("click",(e=>{let r=document.querySelector(".current"),o=Number(e.currentTarget.getAttribute("data"));t=Number(e.currentTarget.getAttribute("data")),r.innerHTML=o+1,console.log("clicked",t),document.querySelector(".Gallerypopup").classList.add("show");let l=e.currentTarget.querySelector("img").getAttribute("src");console.log(l);let c=document.querySelector("img.Main");c.setAttribute("src",l),c.classList.add("active");let n=[],u=[];for(let e=0;e<gallerys.length;e++)gallerys[e].getAttribute("data")!=t&&(u=gallerys[e]),n.push(gallerys[e]);let s=document.querySelector(" img.Main"),a=t;function i(){let e=t,r=gallerys[a].querySelector("img");console.log("sel",gallerys[e],e),console.log("indec",a),s.classList.remove("active"),setTimeout((()=>{s.setAttribute("src",r.getAttribute("src")),s.classList.add("active")}),200),document.querySelector(".current").innerHTML=a+1}let d=document.querySelector(".Gnext"),m=document.querySelector(".Gprev");d.onclick=()=>{a++,console.log("glen",gallerys.length),console.log("in",a),a==gallerys.length?(a=0,i()):i()},m.onclick=()=>{console.log("in",a),a--,a<0?(a=gallerys.length-1,i()):i()},zoomMax=1.7,currZoom=1,zoomMin=.5,document.querySelector(".zoomIn").addEventListener("click",(()=>{console.log("zoomin"),currZoom<zoomMax&&(currZoom+=.1,document.querySelector("img.Main").style.scale=currZoom)})),document.querySelector(".zoomout").addEventListener("click",(()=>{console.log("zoomout"),currZoom>zoomMin&&(currZoom-=.1,document.querySelector("img.Main").style.scale=currZoom)})),document.querySelector(".download").addEventListener("click",(()=>{!function(){let e=document.querySelector("img.Main").getAttribute("src");document.querySelector(".download a").setAttribute("href",`http://a112tl.undertest.ir${e}`)}()})),Is&&n.forEach((e=>{})),Is=!1,document.querySelector(".total").innerHTML=gallerys.length,document.querySelector(".Gallerypopup .fullscreen").addEventListener("click",(()=>{document.querySelector(".Gallerypopup").classList.remove("show"),document.querySelector(".PopUPF-container").classList.add("show")}))}))}));let close1=document.querySelector(".PopUPF-container .close");close1.addEventListener("click",(()=>{document.querySelector(".PopUPF-container").classList.remove("show")}));var myElement=document.querySelector(".landingShow .PopUPF-container .Bottom");new SimpleBar(myElement,{autoHide:!0}),$(document).ready((function(){document.querySelectorAll(".Video");let e=document.querySelectorAll(".Video video");console.log(e),e.forEach((e=>{e.setAttribute("data-IS",!1)})),e.forEach((e=>{e.addEventListener("click",(function(e){let t=e.currentTarget.getAttribute("data-IS");console.log(t),"false"===t?($(e.currentTarget.parentElement).toggleClass("toggle"),e.currentTarget.play(),e.currentTarget.setAttribute("data-IS",!0)):(console.log("umm"),$(e.currentTarget.parentElement).toggleClass("toggle"),e.currentTarget.pause(),e.currentTarget.setAttribute("data-IS",!1))}))}))}));