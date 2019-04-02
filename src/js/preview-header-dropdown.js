$(document).ready(function(){
	//-открываем меню в превью-хедер
	var $menu = $('.dropdown-icons--preview-header');
	var offsetLeft,offsetTop;
	
	$('.open-preview-header-drop').on('click', function(e) {
		e.stopPropagation();
			offsetLeft = $('.open-preview-header-drop').offset().left - $menu.width() - $('.preview-wrapper').offset().left;
			offsetTop = $('.preview-header').offset().top - $('.open-preview-header-drop').offset().top + 80 + 14;

		if ($(window).outerWidth() < 768) {
		
			// Отступ серху на высоту шапки
			$('.dropdown-icons--preview-header').toggleClass('dropdown-icons--top');
				
		} else {

			offsetLeft = $(this).offset().left - $menu.width() - $('.preview-wrapper').offset().left;
	
			//-расчет верхней координаты меню: 72-высота шапки сайта, 14-подгонка, чтоб расположить под кнопкой
			offsetTop = $('.preview-header').offset().top - $(this).offset().top + 80 + 14;
					
			if ( $('.dropdown-icons--preview-header').hasClass('dropdown-icons--show') ) {
				$('.dropdown-icons--preview-header').removeAttr('style');
			} else {
				$('.dropdown-icons--preview-header').css('top', offsetTop);
				$('.dropdown-icons--preview-header').css('left', offsetLeft);	
			}
		
		} 

		$('.dropdown-icons--preview-header').toggleClass('dropdown-icons--show');
		$(this).toggleClass('arrow--down');

	});

	
	// Закрываем меню по клику вне области
	$(document).on('click', function(e){
		if ( !$(e.target).is('.dropdown-icons') && $('.dropdown-icons').has(e.target).length == 0 ) {
			$('.dropdown-icons').removeClass('dropdown-icons--show');

			if ( $('.dropdown-icons').is('.dropdown-icons--preview-header') ) {
				$('.open-preview-header-drop').addClass('arrow--down');	
			}	
		}
	});



	$(window).on('resize', function(){
		if ($(window).outerWidth() < 768) {
			$('.dropdown-icons--preview-header').removeAttr('style');
			$('.dropdown-icons--preview-header').addClass('dropdown-icons--top');
		} else {
			$('.dropdown-icons--preview-header').removeClass('dropdown-icons--top');
			$('.dropdown-icons--preview-header').css('top', offsetTop);
			$('.dropdown-icons--preview-header').css('left', offsetLeft);	
		}
	});
})