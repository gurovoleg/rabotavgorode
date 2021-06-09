$(document).ready(function(){

	// Убираем все вкладки кроме первой
	$('#company-tabs-container [class^="company-tabs"]:not(:first-child)').hide();
	// $('#company-tabs-container [class=^company-tabs].company-tabs__block:not(:first-child)').hide();

	// Переключение между вкладками
	$('#company-nav-menu a[href^="#company-tabs"]').on('click', function(e){
		e.preventDefault();
		var clicked = $(this).attr('href');
		
		$('#company-tabs-container [class^="company-tabs"]').hide();	
		
		$('#company-nav-menu .nav-menu-item-active').removeClass('nav-menu-item-active');
		$(this).addClass('nav-menu-item-active');	
		
		$('#company-tabs-container ' + clicked).show(); 
		
	}); 

});