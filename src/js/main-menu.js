$(document).ready(function() {

	$('.bg-header .arrow--down').on('click', function(e){
		// $(this).toggleClass('logo-menu--show'); // 
		$('.arrow').toggleClass('arrow--down'); // Изменяем иконку (стрелка вверх-вниз)
		$('.bg-logo-menu-dropdown').toggleClass('main-menu--open'); // Убрать/Показать Выпадающее меню
		$('body').toggleClass('main-menu--overflow-hidden') // Убрать/Покзать скролл у BODY
		$('.search-form').toggleClass('display-none'); // Убрать/Показать строку поиска(инпуты)
						
		// На мобильном экране в режиме MAP изменяем header (другое отображение)
		if ( $('.search-result--show').is('#search-result-map') && $(window).width() < 768 ) {
			$('.bg-header').toggleClass('bg-header--map');
		}
	});

	
});