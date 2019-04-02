$(document).ready(function(){

	if (document.getElementsByClassName('job-title-sticky-wrapper').length > 0) {

		let $fixedBlock = $('.job-title-sticky-wrapper'),
			headerHeight = $('.bg-header').outerHeight(),
			fixedPosition = $fixedBlock.offset().top - headerHeight,
			checkpoint = false;	

		

		$(document).on('scroll', function(){
			let scrollPosition = $(document).scrollTop();
			
			if ( scrollPosition >= fixedPosition) {
				if (checkpoint = false)

					checkpoint = true;
					$fixedBlock.addClass('job-title-sticky-wrapper--fixed');
					$fixedBlock.css('top', headerHeight);
					$('.container--padding-top').css('padding-top', $fixedBlock.outerHeight() + headerHeight);

		
			} else {

				checkpoint = false;	
				$fixedBlock.removeClass('job-title-sticky-wrapper--fixed');
				$fixedBlock.removeAttr('style');
				$('.container--padding-top').removeAttr('style');
				
			}; 
		
		});

	}

}); 