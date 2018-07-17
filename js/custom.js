$(function(){

	// var hf = function(){
	// 	var h_header = $('header').height();
	// 	var h_footer = $('footer').height();
	// 	$('.content').css({
	// 		'paddingTop': h_header,
	// 		'paddingBottom': h_footer
	// 	});
	// }

	// $(window).bind('load resize', hf);
	$('.header-telephone__button').on('click', function(){
		$('.overlay').show();
	});
	$('.popup-close').on('click', function(){
		$('.overlay').hide();
	});

});

   


