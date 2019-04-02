//- включаем радио-баттон при клике по карточке 
$(document).ready(function(){

	$('.service-card').on('click', function(){
		$(this).find('.radio-button').prop('checked',true);
		$('#preview-service .btn').removeClass('control-disabled');
	});

})