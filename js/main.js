//==================================================================
//www.solvingbooks.com / FrontEnd-Jorge Monroy / BackEnd-Jose Osorio
//==================================================================
//======== NAVIGATION HEADER - REFILLS =======================================
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
//=========== HEADER MODAL SIGN-IN - REFILLS ===============================
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
// $(window).scroll(function(){
//   var body = $("body");
//   var top = body.scrollTop(); // Get position of the body
//   if (top > 63 && top < 606) {
//     $(".navigation").fadeOut("slow");
//   }
//   if (top > 605) {
//     $(".navigation").fadeIn("slow");
//     $(".navigation").addClass("header-fixed");
//   }
//   if (top < 64) {
//     $(".navigation").fadeIn("slow");
//     $(".navigation").removeClass("header-fixed");
//   }
// });
//=========== ENGINEERING PAGE - RESPONSIVE TITLE IN ENGINEERING INFO SECTION ===============================
$(window).resize(function(){
  var ancho = $(window).width();
  if (ancho >760) {
    $('.engineering-icon').attr("src", "public/images/ingenierias/electronica/ingenieria_icono_Electronica.svg");
  }
  else if (ancho < 761) {
    $('.engineering-icon').attr("src", "public/images/ingenierias/electronica/ingenieria_titulo_electronica.svg");
  }
});

$(document).ready(function() {
  var ancho = $(window).width();
  if (ancho < 761) {
    $('.engineering-icon').attr("src", "public/images/ingenierias/electronica/ingenieria_titulo_electronica.svg");
  }
});
//=========== COURSE ACCORDION CHAPTERS - REFILLS ===============================
$('.js-accordion-trigger').bind('click', function(e){
  jQuery(this).parent().find('.submenu').slideToggle('meddium');  // apply the toggle to the ul
  jQuery(this).parent().toggleClass('is-expanded');
  e.preventDefault();
});
//=========== VIDEO PAGE - TABS ACCORDION VIDEOS AND EXCERCISES ===============================
jQuery(document).ready(function() {
    jQuery('.tabs .tab-links a').on('click', function(e)  {
        var currentAttrValue = jQuery(this).attr('href');
 
        // Show/Hide Tabs
        jQuery('.tabs ' + currentAttrValue).show().siblings().hide();
 
        // Change/remove current tab to active
        jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
 
        e.preventDefault();
    });
});
//=========== VIDEO PAGE - TABS TOOLS (BOURBON) ================================================
$(document).ready(function () {
  $('.accordion-tabs-minimal').each(function(index) {
    $(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
  });
  $('.accordion-tabs-minimal').on('click', 'li > a.tab-link', function(event) {
    if (!$(this).hasClass('is-active')) {
      event.preventDefault();
      var accordionTabs = $(this).closest('.accordion-tabs-minimal');
      accordionTabs.find('.is-open').removeClass('is-open').hide();

      $(this).next().toggleClass('is-open').toggle();
      accordionTabs.find('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
    } else {
      event.preventDefault();
    }
  });
});
//===========OCULTAR VIDEO DESPUES DE TERMINADO ==========================================
$(document).ready(function(){
  $('video').on('ended',function(){
      $('.mejs-video').fadeOut();
      $('.nextVideo').fadeIn();
  });

  $(".verNuevamente").click(function(){
    $('.nextVideo').fadeOut();
    $('.mejs-video').fadeIn();
  });

  $(".continuar").click(function(){
    $('.nextVideo').fadeOut();
    $('.mejs-video').fadeIn();
  });
  jQuery('.tab .nextVideo .segundoic .continuar').on('click', function(e)  {
        var currentAttrValue = jQuery(this).attr('href');
 
        // Show/Hide Tabs
        jQuery('.tabs ' + currentAttrValue).show().siblings().hide();
 
        // Change/remove current tab to active
        jQuery(currentAttrValue).addClass('active').siblings().removeClass('active');
 
        e.preventDefault();
    });
});
//================ FADE IN AND FADE OUT COMMENT OVER COMMENT ON VIDEO PAGE ====================
$(document).ready(function(){
  $(".open-textarea").click(function(){
    $('.response-over-response').fadeIn();
  });
  $(".close-textarea").click(function(){
    $('.response-over-response').fadeOut();
  });
});
//================ FADE IN AND FADE OUT MODAL SIGN-IN FORGET PASSWORD ====================
$(document).ready(function(){
  $(".forget-password").click(function(){
    $('.form1').fadeOut();
    $('.form3').fadeOut();
    $('.form4').fadeOut();
    $('.form5').fadeOut();
    $('.form2').fadeIn();
  });
  $(".next-forget-password").click(function(){
    $('.form2').fadeOut();
    $('.form1').fadeOut();
    $('.form4').fadeOut();
    $('.form5').fadeOut();
    $('.form3').fadeIn("slow");
  });
  $(".next-forget-password2").click(function(){
    $('.form1').fadeOut();
    $('.form2').fadeOut();
    $('.form3').fadeOut();
    $('.form5').fadeOut();
    $('.form4').fadeIn("slow");
  });
  $(".next-forget-password3").click(function(){
    $('.form1').fadeOut();
    $('.form2').fadeOut();
    $('.form3').fadeOut();
    $('.form4').fadeOut();
    $('.form5').fadeIn("slow");
  });
  $(".modal-close").click(function(){
    $('.form2').fadeOut();
    $('.form3').fadeOut();
    $('.form4').fadeOut();
    $('.form5').fadeOut();
    $('.form1').fadeIn();
  });
  $(".cancel-forget-password").click(function(){
    $('.form2').fadeOut();
    $('.form3').fadeOut();
    $('.form4').fadeOut();
    $('.form5').fadeOut();
    $('.form1').fadeIn();
  });
});





