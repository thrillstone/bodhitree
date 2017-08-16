(function ($) {
	$(function () {

		$('.button-collapse').sideNav();
		$('.parallax').parallax();

	}); // end of document ready
})(jQuery); // end of jQuery name space

function addBannerClass() {
	$(".banner").addClass("loaded");
}

var last_known_scroll_position = 0;
var ticking = false;

function doSomething(scroll_pos) {
	if (scroll_pos == 0) {
		$("nav").removeClass("loaded");
		$(".navbar-fixed").removeClass("loaded");
	} else if (scroll_pos >= 400) {
		$("nav").addClass("loaded");
		$(".navbar-fixed").addClass("loaded");
	}
}

function addScrollListener() {
	window.addEventListener('scroll', function (e) {
		last_known_scroll_position = window.scrollY;
		if (!ticking) {
			window.requestAnimationFrame(function () {
				doSomething(last_known_scroll_position);
				ticking = false;
			});
		}
		ticking = true;
	});
}