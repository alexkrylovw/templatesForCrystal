$(function () {
	$("a.youtube").YouTubePopup({ autoplay: 1 });
});

$.fn.YouTubePopup.defaults = {
	'youtubeId': '',
	'title': '',
	'useYouTubeTitle': false,
	'idAttribute': 'rel',
	'cssClass': '',
	'draggable': false,
	'modal': true,
	'width': 1024,
	'height': 768,
	'hideTitleBar': true,
	'clickOutsideClose': true,
	'overlayOpacity': 0.8,
	'autohide': 2,
	'autoplay': 1,
	'color': 'red',
	'color1': 'FFFFFF',
	'color2': 'FFFFFF',
	'controls': 1,
	'fullscreen': 1,
	'loop': 0,
	'hd': 1,
	'showinfo': 0,
	'theme': 'dark',
	'showBorder': false
};