$(document).ready(function(){

	// Показать
	$('.filter-vacancies-position-open').on('click', function(e){
		e.preventDefault();

		$('body').addClass('overflow-hidden');
		$('.filter-vacancies-position__container').addClass('d-block');
	
	});

	// Убрать
	$('.filter-vacancies-position-close').on('click', function(){
	
		$('.filter-vacancies-position__container').removeClass('d-block');
		$('body').removeClass('overflow-hidden');
	
	});

	$(window).resize(function(){

		if ( $(window).outerWidth() >= 992  && $('.filter-vacancies-position__container').hasClass('d-block') )  {
			$('.filter-vacancies-position__container').removeClass('d-block');
		}

	});


})

