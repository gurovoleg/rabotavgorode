$(document).ready(function(){

	// Навигация - переключение вкладок
	$('#preview-tabs-container > [class^="preview-tabs"]:not(:first-child)').hide();
	
	$('.nav-menu a[href^="#preview"]').on('click', function(e){
		e.preventDefault();
		var clicked = $(this).attr('href');

		$('#preview-tabs-container > [class^="preview-tabs"]').hide();

		$('.nav-menu .nav-menu-item-active').removeClass('nav-menu-item-active');
		$(this).addClass('nav-menu-item-active');

		$('#preview-tabs-container ' + clicked).show();

	});


});	 	