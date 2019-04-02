$(document).ready(function() {

	// Scrollbar боковой панели (меню)
	// $(".left-panel").niceScroll(".content-wrapper",{
	// 		cursorcolor:"#ACACAC",
	// 		cursorwidth:"8px",
	// 		background:"#DBDBDB",
	// 		cursorborder:"none",
	// 		nativeparentscrolling: false,
	// 		cursorfixedheight: 70,
	// 		scrollspeed: 100,
	// 		autohidemode: false,
	// 		bouncescroll: false,
	// 		cursorborderradius:4
	// });


	// Убрать/Добавить боковую панель (меню)

	$('#ui-nav-toggle').click(function(){
		$('body').toggleClass('ui-nav--hidden');
		$('#ui-nav-toggle ~ .container').toggleClass('container--left');
	});

	var pathname = location.pathname;
	$("#ui-navifation a").each(function () {
		var link = $(this);
		var linkHref = link.attr('href');
		if(linkHref && pathname.indexOf(linkHref) !== -1){
			link.addClass("active");
			$("#ui-navifation").scrollTop(link.offset().top);
		}
	});
});
