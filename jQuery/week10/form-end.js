$(document).ready(function(){
	$('button').click(function(submit){
		if ($('#name').val().length == 0) {
			//console.log('you forgot the name field!');
			$('label[for="name"]').html('Please enter your name.').addClass('error');
			submit.preventDefault();
		}
	}); //end click

	$('#name').focusout(function(){
		if ($('#name').val().length == 0) {
			$('label[for="name"]').html('Please enter your name.').addClass('error');
		} else {
			$('label[for="name"]').html('Your name (required)').removeClass('error');
		}
	}); //end focusout

	$('#filling').change(function(){
		if ($('#filling').val() == 'apple') {
			$('.msg').html('Apples are a great seasonal choice!');
		} else if ($('#filling').val() == 'blueberry') {
			$('.msg').html('Blueberries are my favorite!');
		} else if ($('#filling').val() == 'cherry') {
			$('.msg').html('Our cherries are fresh, not from a can.');
		} else if ($('#filling').val() == 'pumpkin') {
			$('.msg').html('Happy Thanksgiving!');
		} else {
			$('.msg').html('Never heard of that filling. Better call and see if we have it.');
		}
	}); //end change

}); //end ready













