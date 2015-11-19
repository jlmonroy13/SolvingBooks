$(window).scroll(function(){
	var body = $("body");
	var top = body.scrollTop(); // Get position of the body
	if (top > 650) {
		$(".navbar2").addClass("blancoTransparente navbar-fixed-top");
		$(".navbar2").fadeIn("slow");
	}
	else if (top < 651) {
		$(".navbar2").removeClass("blancoTransparente navbar-fixed-top");
		$(".navbar2").fadeOut("slow");
	}
});


$(document).ready(function(){
	
	$(".responder").click(function(){
		$('.espacioComentario').fadeIn();
	});

	$(".cerrarComent").click(function(){
		$('.espacioComentario').fadeOut();
	});

	/*OCULTAR VIDEO DESPUES DE TERMINADO*/
	$('video').on('ended',function(){
      	$('.mejs-cncMateriales').fadeOut();
      	$('.nextVideo').fadeIn();
    });

    $(".verNuevamente").click(function(){
		$('.nextVideo').fadeOut();
      	$('.mejs-cncMateriales').fadeIn();
	});
	$(".continuar").click(function(){
		$('.nextVideo').fadeOut();
      	$('.mejs-cncMateriales').fadeIn();
	});

	/*RESPONSIVE PAGINA INGENIERIA*/
	var ancho = $(window).width();
	if (ancho < 768) {
		$('.icon').attr("src", "public/images/ingenierias/electronica/ingenieria_titulo_electronica.svg");
	}
});

$(window).resize(function(){
	var ancho = $(window).width();
	if (ancho >767) {
		$('.icon').attr("src", "public/images/ingenierias/electronica/ingenieria_icono_Electronica.svg");
	}
	else if (ancho < 768) {
		$('.icon').attr("src", "public/images/ingenierias/electronica/ingenieria_titulo_electronica.svg");
	}
});	





