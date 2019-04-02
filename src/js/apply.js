$(document).ready(function(){
		// Убираем все вкладки кроме первой
	$('#apply-tabs-container [class^="apply-tabs"]:not(:first-child)').hide();
	
	// Переключение между вкладками
	$('#apply-header-menu a[href^="#apply-tabs"]').on('click', function(e){
		e.preventDefault();
		var clicked = $(this).attr('href');

		$('#apply-tabs-container [class^="apply-tabs"]').hide();	
		
		$('#apply-header-menu .nav-menu-item-active').removeClass('nav-menu-item-active');
		$(this).addClass('nav-menu-item-active');	
		
		$('#apply-tabs-container ' + clicked).show(); 
		
	});

	// обработка нажатия кнопки "Отправить резюме"
	$('.apply-tab-btn-send').on('click', function(e){
		e.preventDefault();
		$('.apply-page').hide();
		$('.apply-notify').show();
	});

});