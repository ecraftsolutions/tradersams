$(document).ready(function () {
	// wow animation
	wow = new WOW(
		{
			animateClass: 'animate__animated'
		}
	);
	wow.init();

	//Smooth scrolling with links
	$('.header ul a').click(function(){
		$('html, body').animate({
        	scrollTop: $($.attr(this, 'href')).offset().top-114
    	}, 500);
	});
	

	// $('a[href*=\\#]').click(function (event) {
	// 	$('html, body').animate({
	// 		scrollTop: $($.attr(this, 'href')).offset().top
	// 	}, 500);
	// 	event.preventDefault();
	// });
});

