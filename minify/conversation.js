const news_slider_wrapper = document.getElementById("news_slider")
if(news_slider_wrapper){
    var news_slider = new Splide( '#news_slider', {
    type   : 'loop',
    perPage: 2,
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
var swiper = new Swiper('.swiperg', {
slidesPerView: 2.3,
spaceBetween: 30,
centeredSlides: true,
speed: 700,


});
    function refreshcaptcha(){
    $bc.setSource("db.refresh",true)
} 
const blog_gallerywrapper = document.querySelector("#blog_gallery")
$(document).ready(function() {
// Swiper: Slider
new Swiper('.swiper-news', {

slidesPerView: 1.8,
paginationClickable: true,
spaceBetween: 20,
navigation: {
nextEl: ' .swiper-button-next',
prevEl: ' .swiper-button-prev',
},
breakpoints: {
600:{
    slidesPerView: 1,  
},
1000: {
    slidesPerView: 2,

},
1200: {
    slidesPerView: 2,
},

},

});
});