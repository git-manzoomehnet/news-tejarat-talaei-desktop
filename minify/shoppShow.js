let loadingContainer1= document.querySelector('.main-loader-bg')
setTimeout(()=>{
  gsap.to(loadingContainer1,{
      opacity:0,
      ease:'none',
      duration:.8,
      delay:1,
       display:'none'
  })
  gsap.to('.loaader',{
      opacity:0,
      ease:'none',
      duration:.8,
      delay:.6,
      display:'none'
  })
  gsap.to('.ShoppingShow .Overlay  .Title h1',{
     scale:1,
      ease:'none',
      duration:.3,
      delay:1,
  })
  gsap.to('.up',{
      y:0,
      ease:'none',
      duration:.8,
      delay:1.5,
      opacity:1,
      stagger:.3
  })
})

document.addEventListener("mousemove", function (event) {
  const x = event.pageX - 10;
  const y = event.pageY - 10;
  const cursor = document.querySelector("#cursor");
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
});

$('.sliderProduct_Galery').on("mouseover", function () {
  $('#cursor').css({ 'display': 'flex' });
  $('#cursor img').css({ 'display': 'flex' });

});

$('.sliderProduct_Galery').on("mouseleave", function () {
  $('#cursor').css({ 'display': 'none' });
  $('#cursor img').css({ 'display': 'none' });

});

     var swiper1 = new Swiper(".swiper", {
    spaceBetween: 10,
    slidesPerView: 2,
    breakpoints: {
      
        1000: {
            slidesPerView: 3,
       
        },
        2000: {
            slidesPerView: 4,
        },
       
    },
  });

  var related_new_slider = new Splide( '#related_new_slider', {
          type   : 'loop',
          perPage: 3,
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
