$(document).ready(function(){

	// Убираем все вкладки кроме первой
	$('#areas-tabs-container [class^="areas-tabs"]:not(:first-child)').hide();
	
	// Переключение между вкладками
	$('#areas-nav-menu a[href^="#areas-tabs"]').on('click', function(e){
		e.preventDefault();
		var clicked = $(this).attr('href');
		
		$('#areas-tabs-container [class^="areas-tabs"]').hide();	
		
		$('#areas-nav-menu .nav-menu-item-active').removeClass('nav-menu-item-active');
		$(this).addClass('nav-menu-item-active');	
		
		$('#areas-tabs-container ' + clicked).show(); 
		
	}); 

});