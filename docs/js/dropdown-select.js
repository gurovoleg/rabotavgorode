$(document).ready(function(){

	$('.dropdown-select').on('click', function(e){

		$(this).find('.arrow').toggleClass('arrow--down');
		$(this).toggleClass('dropdown-select--show');

	});

});