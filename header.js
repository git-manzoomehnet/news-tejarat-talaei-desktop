

var lastScrollTop = 0;
window.addEventListener("scroll", function(){ 
   var st = window.pageYOffset || document.documentElement.scrollTop; 
   if(st ==0){

      $(".topHeader").removeClass("goTop");
      $(".topHeader").removeClass("goDown");
      $(".bottomHeader").removeClass("goTop");
      $(".bottomHeader").removeClass("goDown");
 
  
    if(document.querySelector('.ShoppingShow')){
      $(".bottomHeader ").removeClass("goDown");
      $(".bottomHeader ").removeClass("goTop");
    
     }
   }
   else if (st > lastScrollTop) {
    $("header").addClass("goDown");
    $(".topHeader").addClass("goDown");
    $(".topHeader").removeClass("goTop");
    $("header").removeClass("goTop");
 if(document.querySelector('.ShoppingShow')){
  $(".bottomHeader ").addClass("goDown");

 }
    
} else if (st < lastScrollTop) {
    // upscroll code
    $("header").addClass("goTop");
    $(".topHeader").addClass("goTop");
    $(".topHeader").removeClass("goDown");
    $("header").removeClass("goDown");
    if(document.querySelector('.ShoppingShow')){
      $(".bottomHeader ").removeClass("goDown");
      $(".bottomHeader").addClass("goTop");
     }
   } 
   lastScrollTop = st <= 0 ? 0 : st;
}, false);

// DESKTOP
function switchScroll() {
    if (flag != true){
      enable_scroll();
    } else {
      disable_scroll();
    }
  }
    function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault) {
      e.preventDefault();
    }
    e.returnValue = false;
  }
  function keydown(e) {
    var keys = [32,33,34,35,36,37,38,39,40];
    for (var i = keys.length; i--;) {
      if (e.keyCode === keys[i]) {
        preventDefault(e);
        return;
      }
    }
  }
  function wheel(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  }
  function disable_scroll() {
    if (document.addEventListener) {
      document.addEventListener('wheel', wheel, false);
      document.addEventListener('mousewheel', wheel, false);
      document.addEventListener('DOMMouseScroll', wheel, false);
    }
    else {
      document.attachEvent('onmousewheel', wheel);
    }
    document.onmousewheel = document.onmousewheel = wheel;
    document.onkeydown = keydown;
    
    x = window.pageXOffset || document.documentElement.scrollLeft,
    y = window.pageYOffset || document.documentElement.scrollTop,
    window.onscroll = function() {
      window.scrollTo(x, y);
    };
    // document.body.style.overflow = 'hidden'; // CSS
    disable_scroll_mobile();
  }
  function enable_scroll() {
    if (document.removeEventListener) {
      document.removeEventListener('wheel', wheel, false);
      document.removeEventListener('mousewheel', wheel, false);
      document.removeEventListener('DOMMouseScroll', wheel, false);
    }
    document.onmousewheel = document.onmousewheel = document.onkeydown = null;
    window.onscroll = function() {};
    // document.body.style.overflow = 'auto'; // CSS
    enable_scroll_mobile();
  }
  
  // MOBILE
  function disable_scroll_mobile(){
    document.addEventListener('touchmove', preventDefault, false);
  }
  function enable_scroll_mobile(){
    document.removeEventListener('touchmove', preventDefault, false);
  }
  const lenis =  new Lenis({
    smoothWheel: true,
    wheelMultiplier:2
  });


  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  
  requestAnimationFrame(raf)
