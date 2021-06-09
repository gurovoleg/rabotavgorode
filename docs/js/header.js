$(document).ready( function() {
	var inputIconSearch = $('.tag-filter__search-icon'),
		input = $('.search-job__name');
		
	inputIconSearch.on('click', function(){
		$('.search-job__name').focus();
		$('.input-container__dropdown--history').addClass('input-container__dropdown--history--show');

	});

	$('.icon-close').on('click', function(e){
		e.preventDefault();
		$(this).parents('.tag-filter').hide();
	});

	input.on('click', function(){
		if ( input.val() != '' ) {
			// inputIconSearch.hide();
			$('.input-container__dropdown--search').addClass('input-container__dropdown--search--show');
		} else {
			$('.input-container__dropdown--history').addClass('input-container__dropdown--history--show');
		}
	})
	.on('blur', function(){
		// inputIconSearch.show();
		$('.input-container__dropdown--history').removeClass('input-container__dropdown--history--show');
		if ( input.val() != '' ) {
			// inputIconSearch.hide();
			$('.input-container__dropdown--search').removeClass('input-container__dropdown--search--show');
		}
	})
	.on('focus', function(){
		// inputIconSearch.hide();
		$(this).setCursorPosition(15);
		if ( input.val() != '' ) {
			// inputIconSearch.hide();
			$('.input-container__dropdown--history').removeClass('input-container__dropdown--history--show');
			$('.input-container__dropdown--search').removeClass('input-container__dropdown--search--show');
		}
	})
	.on('keydown', function(event){
		$('.input-container__dropdown--history').removeClass('input-container__dropdown--history--show');
		$('.input-container__dropdown--search').addClass('input-container__dropdown--search--show');
		if ( event.keyCode == 8 && input.val().length == 1) {
			$('.input-container__dropdown--search').removeClass('input-container__dropdown--search--show');
			$('.input-container__dropdown--history').addClass('input-container__dropdown--history--show');
		}
		
		if ( event.keyCode == 8 || event.keyCode == 27 || event.keyCode == 9) {
			$('.input-container__dropdown--search').removeClass('input-container__dropdown--search--show');
		}
	});
	
	if ( input.val() != '' ) {
		// inputIconSearch.hide();
		$('.input-container__dropdown--search').removeClass('input-container__dropdown--search--show');
	}


	$('.tag-filter').on('click', function(){
		if ( $(this).parents().hasClass('header-main__search')) {
			$(this).hide();
		}
	});

});