// Responsive Nav
$(function() {
    menu = $('nav ul');
  
    $('#openup').on('click', function(e) {
      e.preventDefault();
      menu.slideToggle();
    });
  
    $(window).resize(function() {
      var w = $(this).width();
      if (w > 480 && menu.is(':hidden')) {
        menu.removeAttr('style');
      }
    });
  
    $('nav li').on('click', function(e) {
      var w = $(window).width();
      if (w < 480) {
        menu.slideToggle();
      }
    });
    $('.open-menu').height($(window).height());
  });
  
  // Smooth Scrolling
  $('.cf a').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
  
      const hash = this.hash;
  
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          window.location.hash = hash;
        }
      );
    }
  });
  

// FAQ section


let btn = document.querySelectorAll('button.faq-question');
let faqA = document.querySelectorAll('div.faq-answer');
let faqQ = document.querySelectorAll('svg.svg-icon');



 
for (let i = 0; i < btn.length; i++) {
  btn[i].onclick = function() {
    if (faqA[i].classList.contains('closed')) {
      for (let j = 0; j < faqA.length; j++) {
        if (!(faqA[j].classList.contains('closed'))) {
          faqA[j].classList.add('closed');
          faqQ[j].classList.add('svg-closed');
        }
      }
      faqA[i].classList.remove('closed');
      faqQ[i].classList.remove('svg-closed');
    } else {
      faqA[i].classList.add('closed');
      faqQ[i].classList.add('svg-closed');
    }
  }
} 

