$(document).ready(function(){
	var $checkbox = $('.table-item > .check-box__label > .check-box');
	
	// Открываем окно предпросмотра записи таблицы
	$('.table-row:not(:first-child)').on('click', function(event){
		
		// Исключаем клик по чекбоксам
		if ( $('.check-box__label').has(event.target).length == 0  ) {
			
			$('.bg-preview').addClass('d-block');
			$('body').addClass('overflow-hidden');
			// Показываем Окно предпросмотра
			setTimeout(function(){
				$('#preview-window').addClass('preview--slideIn');
			}, 100);
			// Фиксируем хедер у Окна предпросмотра
			setTimeout(function(){
				$('#preview-window').addClass('preview--header-fixed');
			}, 600);
		
		}
		
	});	

	// Закрыть окно предпросмотра записи таблицы
	$('.preview-close-button').on('click', closeWindow)

	$('.bg-preview').on('click', function(e) {
		if ( $(e.target).is(this) ) closeWindow();
	});

	function closeWindow(){
		$('#preview-window').removeClass('preview--header-fixed preview--slideIn');
		$('.preview--slideIn').removeClass('preview--slideIn');
		setTimeout(function(){
			$('.bg-preview').removeClass('d-block');
		}, 400);
		$('body').removeClass('overflow-hidden');
	}


	// Отслеживаем изменения чекбоксов
	$checkbox.on('change', function(event){

		if ( $(this).parents('.table-row').hasClass('table-item--header') ) {
						
			if ( $(this).prop('checked') ) $('.check-box').prop('checked', true);	
			else $('.check-box').prop('checked', false);	
		
			$('.table-row').toggleClass('table-row--selected');
			$('.table-item--header').removeClass('table-row--selected');
			
		} else $(this).parents('.table-row').toggleClass('table-row--selected');	
	
		// Проверяем :checked у всех элементов и показываем или убираем нижнее панель-меню
		$checkbox.each( function(index,element){ 
		
			if ( $(element).prop('checked') ) {
				$('.lk-bottom-menu').addClass('d-flex');
				return false;	
			}
			$('.lk-bottom-menu').removeClass('d-flex');

		});

	});

 	//-открываем меню при клике по колонке с точками в Таблице 
	$('.table-item--icons-box').on('click', function(e){
		e.stopPropagation();
		
		var $menu = $('.dropdown-icons');
		var offsetLeft = $(this).offset().left - $menu.width();
		
		
		if ( ($(document).outerHeight() - $(this).offset().top) > $menu.height() )  {
			offsetTop = $(this).offset().top;
		} else {
			offsetTop = $(this).offset().top - $menu.height();	
		}

		$('.dropdown-icons').css('top', offsetTop);
		$('.dropdown-icons').css('left', offsetLeft);
		$('.dropdown-icons').toggleClass('dropdown-icons--show');
		
	});

});