$(document).ready(function(){
	var ancho = $(window).width();
	if (ancho >767) {
		var image = $('.bg_estudiantes'), i =1;

		function refresh () {
			i++;
			if (i > 6) i = 1;
			image.fadeOut(1000, function () {
				image.css("background", "url('public/images/home/desktop/bg" + i + ".jpg') no-repeat center");
				image.fadeIn(1500);
			});
		}
		setInterval(refresh, 7500)
	}
});	



$(window).resize(function(){
	var ancho = $(window).width();
	if (ancho >767) {
		var image = $('.bg_estudiantes'), i =1;

		function refresh () {
			i++;
			if (i > 6) i = 1;
			image.fadeOut(1000, function () {
				image.css("background", "url('public/images/home/desktop/bg" + i + ".jpg') no-repeat center");
				image.fadeIn(1500);
			});
		}
		setInterval(refresh, 7500)
	}
	else if ( ancho < 768) {
		var image = $('.bg_estudiantes'), i =1;
		image.stop();
	}
});	
