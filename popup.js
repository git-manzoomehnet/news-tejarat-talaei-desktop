var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 70,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '#galley .swiper-button-next',
      prevEl: '#galley .swiper-button-prev',
    },
    breakpoints: {
      600:{
        slidesPerView: 1,
      },
      1000: {
          slidesPerView: 2,
     
      },
      1200: {
          slidesPerView: 3,
      },
     
  },
    

    on:{
        init(e){

            let galleryI = e.slides[e.activeIndex]
            // let galleryI = document.querySelector('.swiper-slide-active')
            console.log(galleryI);
     // zoom
     function zoom(){
      console.log('zoom in');
        let galleryI = document.querySelector('.swiper-slide-active')
        galleryI.style.position='relative'

        galleryI.style.zIndex='1000'
      let currWidth = galleryI.querySelector('img').clientWidth;
      let currHeight =galleryI.querySelector('img').clientHeight;
      galleryI.querySelector('img').style.width = (currWidth + 100) + "px";
      galleryI.querySelector('img').style.height = (currHeight + 100) + "px";
      let text = galleryI.querySelector('img').style.width;
      let result = text.replace("px", "");
      // if((Number(result)) > galleryI.querySelector('img').naturalWidth){
 
      //   galleryI.querySelector('img').style.width =galleryI.querySelector('img').naturalWidth+'px' 
      //   galleryI.querySelector('img').style.height = galleryI.querySelector('img').naturalHeight+'px' 
      // }
     
    }
    function zoomout(){
      console.log('zoom out');
      let galleryI = document.querySelector('.swiper-slide-active')
      galleryI.style.position='relative'

      galleryI.style.zIndex='1000'
      let currWidth = galleryI.querySelector('img').clientWidth;
      let currHeight = galleryI.querySelector('img').clientHeight; 
      galleryI.querySelector('img').style.width = (currWidth - 100) + "px";
      galleryI.querySelector('img').style.height = (currHeight -100) + "px";
      console.log('naturalwidth',galleryI.querySelector('img').naturalWidth);
      console.log('width',galleryI.querySelector('img').style.width);
      let text = galleryI.querySelector('img').style.width;
      let result = text.replace("px", "");
      // if(Number(result)  < galleryI.querySelector('img').naturalWidth){
 
      //   galleryI.querySelector('img').style.width =galleryI.querySelector('img').naturalWidth+'px' 
      //   galleryI.querySelector('img').style.height = galleryI.querySelector('img').naturalHeight+'px' 
      // }
    console.log(galleryI);
    
    }
    function fullscreen(){
    //fullscreen image
    let galleryI = document.querySelector('.swiper-slide-active')
    let fullIMG =galleryI.querySelector('img')
    let imgSRC = fullIMG.getAttribute('src')
    // window.open(imgSRC);

    const winHtml = `<!DOCTYPE html>
    <html>
        <head>
            <title>Window with Blob</title>
        </head>
        <body>
          <div class="close">
            <div class="box">
            <svg width="40" height="40" viewbox="0 0 40 40"><path d="M 10,10 L 30,30 M 30,10 L 10,30" stroke="white" stroke-width="4" /></svg>
            </div></div>
           <img class="transition" alt="@name" title="@name"  src="${imgSRC}" />
        </body>
    </html>`;window.location.href
const w = window.open();
let html = `<p>${u}</p>
<a href="${u}">
<svg  width="40" height="40" viewbox="0 0 40 40">
<path d="M 10,10 L 30,30 M 30,10 L 10,30" stroke="white" stroke-width="4" /></svg></a>
            </div></div>
           <img class="transition" alt="@name" title="@name"  src="${imgSRC}" />`;
w.document.head.innerHTML = `<title>g</title>`;
w.document.body.innerHTML = html;
w.document.body.style.backgroundColor='black'
w.document.body.style.display='flex'
w.document.body.style.flexDirection='column'
w.document.body.style.margin='auto'
w.document.querySelector('.transition').style.width='fit-content'
w.document.querySelector('.transition').style.margin='auto'
setTimeout(() => {
    // alert(`Warning: closing new window!`);
    // w.close();
}, 3000);

    }

    function ShareIMG(){
        let galleryI = document.querySelector('.swiper-slide-active')
      let fullIMG =galleryI.querySelector('img')
      let imgSRC = fullIMG.getAttribute('src')
      let telegram = document.querySelector('.shareBox1 .tele')
      let whatsapp = document.querySelector('.shareBox1 .whatsapp')
      let insta = document.querySelector('.shareBox1 .insta')
      telegram.setAttribute('href',`http://a112tl.undertest.ir/${imgSRC}`)
      whatsapp.setAttribute('href',`http://a112tl.undertest.ir/${imgSRC}`)
      insta.setAttribute('href',`http://a112tl.undertest.ir/${imgSRC}`)
    }
    let fUllBtn = document.querySelector('.fullscreen')
    fUllBtn.addEventListener('click',()=>{
    fullscreen()
    })
    let zoomBtn = document.querySelector('.zoomIn')
    zoomBtn.addEventListener('click',()=>{ 
      zoom()
    })
    let zoomOutBtn = document.querySelector('.zoomout')
    zoomOutBtn.addEventListener('click',()=>{ 
      zoomout()
    })
 
      // share
      let shareBtn = document.querySelector('.share')
      shareBtn.addEventListener('click',()=>{
        ShareIMG()
           document.querySelector('.shareBox1').classList.toggle('show')
      })
     
        },
        slideChange(e){
        // console.log(e.slides[e.realIndex]);



  // share
  let shareBtn = document.querySelector('.share')
  shareBtn.addEventListener('click',()=>{
    ShareIMG()
  })
 
        }
    }
  });

  let allImages = document.querySelectorAll("img");
  allImages.forEach((value)=>{
    console.log(value);
      value.oncontextmenu = (e)=>{
        console.log('n');
          e.preventDefault();
      }
  })
  