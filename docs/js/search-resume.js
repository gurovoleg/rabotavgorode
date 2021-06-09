$(document).ready(function(){

	// Навигация - переключение вкладок
	$('#search-resume-tabs-container > [class^="search-resume-tabs"]:not(:first-child)').hide();
	
	$('.header-nav .nav-menu a[href^="#search-resume-tabs"]').on('click', function(e){
		e.preventDefault();
		var clicked = $(this).attr('href');

		$('#search-resume-tabs-container > [class^="search-resume-tabs"]').hide();

		$('.header-nav .nav-menu .nav-menu-item-active').removeClass('nav-menu-item-active');
		$(this).addClass('nav-menu-item-active');

		$('#search-resume-tabs-container ' + clicked).show();

	}); 	



	// Переключение режима отобрадения контента (СПИСОК, ПЛИТКА, КАРТА)
	$('#search-resume-tabs-container .dropdown-view, #btn-list-view').on('click', function(e){
		e.preventDefault();
		var viewId = $(e.target).attr('href');
		var viewName = $(e.target).text().trim();
		
		if ( e.target.id == 'btn-list-view' ) viewName = 'список';
						
		//- Блоки, которые необходимо убирать в режиме Map на мобильном разрешении
		var $hiddenBlocks = $('.bg-footer, .title-block, .icon-favorite-gray, .header-nav');
		
		// Скрываем все блоки (плитка, список, карта)
		$('.search-result').removeClass('search-result--show');	 
		
		// Убираем классы-модификаторы контейнера с контентом
		$('#container-aside').removeClass('container-aside--list').removeClass('container-aside--map');
		
		// Убираем классы-модификаторы Title-block
		$('#container-title').removeClass('container-title--list').removeClass('container-title--map');
				
		switch (viewId) {
			
			case '#search-result-list':
				
				// Модификатор для контента, задающий отступы согласно сетке и режиму отображения (custom-grid-dynamic.css)
				$('#container-aside').addClass('container-aside--list'); 
				$hiddenBlocks.removeClass('display-mobile-none');
				// Модификатор для Header на мобильном экране в режиме MAP (search-results.scss)
				$('.bg-header').removeClass('bg-header--map');
				// Модификатор для aside, чтобы отображать в режиме Плитка с 992px + отступ (search-resume.scss)
				$('.aside--search-resume').removeClass('aside--search-resume-grid')
				// Модификатор для отображения фильтра на мобильном экране в режиме MAP (без шапки) (filter-vacancies.scss)
				$('.filter-vacancies__wrapper').removeClass('filter-vacancies__wrapper--map')
				// Модификатор для Title-block, задающий отступы согласно сетке и режиму отображения (title-block.scss)
				$('#container-title').addClass('container-title--list');
				// Меню Все фильтры показывать в этом режиме отображения
				$('#search-resume-filter-toggle').removeClass('d-none')

				break;
			
			case '#search-result-map':
			
				$('#container-aside').addClass('container-aside--map');
				$('.bg-header').addClass('bg-header--map');
				$hiddenBlocks.addClass('display-mobile-none');
				$('.aside--search-resume').removeClass('aside--search-resume-grid')
				$('.filter-vacancies__wrapper').addClass('filter-vacancies__wrapper--map')
				$('#container-title').addClass('container-title--map');
				$('#search-resume-filter-toggle').removeClass('d-none')

				break;

			case '#search-result-grid':
			
				$('#container-aside').removeClass('container-aside--list');
				$hiddenBlocks.removeClass('display-mobile-none');
				$('.bg-header').removeClass('bg-header--map');
				$('.aside--search-resume').addClass('aside--search-resume-grid')
				$('.filter-vacancies__wrapper').removeClass('filter-vacancies__wrapper--map')
				// Меню Все фильтры скрывать в этом режиме отображения
				$('#search-resume-filter-toggle').addClass('d-none')


		}

		// Показываем выбранный Layout
		$(viewId).addClass('search-result--show');
		$(this).removeClass('dropdown-list--show');
		$('#dropdown-view-text').text(viewName);
	});

	// Навигация - переключение вкладок Поиск Резюме - Секция Шапка + Табы (Описание Резюме)
	$('#search-resume-header-tabs-container [class^="search-resume-tabs"]:not(:first-child)').hide();
	

	$('#resume-description-nav-menu a[href^="#search-resume-tabs"]').on('click', function(e){
		e.preventDefault();
		var clicked = $(this).attr('href');
		
		$('#search-resume-header-tabs-container [class^="search-resume-tabs"]').hide();

		$('#resume-description-nav-menu .nav-menu-item-active').removeClass('nav-menu-item-active');
		$(this).addClass('nav-menu-item-active');

		$('#search-resume-header-tabs-container ' + clicked).show(); 
		
	});


});