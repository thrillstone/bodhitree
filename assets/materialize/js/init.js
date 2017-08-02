(function ($) {
	$(function () {

		$('.button-collapse').sideNav();
		$('.parallax').parallax();
		var options = [
			{
				selector: '#index-banner', offset: 1200, callback: function (el) {
					$("nav").addClass("loaded");
					$(".navbar-fixed").addClass("loaded");
				}
			}
		];
		Materialize.scrollFire(options);

	}); // end of document ready
})(jQuery); // end of jQuery name space