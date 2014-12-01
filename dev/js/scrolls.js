function scrollToTop() {
	var offset = 220;
	var duration = 'slow';
	$(window).scroll(function() {
		if ($(this).scrollTop() > offset) {
			$('.back-to-top').addClass('visible');
		} else {
			$('.back-to-top').removeClass('visible');
		}
	});
	
	$('.back-to-top').click(function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop: 0}, duration);
		return false;
	})
}