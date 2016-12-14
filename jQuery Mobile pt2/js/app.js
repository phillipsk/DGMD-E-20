// form jquery
$(document).ready(function(){
	$('button').tap(function(submit){
		if($('#name').val().length == 0) {
			$('.noname').text('Please enter your name.');
			submit.preventDefault();
		} else {
			alert("If this form had an action, you would have submitted it.");
			submit.preventDefault();
		}
	}); //end click
	$('#name').tap(function(){
		$('.noname').text('');
	}); //end click
}); //end ready