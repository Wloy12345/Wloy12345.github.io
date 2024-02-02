var waypoint1 = $('#text1').waypoint(function(direction) {
    if (direction === 'down') {
        $("#text1").animate({
            top: '50%',
            opacity: 100
        }, "slow");
    } else {
        $("#text1").animate({
        top: '0%',
        opacity: 0
    }, "slow");
    } 
  }, {
    offset: '50%'
  });

  var waypoint1 = $('#text2').waypoint(function(direction) {
    if (direction === 'down') {
        $("#text2").animate({
            top: '50%',
            opacity: 100
        }, "slow");
    } else {
        $("#text2").animate({
        top: '0%',
        opacity: 0
    }, "slow");
    } 
  }, {
    offset: '50%'
  });

  var waypoint1 = $('#text3').waypoint(function(direction) {
    if (direction === 'down') {
        $("#text3").animate({
            top: '50%',
            opacity: 100
        }, "slow");
    } else {
        $("#text3").animate({
        top: '0%',
        opacity: 0
    }, "slow");
    } 
  }, {
    offset: '50%'
  });