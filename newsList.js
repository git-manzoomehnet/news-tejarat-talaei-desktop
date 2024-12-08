


  let tl2 
  // let trigger2 

    document.addEventListener("DOMContentLoaded", function () {
    "use strict";
  
const tabletDevice = window.matchMedia("(min-width:1200px )");
const tabletDevice1 = window.matchMedia("(min-width:2000px )");
const surfaceDevice = window.matchMedia("(width:500px )");

tabletDevice.addListener(handleDeviceChange);
tabletDevice1.addListener(handleDeviceChange1);
surfaceDevice.addListener(handleDeviceChange2);

function handleDeviceChange(e) {
    if (e.matches){
      console.log('(min-width:1200px )');
      console.log(window.innerHeight);
      
      tl2= ScrollTrigger.create({
        trigger: '.navF',
       start: () => `top ${$("header").outerHeight(true)}`,
        endTrigger: ".wrapperr",
        end: "bottom top",
        pin: true,
        invalidateOnRefresh: true,
        pinSpacing:false,
      })
    }
 

}

function handleDeviceChange1(e) {
    if (e.matches){
      console.log('(min-width:1200px )');

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



  $(document).ready(function() {
    $("#default_news .flex-col").slice(0, 12).show();
  $('.seeMore').on('click', function (e) {
  e.preventDefault();
  $("#default_news .flex-col:hidden").slice(0,12 ).slideDown();
  setTimeout(() => {
    tl2.refresh()
    tl2.update()

  }, 100);
  if ($("#default_news .flex-col:hidden").length == 0) {
    $(".seeMore").css('visibility', 'hidden');
    $(".seeMore").css('visibility', 'hidden');
  
  }
  
  });
  })

          function funcFilterNews(){
              const news = document.querySelectorAll("[data-default-news]")
              news.forEach( e => {
                  e.remove()
              })
          }
          let btns = document.querySelectorAll('.btn')
          btns[0].classList.add('activee')
          let inputs = document.querySelectorAll('.radionBtnActive')
          inputs.forEach(r=>{
              // console.log(r);
              r.addEventListener('click', (event) => {
                  console.log(event.currentTarget.checked);

              

                
    if (event.currentTarget.checked) {
      let catid = event.currentTarget.getAttribute('bc-value')
    console.log('chaked',catid);
    console.log(event.currentTarget.parentNode);
    var url = `/loadNews.bc?catid=${catid}`;
    setTimeout(()=>{
      $("#default_news .flex-col:hidden").slice(0,12).slideDown();
      console.log( $("#default_news .flex-col:hidden"),'hidden item');
      if ( $("#default_news .flex-col:hidden").length ==0) {
        $(".seeMore").css('visibility', 'hidden');
      }

     else if ( $("#default_news .flex-col:hidden").length - 12 > 0) {
        console.log('newItem ');
        
$(".seeMore").css('visibility', 'visible');
setTimeout(() => {
  tl2.refresh()
  tl2.update()

}, 100);
}
else{
$(".seeMore").css('visibility', 'hidden');

}

  },1000)
    $("#default_news").load(url,function(responseTxt, statusTxt, xhr){
      gsap.to('.lds-roller',{
        opacity:1,
        display:'flex'
     })
      if(statusTxt == "success")
        gsap.to('.lds-roller',{
          opacity:0,
          display:'none'
       })
      if(statusTxt == "error")
        alert("Error: " + xhr.status + ": " + xhr.statusText);
    });
    btns.forEach(b=>{
      b.classList.remove('activee')
    })
    event.currentTarget.parentNode.classList.add('activee')
  
    } else {
      console.log('unchaked');
   
    }
    })
          })

