$(document).ready(function(){
	$('.album, .aboutdesign').on('click', function(){
		$(this).addClass('expanded');
		$(this).closest('.main').addClass('expandeditem');
	}).find('.photoThumbnails li').on('click', function (){
		var imageId = $(this).data('image');
		alert (imageId);
		$('.' + imageId).toggleClass('show');
	});



});

