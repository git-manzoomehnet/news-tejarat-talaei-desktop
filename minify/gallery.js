let gallerys = document.querySelectorAll('.sliderProduct_Galery .swiper-slide')
let h =0
let Is = true
gallerys.forEach(g=>{
    g.setAttribute(`data`,h)
    h++
    let clickedIMG =''
    g.addEventListener('click',(e)=>{
        document.querySelector('.cursor').style.display='flex'
        const $bigCircle = document.querySelector('.cursor__circle--big');
        const $smallCircle = document.querySelector('.cursor__circle--small');
        const $smallPlus = document.querySelector('.cursor__plus');
        const $smallPlusArea = document.querySelector('.cursor__plus--area')
        // Listeners
        document.body.addEventListener('mousemove', onMouseMove);
        // Move the cursor
        function onMouseMove(e) {
        gsap.to($bigCircle, .4, {
          x: e.clientX,
          y: e.clientY
        })
        gsap.to($smallCircle, .1, {
          x: e.clientX,
          y: e.clientY
        })
        gsap.to($smallPlus, .1, {
          x: e.clientX,
          y: e.clientY
        })
        }

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
            let thums = document.querySelectorAll('.Thumb')
            for(let y =0 ; y< thums.length; y++){
                thums[y].classList.remove('active')
            }
            thums[newIndex].classList.add('active')
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

  prevBtn.addEventListener('mouseenter',()=>{
    document.querySelector('.cursor').classList.add('leftt')
  })
  prevBtn.addEventListener('mouseleave',()=>{
    document.querySelector('.cursor').classList.remove('leftt')
  })
  
  nextBtn.addEventListener('mouseenter',()=>{
    document.querySelector('.cursor').classList.add('rightt')
  })
  nextBtn.addEventListener('mouseleave',()=>{
    document.querySelector('.cursor').classList.remove('rightt')
  })
        if(Is){
        Others.forEach(o=>{
            let num = 0
            let thumb = document.createElement('div')
            thumb.classList.add('Thumb')
            let parent = document.querySelector('.ThumbIMGs')
            parent.appendChild(thumb)
            let img = document.createElement('img')
            thumb.appendChild(img)
            let ov = document.createElement('div')
            ov.classList.add('ov')
            thumb.appendChild(ov)
            let scr = o.querySelector('img').getAttribute('src')
            img.setAttribute('src',scr)
          
               let thumbss = document.querySelectorAll('.Thumb')
               for(let y =0 ; y< thumbss.length; y++){
                thumbss[y].setAttribute('num',num)
                num++
                  if(thumbss[y].getAttribute('num') == Number(e.currentTarget.getAttribute('data')) ){
                    thumbss[y].classList.add('active')
                console.log('fi',Number(e.currentTarget.getAttribute('data')));
               }
            }               
               if(num>= thumbss.length){
                   return
               }                  
         }) }
         Is = false
         let thumbss = document.querySelectorAll('.Thumb')
         thumbss.forEach(t=>{
            console.log(Number(e.currentTarget.getAttribute('data')))
            if( Number(e.currentTarget.getAttribute('data'))==Number(t.getAttribute('num'))  ){
                for(let y =0 ; y< thumbss.length; y++){
                    thumbss[y].classList.remove('active')
                }
                t.classList.add('active')
                console.log(Number(e.currentTarget.getAttribute('data')));
               }
           
            let current  = document.querySelector('.current')
            let total = document.querySelector('.total')
            total.innerHTML = gallerys.length
            t.addEventListener('click',(e)=>{
                let t2s = document.querySelectorAll('.Thumb')
                t2s.forEach(h=>{
                    h.classList.remove('active')
                })
                let cur = Number(e.currentTarget.getAttribute('num'))
                newIndex =cur
                current.innerHTML = cur+1
                e.currentTarget.classList.add('active')
                let src = e.currentTarget.querySelector('img').getAttribute('src')
                let mainIMG = document.querySelector('img.Main')
                mainIMG.classList.remove('active')
                setTimeout(()=>{
                    mainIMG.setAttribute('src',src)
                    mainIMG.classList.add('active')
                },200)
               
            })

         })



        let close = document.querySelector('.close')
        close.addEventListener('click',()=>{
  
        document.querySelector('.cursor').style.display='none'
            let popup = document.querySelector('.Gallerypopup')
        popup.classList.remove('show')
        })
    })
})
