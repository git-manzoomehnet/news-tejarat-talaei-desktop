if(!document.querySelector('#related_new_slider .splide__list .splide__slide')){
    document.querySelector('.splide__arrows').style.opacity='.5'
      document.querySelector('.splide__arrows').style.pointerEvents='none'
       }
    function nextslider1(el , parent){
              const parentElement = document.querySelector(`#${parent}`)
              const imgElement = parentElement.querySelector(".is-next")
              if(imgElement !=null){
                  const img = imgElement.querySelector("img")
                  document.getElementById("gallery_big_image").setAttribute("src",img.getAttribute("src"))
              }
            
            
          } 
  var related_new_slider = new Splide( '#related_new_slider', {
              type   : 'loop',
              perPage: 3,
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
  
              related_new_slider.mount();
  
              const news_slider_wrapper = document.getElementById("news_slider")
              if(news_slider_wrapper){
                  var news_slider = new Splide( '#news_slider', {
              type   : 'loop',
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
  
              news_slider.mount();
              }
             
              function refreshcaptcha(){
              $bc.setSource("db.refresh",true)
          } 