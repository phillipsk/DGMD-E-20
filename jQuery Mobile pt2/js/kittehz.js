$(document).ready(function(){
	$('main').bind('swipeleft', function(event){
		$('#kitteh').removeClass().addClass('one');
	}); //end swipe left

	$('main').bind('swiperight', function(event){
		$('#kitteh').removeClass().addClass('two');
	}); //end swipe right

	$('main').bind('taphold', function(event){
		$('#kitteh').removeClass().addClass('lots');
	}); //end taphold

	$(window).on('orientationchange', function(){
		if(window.orientation == 0) {
			$('#kitteh').removeClass().addClass('puppy');
		} else {
			$('#kitteh').removeClass().addClass('three');
		}
	}); //end orientationchange

}); //end ready









