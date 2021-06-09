$(document).ready(function(){

	// Убираем все вкладки кроме первой
	$('#cities-tabs-container [class^="cities-tabs"]:not(:first-child)').hide();
	
	// Переключение между вкладками
	$('#cities-nav-menu a[href^="#cities-tabs"]').on('click', function(e){
		e.preventDefault();
		var clicked = $(this).attr('href');
		
		$('#cities-tabs-container [class^="cities-tabs"]').hide();	
		
		$('#cities-nav-menu .nav-menu-item-active').removeClass('nav-menu-item-active');
		$(this).addClass('nav-menu-item-active');	
		
		$('#cities-tabs-container ' + clicked).show(); 
		
	}); 

});