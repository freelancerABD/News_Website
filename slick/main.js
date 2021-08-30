 		// main js

 		$(document).on('ready', function() {
		      $(".regular").slick({
		        dots: true,
		        autoplay: true,
		        autoplaySpeed: 4000,
		        slidesToShow: 5,
		        slidesToScroll: 1
		      });
		    });

		    var btn = $('#button');

			$(window).scroll(function() {
			  if ($(window).scrollTop() > 300) {
			    btn.addClass('show');
			  } else {
			    btn.removeClass('show');
			  }
			});

			btn.on('click', function(e) {
			  e.preventDefault();
			  $('html, body').animate({scrollTop:0}, '300');
			});