var iframe = document.getElementById( 'myiFrame' );
	var content = document.getElementById("myiFrame").innerHTML;
	var frameDoc = iframe.document;
    console.log(frameDoc);
    let mahnames = document.querySelectorAll('#news_slider1 .splide__slide')
 let colurs = ['#B2D9EA','#FFFFD1',' #F0C5D5','#FFFFFF']
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
 var news_slider1 = new Splide( '#news_slider1', {
  // type   : 'loop',
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

  news_slider1.mount();