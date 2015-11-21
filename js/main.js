//==================================================================
//www.solvingbooks.com / FrontEnd-Jorge Monroy / BackEnd-Jose Osorio
//==================================================================
// NAVIGATION HEADER
$(document).ready(function() {
  var menuToggle = $('#js-mobile-menu').unbind();
  $('#js-navigation-menu').removeClass("show");

  menuToggle.on('click', function(e) {
    e.preventDefault();
    $('#js-navigation-menu').slideToggle(function(){
      if($('#js-navigation-menu').is(':hidden')) {
        $('#js-navigation-menu').removeAttr('style');
      }
    });
  });
});
// HOME TRANSITION IMAGES
$(document).ready(function(){
  var ancho = $(window).width();
  if (ancho >767) {
    var image = $('.image_slider'), i =1;
    function refresh () {
      i++;
      if (i > 6) i = 1;
      image.fadeOut(1000, function () {
        image.css("background", "url('public/images/home/desktop/bg" + i + ".jpg') no-repeat center");
        image.css("background-size", "cover");
        image.css("height", "91.03vh");
        image.css("max-height", "670px");
        image.css("position", "relative");
        image.fadeIn(1500);
      });
    }
    setInterval(refresh, 7500)
  }
}); 





