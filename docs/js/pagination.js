$(document).ready( function() {
 	/*показываем/скрываем фильтр по клику по галочке*/
 	var paginationFilter = $('.pagination-count__filter');
 	var event_handled = false;

	$('.pagination-count').on('click', function(e){
		$(document).on("click", hideWhenClickOutside);
		paginationFilter.toggleClass('pagination-count__filter--show');		
		e.stopPropagation();
	});

	/*скрываем фильтр после клика по значению в фильтре*/
	$('.pagination-count__filter-item').on('click', function(e){
		e.preventDefault();
		e.stopPropagation();
		paginationFilter.removeClass('pagination-count__filter--show');
		$(document).off("click", hideWhenClickOutside);
	});

	/*скрываем фильтр после клика вне него*/

	function hideWhenClickOutside(e){
		if(paginationFilter.hasClass('pagination-count__filter--show')){
			if ( !paginationFilter.is(e.target) && paginationFilter.has(e.target).length == 0 ) {
				
				paginationFilter.removeClass('pagination-count__filter--show');
			}
		}
		$(document).off("click", hideWhenClickOutside);
	}

})