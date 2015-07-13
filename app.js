$(document).ready(function() {
	$('#home-link').click(function() {
		$('#detail-content').load('test1.html');
		$('#image-container').removeClass().addClass('image-container1');
	});
	$('#about-link').click(function() {
		$('#detail-content').load('test2.html');
		$('#image-container').removeClass().addClass('image-container2');
	});
	$('#location-link').click(function() {
		$('#detail-content').load('test3.html');
		$('#image-container').removeClass().addClass('image-container3');
	});
	$('#hours-link').click(function() {
		$('#detail-content').load('test4.html');
		$('#image-container').removeClass().addClass('image-container4');
	});

});