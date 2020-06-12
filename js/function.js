$(document).ready(function () {
	// wow animation
	wow = new WOW(
		{
			animateClass: 'animated',
			offset: 400
		}
	);
	wow.init();

	//Smooth scrolling with links
	$('a[href*=\\#]').click(function (event) {
		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 500);
		event.preventDefault();
	});
});