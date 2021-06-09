$(document).ready(function(){
	
	$('.icon-eye').on('click',function(event){

		event.preventDefault();
		// $(this).parent().find('.icon-eye--uncrossed').toggleClass('icon-eye--show');
		// $(this).parent().find('.icon-eye--crossed').toggleClass('icon-eye--show');

		$(this).toggleClass('icon-eye--crossed');

		if ( $(this).hasClass('icon-eye--crossed') ) {
			$(this).parent().find('#input-pass, #input-new-pass').attr("type", "text");
		} else {
			$(this).parent().find('#input-pass, #input-new-pass').attr("type", "password");
		}
	});
	
})