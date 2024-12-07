   // SELECTBOX
   let defOP = document.querySelectorAll('.default_option')
   defOP.forEach((d)=>{
       d.addEventListener('click',(e)=>{
      e.currentTarget.parentElement.classList.toggle("active")
      let lis =e.currentTarget.nextElementSibling.querySelectorAll('.select_ul li')
      lis.forEach(l=>{
       l.addEventListener('click',(e1)=>{
           let currentele = e1.currentTarget.querySelector('p').innerHTML
           console.log(e1.currentTarget);
           let catid = e1.currentTarget.getAttribute('data-catid')
             var url = `/load.bc?catid=${catid}&type=${catid}`
           $(".loaded").load(url);
           setTimeout(()=>{
             var swiper1 = new Swiper(".swiper-news", {
         spaceBetween: 30,
         slidesPerView: 4.3,
         navigation: {
           nextEl: '.newsContainer .swiper-button-next',
           prevEl: '.newsContainer .swiper-button-prev',
       },
       breakpoints: {
   
   // when window width is >= 1000
   1000: {
     slidesPerView: 2,
     spaceBetween: 50
   },
      // when window width is >= 1200
      1200: {
       slidesPerView: 3,
       spaceBetween: 50
     },
   1400: {
       slidesPerView: 4.3,
       spaceBetween: 50
     }
   }
       });
       new Swiper('.swiper-conversation', {
           slidesPerView: 1.2,
           paginationClickable: true,
           spaceBetween: 20,
           navigation: {
           nextEl: '.conversationContainer .swiper-button-next',
           prevEl: '.conversationContainer .swiper-button-prev',
       },
       breakpoints: {
   600:{
     slidesPerView: 1,
     spaceBetween: 50
   },
   // when window width is >= 1000
   1000: {
     slidesPerView: 2,
     spaceBetween: 50
   },
      // when window width is >= 1200
      1200: {
       slidesPerView: 2,
       spaceBetween: 50
     },
   1400: {
       slidesPerView: 2,
       spaceBetween: 50
     }
   }
       });
   
   if(document.querySelector('#related_new_slider ul li')){
     var related_new_slider = new Splide( '#related_new_slider', {
             //   type   : 'loop',
               perPage: 2.5,
               perMove: 1,
               autoWidth: true,
               arrows : false,
               pagination : false,
               gap: '28px',
               direction: 'rtl', 
               breakpoints: {
               1024: {
                 perPage: 3,
                
               },
               767: {
                 perPage: 2,
             
               },
               640: {
                 perPage: 1,
           
               },
             },
               } );
               related_new_slider.mount();
   
   }
   if(document.querySelector('#news_slider1 ul li')){
     var news_slider1 = new Splide( '#news_slider1', {
               // type   : 'loop',
               perPage: 4,
               perMove: 1,
               autoWidth: true,
               arrows : true,
               pagination : false,
               gap: '28px',
               direction: 'rtl', 
               breakpoints: {
               1024: {
                 perPage: 3,
                
               },
               767: {
                 perPage: 2,
             
               },
               640: {
                 perPage: 1,
           
               },
             },
               classes: {
                   arrows: 'splide__arrows your-class-arrows',
                          arrow : 'splide__arrow your-class-arrow',
                       prev  : 'splide__arrow--prev',
                       next  : 'splide__arrow--next',
               },
               } );
   
               news_slider1.mount();
   } 
     
           
               let mahnames = document.querySelectorAll('#news_slider1 .splide__slide')
               let colurs = ['#FFFFFF','#FFFFD1',' #F0C5D5','#B2D9EA']
        let i = 0
        mahnames.forEach(element => {
           console.log(element);
           element.querySelector('.color').style.backgroundColor=colurs[i]
           element.querySelector('.color').setAttribute('data-color',colurs[i])
           element.querySelector('.color').classList.add(`data-${i}`)
   
           i++
           if(i>=colurs.length){
               i=0
           }
          
        });
        
           },1000)
           e1.currentTarget.parentElement.previousElementSibling.querySelector('p').innerHTML = currentele;
           e1.currentTarget.classList.add("active")
           e1.currentTarget.parentElement.parentElement.classList.remove("active")
          })
      })
   })
   })
   
   // FILTER
   // let btns = document.querySelectorAll('.select_ul li')
   // btns.forEach(btn=>{
   //   btn.addEventListener('click',(e)=>{
   //     console.log('clicked');
   //     let catid = e.currentTarget.getAttribute('data-catid')
   //     var url = `/load.bc?catid=${catid}&type=1`;
   //     $(".loaded").load(url);
   //   })
   // })
   
   // SEARCH
     let searchIcon = document.querySelector('.SearchIcon')
     searchIcon.addEventListener('click',()=>{
       console.log('clicked');
       let input = document.querySelector('.filters input')
       if(input.value ==' ' || input.value ==''){
      return
       }
   
       else{
         console.log('val',input.value);
       var url = `/load.bc?q=${input.value}&type=2`;
       
       $(".loaded").load(url);
       setTimeout(()=>{
             var swiper1 = new Swiper(".swiper-news", {
         spaceBetween: 30,
         slidesPerView: 4.3,
         navigation: {
           nextEl: '.newsContainer .swiper-button-next',
           prevEl: '.newsContainer .swiper-button-prev',
       },
       breakpoints: {
   
   // when window width is >= 1000
   1000: {
     slidesPerView: 2,
     spaceBetween: 50
   },
      // when window width is >= 1200
      1200: {
       slidesPerView: 3,
       spaceBetween: 50
     },
   1400: {
       slidesPerView: 4.3,
       spaceBetween: 50
     }
   }
       });
       new Swiper('.swiper-conversation', {
           slidesPerView: 1.2,
           paginationClickable: true,
           spaceBetween: 20,
           navigation: {
           nextEl: '.conversationContainer .swiper-button-next',
           prevEl: '.conversationContainer .swiper-button-prev',
       },
       breakpoints: {
   600:{
     slidesPerView: 1,
     spaceBetween: 50
   },
   // when window width is >= 1000
   1000: {
     slidesPerView: 2,
     spaceBetween: 50
   },
      // when window width is >= 1200
      1200: {
       slidesPerView: 2,
       spaceBetween: 50
     },
   1400: {
       slidesPerView: 2,
       spaceBetween: 50
     }
   }
       
       });
   
   if(document.querySelector('#related_new_slider ul li')){
     var related_new_slider = new Splide( '#related_new_slider', {
             //   type   : 'loop',
               perPage: 2.5,
               perMove: 1,
               autoWidth: true,
               arrows : false,
               pagination : false,
               gap: '28px',
               direction: 'rtl', 
               breakpoints: {
               1024: {
                 perPage: 3,
                
               },
               767: {
                 perPage: 2,
             
               },
               640: {
                 perPage: 1,
           
               },
             },
               } );
               related_new_slider.mount();
   
   }
   if(document.querySelector('#news_slider1 ul li')){
     var news_slider1 = new Splide( '#news_slider1', {
               // type   : 'loop',
               perPage: 4,
               perMove: 1,
               autoWidth: true,
               arrows : true,
               pagination : false,
               gap: '28px',
               direction: 'rtl', 
               breakpoints: {
               1024: {
                 perPage: 3,
                
               },
               767: {
                 perPage: 2,
             
               },
               640: {
                 perPage: 1,
           
               },
             },
               classes: {
                   arrows: 'splide__arrows your-class-arrows',
                          arrow : 'splide__arrow your-class-arrow',
                       prev  : 'splide__arrow--prev',
                       next  : 'splide__arrow--next',
               },
               } );
   
               news_slider1.mount();
   } 
     
           
               let mahnames = document.querySelectorAll('#news_slider1 .splide__slide')
               let colurs = ['#FFFFFF','#FFFFD1',' #F0C5D5','#B2D9EA']
        let i = 0
        mahnames.forEach(element => {
           console.log(element);
           element.querySelector('.color').style.backgroundColor=colurs[i]
           element.querySelector('.color').setAttribute('data-color',colurs[i])
           element.querySelector('.color').classList.add(`data-${i}`)
   
           i++
           if(i>=colurs.length){
               i=0
           }
          
        });
        
           },1000)
       }
     })