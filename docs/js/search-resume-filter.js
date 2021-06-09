$(document).ready(function(){
		
	function closeFilter() {
		$('.bg-search-resume__filter').addClass('bg-search-resume__filter--hide');
		$('body').removeClass('overflow-hidden');
	}

	$('#search-resume-filter-close').on('click', closeFilter);

	$('#search-resume-filter-toggle').on('click', function(){
		$('.bg-search-resume__filter').toggleClass('bg-search-resume__filter--hide');
		$('body').toggleClass('overflow-hidden');
		$('html, body').scrollTop(0);
	});

	$(window).resize(function(){
		if ( !$('.bg-search-resume__filter').hasClass('bg-search-resume__filter--hide') ) {
			if ( $(window).outerWidth() >= 1920 || $(window).outerWidth() < 992)  {
				closeFilter();
			}
			
		}
	});

});