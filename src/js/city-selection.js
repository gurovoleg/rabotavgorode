$(document).ready(function(){
	var $cityWindow = $('.city-selection-wrapper'),
		$mainWindow = $('.bg-city-selection');

	
	$('#city-selection__open-button').on('click', function(e){
		e.stopPropagation();
		$mainWindow.show();
		$('body').addClass('overflow-hidden');
	});

	$('#citi-selection__close-button').on('click', function(e){
		e.stopPropagation();
		$mainWindow.hide();
		$('body').removeClass('overflow-hidden');
	});

	$mainWindow.on('click', function(e){
		if ( !$cityWindow.is(e.target) && $cityWindow.has(e.target).length == 0) {
			$(this).hide();	
			$('body').removeClass('overflow-hidden');
		}
	});

});