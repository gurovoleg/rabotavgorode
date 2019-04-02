$(document).ready( function() {

	var modalWindow = $('.modal-window'),
		bgWindow = $('.bg-modal-window');

	modalWindow.hide();
	bgWindow.hide();

	$('.modal-window-button').on('click', function(e){
		e.preventDefault();

		var mw = $(this).attr('href');
		$(mw).show();

		$(mw).children('.modal-window').show();

		$('.save-suggest-resume-btn-create').on('click', function(){
			$('#save-modal').hide();
			$('#suggest-modal').show();
		});

	});

	$('.modal-window-close-header').on('click', function(){
		modalWindow.removeClass('modal-window--show');
		$('body').removeClass('body--modal-window');
		$('body').removeClass('main-menu--overflow-hidden');
		bgWindow.hide();
		$('.bg-logo-menu-dropdown').removeClass('main-menu--open');
	});

	$('.modal-window-close').on('click', function(){
		modalWindow.removeClass('modal-window--show');
		$('body').removeClass('body--modal-window');
		$('body').removeClass('main-menu--overflow-hidden');
		bgWindow.hide();
		$('.bg-logo-menu-dropdown').removeClass('main-menu--open');
	});

	$(document).on('click', function(e){
		if (!modalWindow.is(e.target) && modalWindow.has(e.target).length === 0 && !$('.modal-window-button').is(e.target)) {
			modalWindow.removeClass('modal-window--show');
			$('body').removeClass('body--modal-window');
			bgWindow.hide();
		}
	});

});