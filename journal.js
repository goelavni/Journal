$("body").mousemove(function(event){
    $(".mousetracker").css({"transform" : "translate(" + (event.pageX+2) + "px," + (event.pageY+2) + "px)"})
    $('.eye').css('transform', 'translate(' + event.pageX/100 + 'px, ' + event.pageY/100 + 'px)');
    $('.eye1').css('transform', 'translate(' + event.pageX/100 + 'px, ' + event.pageY/100 + 'px)');
        $('.eye2').css('transform', 'translate(' + event.pageX/100 + 'px, ' + event.pageY/100 + 'px)');

    $('.eye3').css('transform', 'translate(' + event.pageX/100 + 'px, ' + event.pageY/100 + 'px)');

    $('.eye4').css('transform', 'translate(' + event.pageX/100 + 'px, ' + event.pageY/100 + 'px)');

    console.log("mouse at: " + event.pageX + "x, " + event.pageY + "y.")
  })

 
  
  