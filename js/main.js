//==================================================================
//www.solvingbooks.com / FrontEnd-Jorge Monroy / BackEnd-Jose Osorio
//==================================================================
//======== NAVIGATION HEADER =======================================
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
//======== HOME TRANSITION IMAGES ==================================
$(document).ready(function(){
  var ancho = $(window).width();
  if (ancho >670) {
    var image = $('.image-slider'), i =1;
    function refresh () {
      i++;
      if (i > 6) i = 1;
      image.fadeOut(1000, function () {
        image.css("background", "url('public/images/home/desktop/bg" + i + ".jpg') no-repeat center");
        image.css("background-size", "cover");
        image.css("height", "90.7vh");
        image.css("max-height", "670px");
        image.css("position", "relative");
        image.fadeIn(1500);
      });
    }
    setInterval(refresh, 7500)
  }
}); 

$(window).resize(function(){
  var ancho = $(window).width();
  if (ancho >670) {
    var image = $('.image-slider'), i =1;

    function refresh () {
      i++;
      if (i > 6) i = 1;
      image.fadeOut(1000, function () {
        image.css("background", "url('public/images/home/desktop/bg" + i + ".jpg') no-repeat center");
        image.css("background-size", "cover");
        image.css("height", "90.7vh");
        image.css("max-height", "670px");
        image.css("position", "relative");
        image.fadeIn(1500);
      });
    }
    setInterval(refresh, 7500)
  }
  else if ( ancho < 670) {
    var image = $('.image-slider'), i =1;
    image.stop();
  }
});
//=========== HEADER MODAL SIGN-IN ===============================
$(function() {
  $("#modal-1").on("change", function() {
    if ($(this).is(":checked")) {
      $("body").addClass("modal-open");
    } else {
      $("body").removeClass("modal-open");
    }
  });
  $(".modal-fade-screen, .modal-close").on("click", function() {
    $(".modal-state:checked").prop("checked", false).change();
  });

  $(".modal-inner").on("click", function(e) {
    e.stopPropagation();
  });
});
//=========== HEADER ON TOP ON SCROLL FIXED ===============================
$(window).scroll(function(){
  var body = $("body");
  var top = body.scrollTop(); // Get position of the body
  if (top > 63 && top < 606) {
    $(".home-header").fadeOut("slow");
    $(".ghost-header").show();
  }
  if (top > 605) {
    $(".home-header").fadeIn("slow");
    $(".home-header").addClass("header-fixed");
  }
  if (top < 64) {
    $(".home-header").fadeIn("slow");
    $(".home-header").removeClass("header-fixed");
  }
});





