$(document).ready(function(){
		// Убираем все вкладки кроме первой
	$('#companies-tabs-container [class^="companies-tabs"]:not(:first-child)').hide();
	
	// Переключение между вкладками
	$('#companies-nav-menu a[href^="#companies-tabs"]').on('click', function(e){
		e.preventDefault();
		var clicked = $(this).attr('href');
		
		$('#companies-tabs-container [class^="companies-tabs"]').hide();	
		
		$('#companies-nav-menu .nav-menu-item-active').removeClass('nav-menu-item-active');
		$(this).addClass('nav-menu-item-active');	
		
		$('#companies-tabs-container ' + clicked).show(); 
		
	}); 

});