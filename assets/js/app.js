$(document).ready(function() {
	if ($(document).scrollTop() > 20) {
		$('#myBtn').show();
	}

	$('#myBtn').click(function(){
		$('body, html').animate({
			scrollTop:0
		}, 'slow');
	});

	$(this).scroll(function() {
		if ($(document).scrollTop() > 20) {
			$('#myBtn').show();
		}
		else {
			$('#myBtn').hide();
		}
	});

	$('a[href^="#"]').click(function(){
		var the_id = $(this).attr("href");
		if (the_id === '#') {
			return;
		}
		$('html, body').animate({
			scrollTop:$(the_id).offset().top-50
		}, 'slow');
		return false;
	});
});
