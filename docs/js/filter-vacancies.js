$(document).ready(function(){

	$('#filter-vacancies-clear').on('click',function(e){
		e.preventDefault();
		$("#filter-vacancies")[0].reset();
	});

	function closeFilterVacancies() {
		$('body').removeClass('overflow-hidden');
		$('#filter-vacancies').removeClass('filter-vacancies--d-block');
		$('.filter-vacancies-open').removeClass('icon-filter--active');
	}


	$(document).on('click', function(e){
		
		// Закрыть фильтр по кнопке
		if ( $('#filter-vacancies-submit').is(e.target) ) {
			closeFilterVacancies();
		
		// Проверка открыт ли фильтр
		} else if ( $('#filter-vacancies').hasClass('filter-vacancies--d-block') ) {
			
			// Закрыть по клику вне области фильтра	
			if ( !$('#filter-vacancies').is(e.target) && $('#filter-vacancies').has(e.target).length == 0 ) {
				// Проверяем открыт ли фильтр с отраслями
				if ( !$('.bg-container').hasClass('bg-container--show') && !$('.filter-vacancies-position__container').hasClass('d-block')) closeFilterVacancies();
			}

		// Открыть/Закрыть фильтр по клику по иконке
		} else if ( $('.filter-vacancies-open').is(e.target) || $('.filter-vacancies-open').has(e.target).length > 0 ) {
		
			e.preventDefault(); 
			$('html, body').scrollTop(0);
			$('body').toggleClass('overflow-hidden');
			$('#filter-vacancies').toggleClass('filter-vacancies--d-block');
			$('.filter-vacancies-open').toggleClass('icon-filter--active');	
						
		}

	});	

	$(window).resize(function(){
		if ( $('.filter-vacancies').hasClass('filter-vacancies--d-block') ) {
			if ( $(window).outerWidth() >= 992 )  closeFilterVacancies();
		}
	});

});