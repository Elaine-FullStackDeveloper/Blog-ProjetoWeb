function typeWriter(element) {
    const textoArray = element.innerHTML.split('');
    element.innerHTML = ' ';
    textoArray.forEach((letra, index) => {
        setTimeout(() => element.innerHTML += letra, 80 * index);
    });
}

const frase = document.querySelector('h4');
typeWriter(frase);

$(document).ready(function(){
    $('.button-left').click(function(){
        $('.sidebar').toggleClass('fliph');
    });
      
 });

 $('.carousel.carousel-multi-item.v-2 .carousel-item').each(function(){
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
  
    for (var i=0;i<4;i++) {
      next=next.next();
      if (!next.length) {
        next=$(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));
    }
  });