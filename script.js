var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

var slides = document.querySelectorAll('.swiper');
var sliderSlides = document.querySelector('.slider')
var buttonShow = document.querySelector('.button--hidden');

buttonShow.addEventListener('click', function(event){    
  if (event.target.classList.contains('button--visible')){
    event.target.textContent ='Показать всё';
    event.target.classList.remove('button--visible');
    sliderSlides.classList.remove('slider--show');
}
else {    
    event.target.textContent ='Скрыть всё';
    event.target.classList.add('button--visible');
    sliderSlides.classList.add('slider--show');        
} 
});