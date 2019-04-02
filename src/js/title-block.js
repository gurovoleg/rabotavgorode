$(document).ready( function() {
	var titleBlockDropdown = $('.title-block-dropdown');	

	$('.filters-item__type').on('click', function(e){
	
		e.stopPropagation();
		if(!$(this).siblings('.title-block-dropdown').hasClass('title-block-dropdown--show')){

			$('.title-block-dropdown').removeClass('title-block-dropdown--show');
		 }

		$(this).siblings('.title-block-dropdown').toggleClass('title-block-dropdown--show');
	});
	
	/*скрываем выпадашку при клике вне */
	$(document).on('click', function(e){
			if ( !$(titleBlockDropdown).is(e.target) && $(titleBlockDropdown).has(e.target).length == 0 ) {
				titleBlockDropdown.removeClass('title-block-dropdown--show');
			}
		});
	
});