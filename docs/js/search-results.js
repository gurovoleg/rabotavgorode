$(document).ready(function(){

	var tablet = 768;
	var currentWindowWidth = $(window).outerWidth();
	
	// Навигация - переключение вкладок
	$('#search-results-tabs-container [class^="search-results-tabs"]:not(:first-child)').hide();
	
	$('.header-nav .nav-menu a[href^="#search-results-tabs"]').on('click', function(e){
		e.preventDefault();
		var clicked = $(this).attr('href');
		
		$('#search-results-tabs-container [class^="search-results-tabs"]').hide();	
		$('.header-nav .nav-menu .nav-menu-item-active').removeClass('nav-menu-item-active');
		$(this).addClass('nav-menu-item-active');	
		$('#search-results-tabs-container ' + clicked).show(); 
		
	}); 	



	// Переключение режима отобрадения контента (СПИСОК, ПЛИТКА, КАРТА)
	$('#search-results-tabs-container .dropdown-view, #btn-list-view').on('click', function(e){
		e.preventDefault();
		var viewId = $(e.target).attr('href');
		var viewName = $(e.target).text().trim();
		
		if ( e.target.id == 'btn-list-view' ) viewName = 'список'
				
		//- Блоки, которые необходимо убирать в режиме Map на мобильном разрешении
		var $hiddenBlocks = $('.bg-footer, .title-block, .icon-favorite-gray, .header-nav');
		
		// Скрываем все блоки (плитка, список, карта)
		$('.search-result').removeClass('search-result--show');	 
		
		// Убираем классы-модификаторы контейнера с контентом
		$('#container-aside').removeClass('container-aside--list').removeClass('container-aside--map');
				
		switch (viewId) {
			
			case '#search-result-list':
				
				$('#container-aside').addClass('container-aside--list');
				$hiddenBlocks.removeClass('display-mobile-none');
				$('.bg-header').removeClass('bg-header--map');
				$('.aside').removeClass('aside--grid')
				$('.filter-vacancies__wrapper').removeClass('filter-vacancies__wrapper--map')

				break;
			
			case '#search-result-map':
			
				$('#container-aside').addClass('container-aside--map');
				$('.bg-header').addClass('bg-header--map');
				$hiddenBlocks.addClass('display-mobile-none');
				$('.aside').removeClass('aside--grid')
				$('.filter-vacancies__wrapper').addClass('filter-vacancies__wrapper--map')

				break;

			case '#search-result-grid':
			
				$('#container-aside').removeClass('container-aside--list');
				$hiddenBlocks.removeClass('display-mobile-none');
				$('.bg-header').removeClass('bg-header--map');
				$('.aside').addClass('aside--grid');
				$('.filter-vacancies__wrapper').removeClass('filter-vacancies__wrapper--map')

								
		}

		// Показываем выбранный Layout
		$(viewId).addClass('search-result--show');
		$(this).removeClass('dropdown-list--show');
		// $(this).parent().find('.dropdown-list-name').find('.dropdown-list-name__text').text(viewName);
		$('#dropdown-view-text').text(viewName);

		// Пересчет размеров и положения блоков
		// pageLayout.init();
		// pageLayout.checkScroll();
	
	});


	//-- Модуль настройки страницы -- //

	// var pageLayout = (function(){

	// 	// vars
		
		
	// 	var $contentBlock = $('.search-result--show');
	// 	var $rightColumn = $('.search-result--show .search-result__item-description'); // Правый блок Description (Описание вакансии / Карта)
	// 	var $leftColumn = $('.search-result--show .search-result-list');
		
	// 	var $fixedBlock = $('#container-title'); // Фиксируемый блок
	// 	var fixedBlockHeight; // Высота блока
		
	// 	var titleBlockClasses = "container-title";		
		
	// 	var scrollingLength; // Расстояние прокрутки до фикса
	// 	var fixedBlockOffsetTop; // Точка фиксации блока (offset). #scroll-break-point - метка для блока по которому фиксируем.
		
	// 	var checkpoint = false; // Проверка прохождения точки фиксации
	// 	var checkGrid = false; // Проверка режима Grid
	// 	var mobile = false;	// Сброс для мобильных экранов	
	// 	var asideEnabled = false;	// Сброс для мобильных экранов	
		
	// 	var rightColumnOffsetLeft; // Отступ слева от окна
	// 	var rightColumnOffsetTop; // Отступ сверху от окна
	// 	var rightColumnWidth; // Ширина блока
	// 	var rightColumnContentHeight; // Высота блока с контентом описания (class = vacance-tabs__content)
		
	// 	var headerHeight; // Высота Шапки (class = header)
	// 	var asideOffsetLeft; // Отступ слева для боковой панели
		
	// 	// 	Запуск модуля
	// 	var init = function(){
	// 		getItemParms();
	// 		setItemParms();
	// 	}

	// 	// Пересчет значений и классов
	// 	var getItemParms = function() {
			
	// 		headerHeight = $('.header').height();
	// 		fixedBlockHeight = $fixedBlock.outerHeight();
	// 		scrollingLength = $('#scroll-break-point').position().top + $('#scroll-break-point').height() + headerHeight;
	// 		fixedBlockOffsetTop = scrollingLength - headerHeight;
	// 		rightColumnOffsetTop = $fixedBlock.height() - fixedBlockOffsetTop;
			
	// 		// console.log('getItemParms');

	// 		// Проверка наличия Aside
	// 		if ( $('.aside').hasClass('aside--enabled') ) asideEnabled = true;
	// 		else asideEnabled = false;	
						
	// 		checkGrid = false;
	// 		titleBlockClasses = 'container-title';

	// 		if ( $('.search-result--show').is('#search-result-list') ) {
	// 		// if ( $contentBlock.is('#search-result-list') ) {
			
	// 			$rightColumn = $('.search-result--show .search-result__item-description'); // Правый блок Description (Описание вакансии / Карта)
	// 			$leftColumn = $('.search-result--show .search-result-list');
				
	// 			rightColumnWidth = $leftColumn.width(); // Ширина соседней колонки (пл 50%)
	// 			rightColumnOffsetLeft = $leftColumn.offset().left + rightColumnWidth;
								
	// 			rightColumnContentHeight = $(window).height() - rightColumnOffsetTop - $('.vacance-tabs__content').position().top - $('.vacance-description__footer').height();

	// 			titleBlockClasses += ' container-title--list';
	// 			if (asideEnabled) titleBlockClasses += ' container-title--list-aside'
				
	// 		} else if ( $('.search-result--show').is('#search-result-map') ) {
	// 		// } else if ( $contentBlock.is('#search-result-map') ) {

	// 			$rightColumn = $('.search-result--show .search-result__item-description'); // Правый блок Description (Описание вакансии / Карта)
	// 			$leftColumn = $('.search-result--show .search-result-list');
				
	// 			rightColumnWidth = $leftColumn.width(); // Ширина соседней колонки (пл 50%)				
	// 			rightColumnOffsetLeft = $rightColumn.offset().left;
				
							
	// 			titleBlockClasses = titleBlockClasses + ' container-title--map';
	// 			if (asideEnabled) titleBlockClasses += ' container-title--map-aside'
			
	// 		// } else if ( $contentBlock.is('#search-result-grid') ) checkGrid = true;
	// 		} else if ( $('.search-result--show').is('#search-result-grid') ) {
	// 			checkGrid = true;
	// 			if ( asideEnabled )	{
	// 				asideOffsetLeft = $('.container-content').offset().left + $('.container-content').width();
	// 			}
	// 		} 

	// 	}

	// 	// Устанавливаем значения
	// 	var setItemParms = function() {
			
	// 		// console.log('setItemParms');
			
	// 		$fixedBlock.removeClass('container-title--list container-title--map container-title--list-aside container-title--map-aside');
	// 		$fixedBlock.addClass(titleBlockClasses);

		
	// 		if ( $fixedBlock.hasClass('fixed-position') ) {
				
	// 			// Высота блока для LIST определяется высотой контента
	// 			if ( $('.search-result--show').is('#search-result-list') ) {
	// 				$rightColumn.css('top', rightColumnOffsetTop);	
	// 				$rightColumn.css('left', rightColumnOffsetLeft);
	// 				$rightColumn.css('width', rightColumnWidth);
	// 				$('.vacance-tabs__content').css('height', rightColumnContentHeight);
	// 			}
	// 			// Высота блока для MAP определяется фиксированным значением
	// 			if ( $('.search-result--show').is('#search-result-map') ) {
	// 				$rightColumn.css('top', rightColumnOffsetTop);	
	// 				$rightColumn.css('left', rightColumnOffsetLeft);
	// 				$rightColumn.css('width', rightColumnWidth);
	// 				$rightColumn.css('height', $(window).height() - rightColumnOffsetTop);
	// 			}

	// 			// Фиксация боковой панели Aside
	// 			if ( asideEnabled && $(window).outerWidth() >= 1920 ) {

	// 				// Пересчет отступа ASIDE и ширины колонок для LIST/MAP
	// 				if ( !checkGrid ) {
	// 					var newColumnWidth = ($('.container-aside').width() - $('.aside').outerWidth())*0.5;
	// 					asideOffsetLeft = rightColumnOffsetLeft +  newColumnWidth;
																						
	// 					$rightColumn.width(newColumnWidth);
	// 					$leftColumn.width(newColumnWidth);
	// 				} else {
	// 					var newContentWidth = $('.container-aside').width() - $('.aside').outerWidth();
	// 					$('.container-content').width(newContentWidth);	
	// 					$('.container-aside').css('justify-content', 'flex-start');
	// 				}	
				
	// 				$('.aside').css('top', rightColumnOffsetTop);	
	// 				$('.aside').css('height', $(window).height() - rightColumnOffsetTop);	
	// 				$('.aside').css('left', asideOffsetLeft);
									
	// 			} 
			
	// 		}
	
			
	// 	}

	// 	// Проверяем скролл и фиксируем блоки
	// 	var checkScroll = function(){
	// 		var scrollPosition = $(document).scrollTop();
			
	// 		// console.log('checkScroll: ' + checkpoint);
			
	// 		if ( scrollPosition >= scrollingLength ) {
		
	// 			if ( checkpoint == false ) {
	// 				checkpoint = true;

	// 				// console.log('FIX TITLE');
					
	// 				$fixedBlock.addClass('fixed-position');
	// 				$fixedBlock.css('top', -fixedBlockOffsetTop);
	// 				$('.bg-header').css('margin-bottom', fixedBlockHeight); // Добавляем к HEader выстоту фиксированного блока
					
	// 				// Положение правого блока (LIST/MAP)
					
	// 				if ( !checkGrid ) {
	// 					// console.log('FIX COLUMN');
	// 					$rightColumn.addClass('fixed-position-same-location');
	// 				}
					
	// 				if ( asideEnabled ) {
	// 					// console.log('FIX ASIDE');
	// 					$('.aside').addClass('fixed-position-aside');	
	// 				} 

	// 				setItemParms();	
								
	// 			}

	// 		} else if ( scrollPosition <= (fixedBlockOffsetTop + fixedBlockHeight) && checkpoint == true) resetFixedItems(); 
			
	// 	}

	// 	// Сбрасываем фиксацию и значения
	// 	var resetFixedItems = function() {
					
	// 		// console.log('Reset');

	// 		checkpoint = false;
	// 		$fixedBlock.removeClass('fixed-position');
	// 		$fixedBlock.removeAttr('style'); 
	// 		$('.bg-header').removeAttr('style'); 
			
	// 		$('.container-content').removeAttr('style'); 
	// 		$('.container-aside').removeAttr('style'); 

	// 		$rightColumn.removeClass('fixed-position-same-location');
	// 		$rightColumn.removeAttr('style');
	// 		$leftColumn.removeAttr('style');	
			
	// 		$('.aside').removeClass('fixed-position-aside');
	// 		$('.aside').removeAttr('style');
	
	// 	}

	// 	return {
	// 		init,
	// 		getItemParms,
	// 		setItemParms,
	// 		checkScroll,
	// 		resetFixedItems
	// 	}

	// }());

	// pageLayout.init();
	// pageLayout.getItemParms();
	// pageLayout.checkScroll();

	
	// $(document).on('scroll', function(){
	// 	if ( currentWindowWidth >= tablet ) {
	// 		pageLayout.checkScroll();
	// 	}
	// });
	
	// $(window).resize(function(){
	// 	if ( $(window).outerWidth() < tablet && currentWindowWidth >= tablet ) {
			
	// 		// console.log('reset');
	// 		pageLayout.resetFixedItems(true);
		
	// 	} else if ( $(window).outerWidth() >= tablet ) {
			
	// 		// console.log('resize');
	// 		pageLayout.resetFixedItems();
	// 		pageLayout.init();
	// 		pageLayout.checkScroll();
			
	// 	}
	// 	currentWindowWidth = $(window).outerWidth();
	// });

});