$(document).ready(function(){
	console.log("document loaded!");
	$('aside').fadeOut(5000).fadeIn(1000);
	$('header').slideUp(2000).slideDown(1000);
	$('#menu-1544, #menu-1545').css({
		border: '1px solid red',
		fontFamily: 'Arial, sans-serif',
		fontSize: '1.5em'
	}); //end menu css
	$('p:even').css({
		color: 'white',
		backgroundColor: 'green'
	});// end p css
	$('footer ul li:last, nav ul li:first, aside ul li:last').fadeOut(1000).fadeIn(1000);
}); //end ready