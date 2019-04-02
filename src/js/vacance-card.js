$(document).ready( function() {
	var iconFavor = $('.vacance-card .icon-favorite');
	iconFavor.on('click',function(){
		$(this).toggleClass('icon-favorite--blue');
	});
 	
 	/*закрасить иконку флажок на карточке резюме*/
 	var iconFavorResumeCard = $('.resume-card .icon-favorite');
	iconFavorResumeCard.on('click',function(){
		$(this).toggleClass('icon-favorite--employer');
	});
})