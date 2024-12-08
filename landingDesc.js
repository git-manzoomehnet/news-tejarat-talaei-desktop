let SwiperF = new Swiper('.swiper-gallery',{

    centeredSlides:true,
    slidesPerView:2.5,
    watchOverflow: true,
    watchSlidesProgress: true,
    updateOnWindowResize: true,
    loop: true,
    loopedSlides: 3,
    spaceBetween: 30,
    grabCursor: true,
    breakpoints: {
      700:{
        slidesPerView: 1.8,
      },
      1000: {
          slidesPerView: 2.5,
     
      },
      1200: {
          slidesPerView:3,
      },
     
  },
    on:{
        init(e){
            let SlidesLength = e.slides.length
            let activeIndex = e.realIndex
            let leftH = document.querySelector('.leftH .num')
            let rightH = document.querySelector('.rightH .num')
            leftH.innerHTML = activeIndex+1
            rightH.innerHTML = ''
            if(activeIndex<=0){
                activeIndex= ''
            }
            console.log(activeIndex);
            let galleryItems = document.querySelectorAll('.Galerrys .sl')
           for(let i = 0 ; i< SlidesLength; i++){
            e.slides[i].setAttribute('data',i)
            galleryItems[i].querySelector('span').innerHTML = i+1
           }
        },
        slideChange(e){
            let SlidesLength = e.slides.length
            let activeIndex = e.realIndex
            let leftH = document.querySelector('.leftH .num')
            let rightH = document.querySelector('.rightH .num')
            leftH.innerHTML = activeIndex+1
            rightH.innerHTML = activeIndex-1
       
            if(activeIndex<=0){
                activeIndex= ''
                   rightH.innerHTML = ''
            }
        }
    },

})
let gallerys = document.querySelectorAll('.sl')
let h =0
let Is = true
let button  = document.querySelectorAll('.Btn-Gallery .bt')
let popupF = document.querySelector('.PopUPF-container')
let sh = document.querySelector('.shareBox1 ')
let shB = document.querySelector('.Gallerypopup .share')
let extraB = document.querySelectorAll('.btn2')
button.forEach(b=>{
    b.addEventListener('click',()=>{
    console.log('click');
    popupF.classList.add('show')
})
})

