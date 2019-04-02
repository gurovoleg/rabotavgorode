$(document).ready(function(){

	$("a[href='#open-change-status']").on('click', function(e){
		console.log('test');
		e.preventDefault();
		$('.preview--change-status').addClass('preview--slideIn');
	});

	$('#close-change-status').on('click', function(e){
		e.preventDefault();
		$('.preview--change-status').removeClass('preview--slideIn');
	});

	$('#change-status__notify-text').val('Константин Константинопольский <kkostyan987@mail.ru>,');

});