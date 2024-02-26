var mybutton = document.getElementById("BackTop");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome
}

// when element is in view, add class
$(document).ready(function() {
  $(window).scroll(function() {
    $('.fadeIn').each(function() {
      var elementTop = $(this).offset().top;
      var elementBottom = elementTop + $(this).outerHeight();
      var viewportTop = $(window).scrollTop() + $(window).height() / 2;
      var viewportBottom = viewportTop;

      if (elementTop < viewportBottom && elementBottom > viewportTop) {
        $(this).addClass('inFade');
      }
    });
  });
});

// when element is in view, add class floating in from right
$(document).ready(function() {
  $(window).scroll(function() {
    $('.fadeRight').each(function() {
      var elementTop = $(this).offset().top;
      var elementBottom = elementTop + $(this).outerHeight();
      var viewportTop = $(window).scrollTop() + $(window).height();
      var viewportBottom = viewportTop;

      // Adjust the offset for mobile devices
      if ($(window).width() <= 768) {
        viewportTop -= $(window).height() / 4;
        viewportBottom -= $(window).height() / 4;
      }

      if (elementTop < viewportBottom && elementBottom <= viewportTop) {
        $(this).addClass('inFade');
      }
    });
  });
});

// when element is in view, add class floating in from left
$(document).ready(function() {
  $(window).scroll(function() {
    $('.fadeLeft').each(function() {
      var elementTop = $(this).offset().top;
      var elementBottom = elementTop + $(this).outerHeight();
      var viewportTop = $(window).scrollTop() + $(window).height();
      var viewportBottom = viewportTop;

      // Adjust the offset for mobile devices
      if ($(window).width() <= 768) {
        viewportTop -= $(window).height() / 4;
        viewportBottom -= $(window).height() / 4;
      }

      if (elementTop < viewportBottom && elementBottom <= viewportTop) {
        $(this).addClass('inFade');
      }
    });
  });
});