$(document).ready( function() {
	var dropdownList = '.dropdown-list';

	$('.dropdown-toggle').on('click', function(e){
		e.stopPropagation();
		if(!$(this).parent().find(dropdownList).hasClass('dropdown-list--show')){
			$(dropdownList).removeClass('dropdown-list--show');
		 }
		$(this).parent().find(dropdownList).toggleClass('dropdown-list--show');
	});
	
	/*скрываем выпадашку при клике вне */
	$(document).on('click', function(e){
		if ( !$(dropdownList).is(e.target) && $(dropdownList).has(e.target).length === 0 ) {
			$(dropdownList).removeClass('dropdown-list--show').removeClass('d-block');
		}
	});
	

	/*dropdown-simple*/
	//-открываем выпадашку при клике оп галочке
	
	 $('.arrow.arrow--down').on('click', function(e){
		e.stopPropagation();
		$(this).parent().find('.dropdown-simple-list--input').toggleClass('d-block');

	});

	  $('.input-field').on('click', function(e){
		e.stopPropagation();

		$(this).keyup(function(e) {
			$(this).parents().find('.dropdown-simple-list--input').addClass('d-block');
			if ( e.keyCode == 27 || $(this).val().length === 0) {
				$(this).val('');	
				$(this).parents().find('.dropdown-simple-list--input').removeClass('d-block');
			}
		});

	});


});