$(".seeMore").css('visibility', 'hidden');
$(".seeMore").css('visibility', 'hidden');
if ($(".journal").length >8 ) {
     $(".seeMore").css('visibility', 'visible');
 }
    $(document).ready(function() {
    $(" .journal").slice(0, 8).show();
  $('.seeMore').on('click', function (e) {
  e.preventDefault();
  $(" .journal:hidden").slice(0,8 ).slideDown();
  if ($(" .journal:hidden").length == 0) {
    $(".seeMore").css('visibility', 'hidden');
    $(".seeMore").css('visibility', 'hidden');
  
  }
  
  });
  })
let mahnames = document.querySelectorAll('.journal')
let colurs = ['#B2D9EA','#FFFFD1',' #F0C5D5','#FFFFFF']
let i = 0
mahnames.forEach(element => {
   console.log(element);
   element.querySelector('.color').style.backgroundColor=colurs[i]
   element.querySelector('.color').setAttribute('data-color',colurs[i])
   element.querySelector('.color').classList.add(`data-${i}`)

   i++
   if(i>colurs.length-1){
       i=0
   }
  
});

function onSource(args) { 
const captcha = document.querySelector("input[name='captcha']").value; 
const captchaid = document.querySelector("input[name='captchaid']").value; 
console.log(captcha);
const stringJson = JSON.stringify(args.source?.rows[0]); 
$bc.setSource('edit.object', { 
   value: stringJson, 
   captcha: captcha, 
   captchaid: captchaid ,

}) 
console.log('sourcd',stringJson);
} 

async function OnProcessedEditObject(args){
var response = args.response;
var json = await response.json();

if( json.errorid == 6){
console.log('با موفقیت ثبت شذ');
         document.querySelector('.main-container').querySelector('span').innerHTML='پیام شما با موفقیت ثبت شد'
         document.querySelector('.main-container').classList.add('SEND')
setTimeout(()=>{
 document.querySelector('.main-container').classList.remove('SEND')
},2000)
$bc.setSource("db.renews", true)
}
else{
console.log(json);
document.querySelector('.main-container').querySelector('span').innerHTML='  کپچا اشتباه وارد شده  '
document.querySelector('.main-container').classList.add('SEND')
setTimeout(()=>{
document.querySelector('.main-container').classList.remove('SEND')
},2000)
}
//  document.querySelector(".loader").remove()
}
function schemareview() {
const wrapper= document.querySelector(".journal_form")
const questions = wrapper.querySelectorAll("[data-bc-question]")
questions.forEach(e => {
e.querySelector("[data-bc-text-input]")?.setAttribute("placeHolder", e.querySelector("[data-bc-question-title]").textContent)
let title = e.querySelector("[data-bc-title-container]")
title.style.display = "none"
})
console.log('rendered');
setTimeout(()=>{
let a =document.querySelectorAll('[data-bc-schema-column] [data-bc-question]')  
let parent = document.querySelector('[data-bc-schema-column]')
let child1 = document.createElement('div')
child1.classList.add('child-1')
let child2 = document.createElement('div')
child2.classList.add('child-2')
let title1 = document.createElement('p')
title1.classList.add('title')
parent.insertBefore(child1, $('[data-bc-schema-column]').children('[data-bc-question]')[0]);
child1.appendChild($('[data-bc-schema-column]').children('[data-bc-question]')[0])
child1.appendChild($('[data-bc-schema-column]').children('[data-bc-question]')[0])
child1.appendChild($('[data-bc-schema-column]').children('[data-bc-question]')[0])
parent.insertBefore(child2, child1);
child2.appendChild($('[data-bc-schema-column]').children('[data-bc-question]')[0])
child2.appendChild($('[data-bc-schema-column]').children('[data-bc-question]')[0])
child2.appendChild($('[data-bc-schema-column]').children('[data-bc-question]')[0])
let bottom = $('[data-bc-schema-column]').children('[data-bc-question]')[0]
parent.insertBefore(bottom, child2);
let top = document.createElement('div')
top.classList.add('cont')
top.appendChild(child1)
top.appendChild(child2)
parent.insertBefore(top, bottom);
let isEmpty=false
let buttons = document.querySelector('.schemaBtn')
let inputs = document.querySelectorAll('.child-1 input[type="text"],.child-2 input[type="text"],.child-3 input[type="text"],.child-4 input[type="text"]')
buttons.addEventListener('click',()=>{
console.log('vkkkk');
inputs.forEach(input=>{
 console.log(input.value);
   if(input.value == ""){
      isEmpty = true
       console.log('فیلد را پرکنید');
   }
 })
if(isEmpty){
 isEmpty = false
 document.querySelector('.main-container').querySelector('span').innerHTML='  فیلدها را پرکنید '
 document.querySelector('.main-container').classList.add('SEND')
setTimeout(()=>{
document.querySelector('.main-container').classList.remove('SEND')
},2000)}})
})


}

    let header1 = document.querySelector('header .right a:nth-child(2)')
    header1.classList.add('active')