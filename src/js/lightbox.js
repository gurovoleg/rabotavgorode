$(document).ready(function(){

	$('.lightbox-open, .portfolio-item').on('click', function(e){

		e.preventDefault();
		$('.bg-lightbox').addClass('d-block');
	});

	$('.lightbox__close-button').on('click', function(){
		$('.bg-lightbox').removeClass('d-block');
	});

});