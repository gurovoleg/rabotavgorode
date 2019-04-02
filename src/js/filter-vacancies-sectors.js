$(document).ready(function(){
	var tablet = 768
	
	// Очистить форму
	$('#filter-vacancies-sectors-clear').on('click',function(e){
		e.preventDefault();
		$("#filter-vacancies-sectors")[0].reset();
	});

	// Показать меню Отрасли
	$('.filter-vacancies-sectors-open').on('click', function(e){
		console.log('test');
		e.preventDefault();

		$('html, body').scrollTop(0);
		$('body').addClass('overflow-hidden');
		$('.bg-container').addClass('bg-container--show');
		setTimeout(function(){
			$('#column-container-selectors').addClass('column-container--slideIn');	
		}, 100);
	
	});

	// Убрать меню Отрасли
	$('.filter-vacancies-sectors-close').on('click', function(){
	
		$('#column-container-selectors').removeClass('column-container--slideIn');
		
		if ( $(window).width() < 768 ) {
			setTimeout(function(){
				$('.bg-container').removeClass('bg-container--show');	
			}, 400);
		} else $('.bg-container').removeClass('bg-container--show');	

		if ( !$('#filter-vacancies').hasClass('filter-vacancies--d-block') ) {
			$('body').removeClass('overflow-hidden');		
		}
	
	});

	
	// $(document).on('click', function(e){
	// 	if ( $('.bg-container').hasClass('bg-container--show') ) {

	// 		if ( !$('.filter-main-container').is(e.target) && $('.filter-main-container').has(e.target).length == 0  && !$('.filter-vacancies-sectors-open').is(e.target) && $('.filter-vacancies-sectors-open').has(e.target).length == 0 ) {
	// 			$('.bg-container').removeClass('bg-container--show');
				
	// 			if ( !$('#filter-vacancies').hasClass('filter-vacancies--d-block') ) {
	// 				$('body').removeClass('overflow-hidden');		
	// 			}
				
	// 		}
	// 	}
		
	// });	

	// Показать меню Специализации (мобильный экран)
	$('.sectors-list__item').on('click', function(){
		if ( $(window).width() < tablet ) {
			$('#column-container-selectors').addClass('column-container--slideOut');
			$('#column-container-profiles').addClass('column-container--slideIn');	
		}
		
	});	

	// Показать меню Специализации (мобильный экран)
	$('#header__arrow-back').on('click', function(){
		if ( $(window).width() < tablet ) {
			$('#column-container-selectors').removeClass('column-container--slideOut');
			$('#column-container-profiles').removeClass('column-container--slideIn');
		}
	});




});