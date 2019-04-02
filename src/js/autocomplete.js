$(document).ready(function(){

	(function() {
		var $searchResult = $('.autocomplete__result');
		var show = 'autocomplete__result--show';
		var parentBlock = '.autocomplete';

		$('.autocomplete__input').on('keyup', function(event){
			var keycode = event.keyCode || event.charCode;
			var text = $(this).val().trim();
						
			if ( text == "" || keycode == 27) $searchResult.removeClass(show);
			else $searchResult.addClass(show);
			if ( keycode == 27 ) $(this).val("");	
			
		});

		$(document).on('click', function(e){
			if ( !$(parentBlock).is(e.target) && $(parentBlock).has(e.target).length == 0 ) {
				$searchResult.removeClass(show);
			}
		});

	}())

});