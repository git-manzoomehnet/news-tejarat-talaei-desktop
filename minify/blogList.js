let s = document.querySelectorAll('.testup')
  
      
$(".seeMore").css('visibility', 'hidden');
$(".seeMore").css('visibility', 'hidden');
if ($(".blog-lists .blog").length >9 ) {
$(".seeMore").css('visibility', 'visible');
}
$(document).ready(function() {
$(".blog-lists .blog").slice(0, 9).show();
$('.seeMore').on('click', function (e) {
e.preventDefault();
$(".blog-lists .blog:hidden").slice(0, ).slideDown();
if ($(".blog-lists .blog:hidden").length == 0) {
$(".seeMore").css('visibility', 'hidden');
$(".seeMore").css('visibility', 'hidden');

}

});
s.forEach(a=>{
gsap.to(a.querySelector('.blog-Title'),{

y:0,
opacity:1,
ease:'none',
duration:1,
scrollTrigger:{
trigger:a,
start:'top 70%',
end:'bottom bottom',

}
})
gsap.to(a.querySelector('.blogd'),{

ease:'none',
duration:1,
y:0,
opacity:1, 
scrollTrigger:{
trigger:a,
start:'top 70%',
end:'bottom bottom',

}
})
gsap.to(a.querySelector('.blogt'),{

y:0,
opacity:1,
ease:'none',
duration:1,
scrollTrigger:{
trigger:a,
start:'top 70%',
end:'bottom bottom',

}
})
})
})
let header1 = document.querySelector('header .left a:nth-child(4)')
header1.classList.add('active')