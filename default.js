
let gridItems = document.querySelectorAll('.GridItem')
let Banner1 = document.querySelector('.GridItem img')
let img1 = gridItems[1].getAttribute('data-bg')
Banner1.setAttribute('src',img1)
let Banner = document.querySelector('.GridItem img')
gridItems.forEach(grid=>{
    grid.addEventListener('mouseenter',(event)=>{
   
        let img = event.currentTarget.getAttribute('data-bg')
        gridItems.forEach(item=>{
            item.classList.remove('active')
        })
        event.currentTarget.classList.add('active')
        console.log(img,'img');
        
        Banner.setAttribute('src',img)
  
    })
    grid.addEventListener('mouseleave',(event)=>{
        let img = event.currentTarget.getAttribute('data-bg')
        Banner.setAttribute('src',img)

    })
})
    var swiper1 = new Swiper(".gallery .mySwiper", {
      spaceBetween: 50,
      slidesPerView: 3,
   
    });
    var swiper2 = new Swiper(".gallery .mySwiper2", {
      spaceBetween: 10,
      navigation: {
        nextEl: ".gal .swiper-button-next",
        prevEl: ".gal .swiper-button-prev",
      },
      thumbs: {
        swiper: swiper1,
      },
    });
        function changeTab(el, id){
            const allTabs = document.querySelectorAll(".tab1")
            allTabs.forEach(e => {
                e.classList.add("body_inactive")
                
            })
           let btns = document.querySelectorAll('#tabs .tab_header')
            btns.forEach(p=>{
                p.classList.remove('tab_active')
            })
            document.querySelector(`[data-tab-body="${id}"]`).classList.add("body_active")
            document.querySelector(`[data-tab-body="${id}"]`).classList.remove("body_inactive")
            el.classList.add("tab_active")
        }


    new Swiper('.swiper-news', {
        slidesPerView: 2,
        paginationClickable: true,
        spaceBetween: 20,
        navigation: {
            prevEl : '.newss .swiper-button-next',
            nextEl: '.newss .swiper-button-prev',
    },
    breakpoints: {
        1000: {
            slidesPerView: 2,
       
        },
        1200: {
            slidesPerView: 2,
        },
       
    },
    });


            var news_slider1 = new Splide( '#news_slider1', {
            type   : 'loop',
            focus: 'center',
            perPage: 4,
            perMove: 1,
            autoWidth: true,
            arrows : true,
            pagination : false,
            gap: '28px',
            direction: 'rtl', 
            classes: {
                arrows: 'splide__arrows your-class-arrows',
		    arrow : 'splide__arrow your-class-arrow',
                    prev  : 'splide__arrow--prev',
                    next  : 'splide__arrow--next',
            },
            } );

            news_slider1.mount();

     let mahnames = document.querySelectorAll('#news_slider1 .splide__slide')
     let colurs = ['#FFFFFF','#FEBE1B','#ED2289']
     let i = 0
     mahnames.forEach(element => {
        console.log(element);
        element.querySelector('.color').style.backgroundColor=colurs[i]
        element.querySelector('.color').setAttribute('data-color',colurs[i])
        element.querySelector('.color').classList.add(`data-${i}`)

        i++
        if(i>colurs.length){
            i=0
        }
       
     });
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

     document.addEventListener("DOMContentLoaded", function () {
        "use strict";
      
    const tabletDevice = window.matchMedia("(min-width:1200px )");
    const tabletDevice1 = window.matchMedia("(min-width:2000px )");
    
    tabletDevice.addListener(handleDeviceChange);
    tabletDevice1.addListener(handleDeviceChange1);
    let tl
    function handleDeviceChange(e) {
        if (e.matches){
             tl =  ScrollTrigger.create({
      trigger:' .pinscroll',
      start:'top top',
      end:'bottom 100%',
      pin:'.blogFirst',
      //   animation: animation,
      scrub: 1,
      })
        }
    
    
    }
    
    function handleDeviceChange1(e) {
        if (e.matches){
            tl.kill();
    
        }
    
    
    }
    
    // Run it initially
    handleDeviceChange(tabletDevice);
    handleDeviceChange1(tabletDevice1);
    
      
      });
      let header1 = document.querySelector('header .left a:nth-child(1)')
      header1.classList.add('active')
     