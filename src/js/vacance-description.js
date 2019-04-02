$(document).ready(function() {

	/*переключаем закладки-табы*/
	// var pill = $("[data-pill]")
	var tabs = $(".vacance-tabs__content").find(".vacance-tabs__content-item")

	// pill.on('click', function(e){
	$('#vacance-description-nav-menu .nav-menu-item').on('click', function(e){
		e.preventDefault();
		var $clicked = $(this);
		var name = $(this).attr('data-pill');
		/*подчеркиваем активный элемент меню*/
		$(this).addClass('nav-menu-item-active');
		$(this).siblings('.nav-menu-item-active').removeClass('nav-menu-item-active');
		/*отображаем блок, соответствующий активной иконке*/
		
		tabs.each(function( index ) {
			if($(this).attr('data-name') == name && $clicked.hasClass('nav-menu-item-active')){
				
				$(this).addClass('vacance-tabs__content-item--active');
				$(this).siblings('.vacance-tabs__content-item--active').removeClass("vacance-tabs__content-item--active");
				
			}
		});
	});

	/*переменные для работы с .vacance-description__btn-block  и выпадающим меню*/
	var tabsIconFavorit = $('.vacance-description__btn-block').children('.icon-favorite');/*иконка-флажок в футере*/
	var tabsDropdownOpen = $('.vacance-description__btn-block').children('.arrow.arrow--down');/*иконка-галочка вниз в футере*/
	var tabsDropdownBlock = $('.vacance-description').children('.vacance-description-dropdown');/*блок выпадающего меню*/
	var tabsDropdownItem = $('.vacance-description-dropdown').children('.vacance-description-dropdown-item');/*строка в выпадающем меню*/
	var tabsDropdownItemFavorite = $('.vacance-description-dropdown').children('.vacance-description-dropdown-item-favor');/*строка "Добавить в избранное" */
	
	/*меняем в футере иконку флажок на голубую при клике по ней*/
	tabsIconFavorit.on('click', function(){
		$(this).toggleClass('icon-favorite--blue');
		$(this).toggleClass('icon-favorite--black-border');
	});

	/*открываем выпадающее меню при клике по галочке в футере*/	

	tabsDropdownOpen.on('click', function(e){
		e.preventDefault();
		e.stopPropagation();
		$(this).toggleClass('arrow--up').toggleClass('arrow--down');
		tabsDropdownBlock.toggleClass('vacance-description-dropdown--show');
	});

	/*скрываем выпадашку при клике по ее внутренней строке */
	tabsDropdownItem.on('click', function(e){		
		e.stopPropagation();
		tabsDropdownBlock.toggleClass('vacance-description-dropdown--show');
	});

	/*скрываем выпадашку при клике вне */
	$(document).on('click', function(e){
			if ( !$(tabsDropdownBlock).is(e.target) && $(tabsDropdownBlock).has(e.target).length == 0 ) {
				tabsDropdownBlock.removeClass('vacance-description-dropdown--show');
			}
		});


	/*перекрасить флажок-избранное в футере в голубой цвет,
	 когда кликаем по пункту "Добавить в избранное"" в выпадашке */	 

	 tabsDropdownItemFavorite.on('click', function(){		
		
		tabsIconFavorit.addClass('icon-favorite--blue');
	});

	 
})