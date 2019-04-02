$(document).ready(function() {
	
	// Секция Навыки и знания со страницы Resume
	var badgeBlock = $('.resume-skills-content__badge'),
	btnShow = $('.resume-skills__btn-show'),
	btnHide = $('.resume-skills__btn-hide');

	btnShow.on('click', function(event) {
		event.preventDefault();
		badgeBlock.slideDown();
		btnShow.hide();
		btnHide.show();

	});

	btnHide.on('click', function(event) {
		event.preventDefault();
		badgeBlock.slideUp();
		btnHide.hide();
		setTimeout(function() {
			btnShow.show();
		}, 400);
		

	});


});
