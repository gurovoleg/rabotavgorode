
$(document).ready( function() {
	var tabsIconFavorit = $('.respond-block').children('.icon-favorite');/*иконка-флажок в футере*/
	var tabsDropdownOpen = $('.respond-block').children('.arrow.arrow--down');/*иконка-галочка вниз в футере*/
	var tabsDropdownBlock = $('.respond-block-dropdown');/*блок выпадающего меню*/
	var tabsDropdownItem = $('.respond-block').children('.respond-block-dropdown-item');/*строка в выпадающем меню*/
	var tabsDropdownItemFavorite = $('.respond-block-dropdown').children('.respond-block-item-favor');/*строка "Добавить в избранное" */
	
	/*меняем в футере иконку флажок на голубую при клике по ней*/
	tabsIconFavorit.on('click', function(){
		$(this).toggleClass('icon-favorite--blue');
		$(this).toggleClass('icon-favorite--black-border');
	});

	// открываем выпадающее меню при клике по галочке в футере	

	tabsDropdownOpen.on('click', function(e){
		e.preventDefault();
		e.stopPropagation();
		var dropdownId = $(this).parent().attr('data-dropdownId');
		console.log(dropdownId);
		$(this).toggleClass('arrow--down');
		$(dropdownId).toggleClass('respond-block-dropdown--show');
	});

	/*скрываем выпадашку при клике по ее внутренней строке */
	tabsDropdownItem.on('click', function(e){		
		e.stopPropagation();
		tabsDropdownBlock.toggleClass('respond-block-dropdown--show');
	});

	/*скрываем выпадашку при клике вне */
	$(document).on('click', function(e){
			if ( !$(tabsDropdownBlock).is(e.target) && $(tabsDropdownBlock).has(e.target).length == 0 ) {
				tabsDropdownBlock.removeClass('respond-block-dropdown--show');
				tabsDropdownOpen.addClass('arrow--down');
			}
		});

});