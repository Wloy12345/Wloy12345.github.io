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

// add id #tomatoSpin to id #addSpin when viewport is less than 768px and remove id #pumpkin from canvas
$(document).ready(function() {
  if ($(window).width() <= 768) {
    $('#pumpkinSpin').removeClass('index-2');
    $('#pumpkinSpin').addClass('index1');
    $('#pumpkin').addClass('d-none');
  }
});

$(document).ready(function() {
  if ($(window).width() <= 768) {
    $('#tomatoSpin').removeClass('index-2');
    $('#tomatoSpin').addClass('index1');
    $('#tomato').addClass('d-none');
  }
});


// replace class of bi-caret-down to bi-caret-down-fill whev hovering over the element
$(document).ready(function() {
  $('.bi-caret-down').hover(function() {
    $(this).removeClass('bi-caret-down');
    $(this).addClass('bi-caret-down-fill');
  }, function() {
    $(this).removeClass('bi-caret-down-fill');
    $(this).addClass('bi-caret-down');
  });
});

// Intersecting Observer API
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('picAnimate');
    } else {
      entry.target.classList.remove('picAnimate');
    }
  });
});

const elements = document.querySelectorAll('.hiddenPic');
elements.forEach(element => {
  observer.observe(element);
});