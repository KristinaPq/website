$(function(){

  $('.slider__inner, .news__slider-inner').slick({
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    infinite: false
  });

  $('select').styler();

  $('.header__btn-menu').on('click', function(){
    $('.menu ul').slideToggle();
  });

});

function validate(evt) {
  var theEvent = evt || window.event;
  // Handle paste
  if (theEvent.type === 'paste') {
      key = event.clipboardData.getData('text/plain');
  } else {
  // Handle key press
      var key = theEvent.keyCode || theEvent.which;
      key = String.fromCharCode(key);
  }
  var regex = /[0-9]|\./;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}
let jin = document.getElementById("in");
let jout = document.getElementById("out");
let btn = document.getElementById("btn");

jin.addEventListener('keydown', function(e){
  if( e.key.match(/[0-9]/) ) return e.preventDefault();
}); // Будет перехватывать все числа при ручном вводе. 
// Тажке нужна, чтобы replace не сбрасывал каретку, срабатывая каждый раз.

jin.addEventListener('input', function(e){
  // На случай, если умудрились ввести через копипаст или авто-дополнение.
  jin.value = jin.value.replace(/[0-9]/g, "");
});

btn.addEventListener('click', function(){
  let val = jin.value;
  if ( val ) {
    jout.textContent = `Привет ${val}, хорошего дня!`;
  } else {
    alert("введите имя");
  }
});