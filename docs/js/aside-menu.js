$(document).ready(function(){

	// Показать/Скрыть блок с выбором компании
	$('.menu-current-company').on('click', function(){
		$('.menu-companies-block').slideToggle(200);
		$('#aside-menu-company-toggle').toggleClass('arrow--down');
	});

	// Показать/Скрыть меню пользователя на Mobile/Tablet
	$('#lk-header .round-icon--user').on('click', function(){
		if ( $(window).width() < 992 ) {
			$('.aside-menu').toggleClass('d-flex');
			$('body').toggleClass('overflow-hidden');	
		}
	});	

});