document.addEventListener("DOMContentLoaded", function () {
  "use strict";

const tabletDevice = window.matchMedia("(min-width:1200px )");
const tabletDevice1 = window.matchMedia("(min-width:2000px )");
const surfaceDevice = window.matchMedia("(width:500px )");

tabletDevice.addListener(handleDeviceChange);
tabletDevice1.addListener(handleDeviceChange1);
surfaceDevice.addListener(handleDeviceChange2);
let tl2
function handleDeviceChange(e) {
  if (e.matches){
    console.log('(min-width:1200px )');
    
    tl2= ScrollTrigger.create({
      trigger: '.navF',
      start: 'top 30%',
      endTrigger: ".wrapperr",
      end: "bottom 80%",
      pin: true,
      pinSpacing:false,
    })
  }


}

function handleDeviceChange1(e) {
  if (e.matches){
    console.log('(min-width:2000px )');

    tl2.kill();
  }


}
function handleDeviceChange2(e) {
if (e.matches){
  console.log('width:500px )');

  tl2.kill();
}


}
// Run it initially
handleDeviceChange(tabletDevice);
handleDeviceChange1(tabletDevice1);
handleDeviceChange2(surfaceDevice);


});

      const blog_gallerywrapper = document.querySelector("#blog_gallery")
      if(blog_gallerywrapper){
          var blogGallery = new Splide( '#blog_gallery', {
          type   : 'loop',
          perPage: 3,
          perMove: 1,
          autoWidth: true,
          arrows : false,
          pagination : false,
          gap: '28px',
          direction: 'rtl', 
          } );
          blogGallery.mount();
      }
    


          const related_new_slider_wrapper = document.getElementById("related_new_slider")
          if(related_new_slider_wrapper){
              var related_new_slider = new Splide( '#related_new_slider', {
          type   : 'loop',
          perPage: 3,
          perMove: 1,
          autoWidth: true,
          arrows : false,
          pagination : false,
          gap: '28px',
          direction: 'rtl', 
          } );

          related_new_slider.mount();
          }
          

          function changeTab(el, id){
          const allTabs = document.querySelectorAll(".tab1")
          const allTabsHeader = document.querySelectorAll(".tab_header")
          allTabs.forEach(e => {
              e.classList.add("body_inactive")
              
          })
          allTabsHeader.forEach(e => {
              e.classList.add("tab_active")
              
          })
          let btns = document.querySelectorAll('#tabs .tab_header')
          btns.forEach(p=>{
              p.classList.remove('tab_active')
          })
          document.querySelector(`[data-tab-body="${id}"]`).classList.add("body_active")
          document.querySelector(`[data-tab-body="${id}"]`).classList.remove("body_inactive")
          el.classList.add("tab_active")
      }
      function refreshcaptcha(){
          $bc.setSource("db.refresh",true)
      } 











     let tab1 = document.querySelector('#tabs_body .tab1')
   tab1.classList.add('first')
   let tabs = document.querySelectorAll('#tabs_body .tab1 .tab_body_header')
   tabs.forEach(a=>{
      a.addEventListener('mouseenter',()=>{
          tab1.classList.remove('first')
      })
      a.addEventListener('mouseleave',()=>{
          tab1.classList.add('first')
      })
   })


    var swiper1 = new Swiper('.swiper-news', {
      slidesPerView: 4,
      paginationClickable: true,
      spaceBetween: 20,
      navigation: {
          prevEl : '.newss .swiper-button-next',
          nextEl: '.newss .swiper-button-prev',
  },
  breakpoints: {
      500:{
          slidesPerView: 2,
      },
      1000: {
          slidesPerView: 2,
     
      },
      1200: {
          slidesPerView: 3,
      },
      1400: {
          slidesPerView: 4,
      },
  },
  });
        let header1 = document.querySelector('header .left a:nth-child(2)')
        header1.classList.add('active')