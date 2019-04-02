$(document).ready( function() {
var input = $('.input-field'),
	inputPlaceholder = $('.input-placeholder'),
	inputData = input.data('type');

$('.input-wrapper').parent('.input-error').each(function() {
	$(this).addClass('has-error');
});

// проверка на заполненность Email
function checkEmail() {
if( $('[data-type="email"]') ) {
	var inputFieldEmail = $('[data-type="email"]');
		inputFieldEmail
		.on('blur', function(){
			var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
			if( !pattern.test($(this).val()) ){
				$(this).parent().addClass('input-wrapper--error');
			}
		})
		.on('focus', function(){
			$(this).parent().removeClass('input-wrapper--error');
			if ( $(this).val().length == 0 ||  $(this).val().length != '' ) {
				$(this).parent().removeClass('input-wrapper--error');
			}
		})
		.on('keydown', function(){
			var keycode = window.event.keyCode; // 13 - enter 9 - tab 8 - backspace
			$(this).parent().removeClass('input-wrapper--error');
			if ( keycode == 8 || keycode == 13){
				if ( inputFieldEmail.val().length == 1 || inputFieldEmail.val().length == 0 ) {
					$(this).parent().addClass('input-wrapper--error');
				} 
			}
		});
}
}

// проверка на заполненность поля
function checkField() {
if( $('[data-type="checkField"]') ) {
	var inputFieldEmail = $('[data-type="checkField"]');
		inputFieldEmail
		.on('keydown', function(){
			var keycode = window.event.keyCode; // 13 - enter 9 - tab 8 - backspace
			$(this).parent().removeClass('input-wrapper--error');
			if ( keycode == 8 || keycode == 13){
				if ( inputFieldEmail.val().length == 1 || inputFieldEmail.val().length == 0 ) {
					$(this).parent().addClass('input-wrapper--error');
				} 
			}
		})
		.on('focus', function(){
			$(this).parent().removeClass('input-wrapper--error');
			if ( inputFieldEmail.val().length == 1 ||  $(this).val().length != '' ) {
				$(this).parent().removeClass('input-wrapper--error');
			} 
		})
		.on('blur', function(){
			$(this).parent().addClass('input-wrapper--error');
			if ( inputFieldEmail.val().length == 1 ||  $(this).val().length != '' ) {
				$(this).parent().removeClass('input-wrapper--error');
			}
		});
}
	
}
function checkPass() {
// проверка на заполненность поля
if( $('[data-type="pass"]') ) {
	var inputFieldEmail = $('[data-type="pass"]');
		inputFieldEmail
		.on('keydown', function(){
			var keycode = window.event.keyCode; // 13 - enter 9 - tab 8 - backspace
			$(this).parent().removeClass('input-wrapper--error');
			if ( keycode == 8 || keycode == 13){
				if ( inputFieldEmail.val().length == 1 || inputFieldEmail.val().length == 0 ) {
					$(this).parent().addClass('input-wrapper--error');
				} 
			}
		})
		.on('focus', function(){
			$(this).parent().removeClass('input-wrapper--error');
			if ( inputFieldEmail.val().length == 1 ||  $(this).val().length != '' ) {
				$(this).parent().removeClass('input-wrapper--error');
			} 
		})
		.on('blur', function(){
			$(this).parent().addClass('input-wrapper--error');
			if ( inputFieldEmail.val().length == 1 ||  $(this).val().length != '' ) {
				$(this).parent().removeClass('input-wrapper--error');
			}
		});
	}
}

checkEmail();
checkField();
checkPass();

});