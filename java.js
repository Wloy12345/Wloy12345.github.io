var waypoint1 = $('#video1').waypoint(function(direction) {
    if (direction === 'down') {
        $("#video1").animate({
            width: '100%'
        }, "slow");
    } else {
        $("#video1").animate({
        width: '0%'
    }, "slow");
    } 
  }, {
    offset: '50%'
  });

  var waypoint2 = $('#video2').waypoint(function(direction) {
    if (direction === 'down') {
        $("#video2").animate({
            opacity: '100'
        }, 5000);
    } else {
        $("#video2").animate({
        opacity: '0'
    }, "slow");
    } 
  }, {
    offset: '50%'
  });

  var waypoint3 = $('#video3').waypoint(function(direction) {
    if (direction === 'down') {
        $("#video3").animate({
            width: '100%',
            height: '50vh'
        }, 1000);
    } else {
        $("#video3").stop();
        $("#video3").animate({
        height: '0vh'
    }, "slow");
    } 
  }, {
    offset: '50%'
  });

    $("button").click(function() {
    $('html,body').animate({
        scrollTop: $(".second").offset().top},
        'slow');
});

var bodyTextCollection = document.getElementsByClassName("answer");

function hoverGrey() {
  this.style.backgroundColor = "grey";
  this.style.borderRadius = "20px";
  this.style.borderStyle = "solid";
  this.style.padding = "5px";
}
function hoverBlack() {
  this.style.backgroundColor = "white";
  this.style.borderStyle = "none";
}

for (var i = 0; i < bodyTextCollection.length; i++) {
  bodyTextCollection[i].addEventListener("mouseenter", hoverGrey);
  bodyTextCollection[i].addEventListener("mouseout", hoverBlack);
}

  