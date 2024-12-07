$(".seeMore").css('visibility', 'hidden');
$(".seeMore").css('visibility', 'hidden');
if ($(".conversationList .conver").length >9 ) {
     $(".seeMore").css('visibility', 'visible');
 }
$(document).ready(function() {
  $(".conversationList .conver").slice(0, 9).show();
$('.seeMore').on('click', function (e) {
e.preventDefault();
$(".conversationList .conver:hidden").slice(0,9 ).slideDown();
if ($(".conversationList .conver:hidden").length == 0) {
  $(".seeMore").css('visibility', 'hidden');
  $(".seeMore").css('visibility', 'hidden');

}

});
})
let header1 = document.querySelector('header .left a:nth-child(3)')
header1.classList.add('active')