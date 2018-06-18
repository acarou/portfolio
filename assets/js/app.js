$(document).ready(function() {
	if ($(document).scrollTop() > 20) {
			$('#myBtn').show();
	}

	$('#myBtn').click(function(){
		$(document).scrollTop(0);
	});

	$(this).scroll(function() {
		if ($(document).scrollTop() > 20) {
			$('#myBtn').show();
		}
		else {
			$('#myBtn').hide();
		}
	});
});