shB.addEventListener('click',()=>{
    console.log('click');
    sh.classList.toggle('show')
})
gallerys.forEach(g=>{
    g.setAttribute(`data`,h)
    h++
    let clickedIMG =''
    extraB.forEach(b=>{
    b.addEventListener('click',(e)=>{
  
        // Listeners
        let current  = document.querySelector('.current')
        let cur = Number(e.currentTarget.parentElement.parentElement.getAttribute('data'))
         clickedIMG =Number(e.currentTarget.parentElement.parentElement.getAttribute('data'))
         current.innerHTML = cur+1
         console.log('clicked',clickedIMG);
        let popup = document.querySelector('.Gallerypopup')
        popup.classList.add('show')
        let MimgSCR = e.currentTarget.parentElement.parentElement.querySelector('img').getAttribute('src')
      
        console.log(MimgSCR);
        let mainIMG = document.querySelector('img.Main')
        mainIMG.setAttribute('src',MimgSCR)
        mainIMG.classList.add('active')
        let Others = []
        let clickActive=[]
        for(let i = 0 ; i< gallerys.length; i++){
         if(gallerys[i].getAttribute('data') != clickedIMG ){
            clickActive = gallerys[i]
         }       
         Others.push(gallerys[i])
        }
        let previewIMG = document.querySelector(' img.Main')
        let newIndex = clickedIMG 
        function preview(){
            let i = clickedIMG
            let selectedIMGurl = gallerys[newIndex].querySelector('img') //get user clicked img url
            console.log('sel',gallerys[i],i);
            console.log('indec',newIndex);
            previewIMG.classList.remove('active')
            setTimeout(()=>{
                previewIMG.setAttribute('src',selectedIMGurl.getAttribute('src'))
                previewIMG.classList.add('active')
            },200)
   
            let current  = document.querySelector('.current')
            current.innerHTML =newIndex+1 
 
            }
      // previos next btn
      let nextBtn = document.querySelector('.Gnext')
      let prevBtn =document.querySelector('.Gprev')
      nextBtn.onclick=()=>{
      newIndex++
      console.log('glen',gallerys.length);
      console.log('in',newIndex);
      if(newIndex == gallerys.length){

      newIndex = 0
      preview()
      }
      else{
      preview() //call aboce function to update image
      }
      }
      prevBtn.onclick=()=>{
        console.log('in',newIndex);
      newIndex--
      if(newIndex < 0){
        newIndex = gallerys.length-1
        preview()
      }
      else{
      preview() //call aboce function to update image
      }
      }

   // zoom
   // zoom
   zoomMax =1.7;
   currZoom = 1;
   zoomMin =0.5;
   function zoom(){
    console.log('zoomin');
    if (currZoom<zoomMax) {
      currZoom+=0.1
      document.querySelector('img.Main').style.scale = currZoom
  }
    }
    function zoomout(){
    console.log('zoomout');
    if (currZoom>zoomMin) {
      currZoom-=0.1;
      document.querySelector('img.Main').style.scale  = currZoom
  }}
    function downloadIMG(){
    let fullIMG = document.querySelector('img.Main')
    let imgSRC = fullIMG.getAttribute('src')
    document.querySelector('.download a').setAttribute('href',`http://a112tl.undertest.ir${imgSRC}`)
    }
    let zoomBtn = document.querySelector('.zoomIn')
    zoomBtn.addEventListener('click',()=>{ 
      zoom()
    })
    let zoomOutBtn = document.querySelector('.zoomout')
    zoomOutBtn.addEventListener('click',()=>{ 
      zoomout()
    })
        // download
        let downBtn = document.querySelector('.download')
    downBtn.addEventListener('click',()=>{
    downloadIMG()
    })
        if(Is){
        Others.forEach(o=>{
            let num = 0               
         }) }
         Is = false
         let total = document.querySelector('.total')
        total.innerHTML = gallerys.length
        let close = document.querySelector('.Gallerypopup .fullscreen')
        close.addEventListener('click',()=>{
            let popup1 = document.querySelector('.PopUPF-container')
            popup1.classList.add('show')
            setTimeout(()=>{
                let popup2 = document.querySelector('.Gallerypopup')
                popup2.classList.remove('show')
            },1000)
        
    
        })
})
})
    g.addEventListener('click',(e)=>{
     
        // Listeners
        let current  = document.querySelector('.current')
        let cur = Number(e.currentTarget.getAttribute('data'))
         clickedIMG =Number(e.currentTarget.getAttribute('data'))
         current.innerHTML = cur+1
         console.log('clicked',clickedIMG);
        let popup = document.querySelector('.Gallerypopup')
        popup.classList.add('show')
        let MimgSCR = e.currentTarget.querySelector('img').getAttribute('src')
      
        console.log(MimgSCR);
        let mainIMG = document.querySelector('img.Main')
        mainIMG.setAttribute('src',MimgSCR)
        mainIMG.classList.add('active')
        let Others = []
        let clickActive=[]
        for(let i = 0 ; i< gallerys.length; i++){
         if(gallerys[i].getAttribute('data') != clickedIMG ){
            clickActive = gallerys[i]
         }       
         Others.push(gallerys[i])
        }
        let previewIMG = document.querySelector(' img.Main')
        let newIndex = clickedIMG 
        function preview(){
            let i = clickedIMG
            let selectedIMGurl = gallerys[newIndex].querySelector('img') //get user clicked img url
            console.log('sel',gallerys[i],i);
            console.log('indec',newIndex);
            previewIMG.classList.remove('active')
            setTimeout(()=>{
                previewIMG.setAttribute('src',selectedIMGurl.getAttribute('src'))
                previewIMG.classList.add('active')
            },200)
   
            let current  = document.querySelector('.current')
            current.innerHTML =newIndex+1 
 
            }
      // previos next btn
      let nextBtn = document.querySelector('.Gnext')
      let prevBtn =document.querySelector('.Gprev')
      nextBtn.onclick=()=>{
      newIndex++
      console.log('glen',gallerys.length);
      console.log('in',newIndex);
      if(newIndex == gallerys.length){

      newIndex = 0
      preview()
      }
      else{
      preview() //call aboce function to update image
      }
      }
      prevBtn.onclick=()=>{
        console.log('in',newIndex);
      newIndex--
      if(newIndex < 0){
        newIndex = gallerys.length-1
        preview()
      }
      else{
      preview() //call aboce function to update image
      }
      }

   // zoom
   zoomMax =1.7;
   currZoom = 1;
   zoomMin =0.5;
   function zoom(){
    console.log('zoomin');
    if (currZoom<zoomMax) {
      currZoom+=0.1
      document.querySelector('img.Main').style.scale = currZoom
  }
    }
    function zoomout(){
    console.log('zoomout');
    if (currZoom>zoomMin) {
      currZoom-=0.1;
      document.querySelector('img.Main').style.scale  = currZoom
  }

      // if(document.querySelector('img.Main').style.width < document.querySelector('img.Main').naturalWidth+'px'){
      //   document.querySelector('img.Main').style.width = document.querySelector('img.Main').naturalWidth+'px' 
      //   document.querySelector('img.Main').style.height = document.querySelector('img.Main').naturalHeight+'px' 
      // }
    }
 
    function downloadIMG(){
    let fullIMG = document.querySelector('img.Main')
    let imgSRC = fullIMG.getAttribute('src')
    document.querySelector('.download a').setAttribute('href',`http://a112tl.undertest.ir${imgSRC}`)
    }
    let zoomBtn = document.querySelector('.zoomIn')
    zoomBtn.addEventListener('click',()=>{ 
      zoom()
    })
    let zoomOutBtn = document.querySelector('.zoomout')
    zoomOutBtn.addEventListener('click',()=>{ 
      zoomout()
    })
        // download
        let downBtn = document.querySelector('.download')
    downBtn.addEventListener('click',()=>{
    downloadIMG()
    })
        if(Is){
        Others.forEach(o=>{
            let num = 0               
         }) }
         Is = false
         let total = document.querySelector('.total')
        total.innerHTML = gallerys.length
        let close = document.querySelector('.Gallerypopup .fullscreen')
        close.addEventListener('click',()=>{
            let popup2 = document.querySelector('.Gallerypopup')
        popup2.classList.remove('show')
        let popup1 = document.querySelector('.PopUPF-container')
        popup1.classList.add('show')
        })
    })
})
let close1 = document.querySelector('.PopUPF-container .close')
        close1.addEventListener('click',()=>{
            let popup = document.querySelector('.PopUPF-container')
        popup.classList.remove('show')
        })

 var myElement = document.querySelector('.landingShow .PopUPF-container .Bottom');
new SimpleBar(myElement, { autoHide: true });
 

 
$(document).ready(function () {
  let secs = document.querySelectorAll('.Video')
  let videos = document.querySelectorAll('.Video video')
  console.log(videos);
  videos.forEach(s=>{
  s.setAttribute('data-IS',false)
  })
  videos.forEach(v=>{
  v.addEventListener('click',function (event) {
    let Is = event.currentTarget.getAttribute('data-IS')
    console.log(Is);
    if(Is==='false'){
        $(event.currentTarget.parentElement).toggleClass('toggle');
        
        event.currentTarget.play()
        event.currentTarget.setAttribute('data-IS',true)
    }
    else{
      console.log('umm');
        $(event.currentTarget.parentElement).toggleClass('toggle');
        event.currentTarget.pause()
        event.currentTarget.setAttribute('data-IS',false)
    }
  });
  })
  
  })