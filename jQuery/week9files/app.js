// Video 1
$(document).ready(function(){
	$('#apple-btn').click(function(){
		console.log('The apple button was clicked!');
		alert('We love apples!');
	}); //end apple click

	$('#orange-btn-off').click(function(){
		$('#orange-img').hide(1000);
	}); //end orange off

	$('#orange-btn-on').click(function(){
		$('#orange-img').show(1000);
	}); //end orange off

	//Video 2
	//$('select something').hover(function(){}, function(){});
	$('#banana-btn').hover(function(){
		// hover on state
		console.log('You hovered over the banana button!');
		$('#banana-btn').css({
			backgroundColor: 'orange'
		}); //end css
	}, 
	function(){
		//hover off state
		console.log('The banana button was left behind!');
		$('#banana-btn').css({
			backgroundColor: 'blue'
		}); //end css
	}); //end banana hover

	$('#apple-img').hover(function(){
		$('#apple-img').attr({
			'src': 'img/apples-400.jpg'
		});
	}, function(){
		$('#apple-img').attr({
			'src': 'img/apple-300.jpg'
		});
	}); //end apple hover

	//Video 3 
	$('#cherry-btn').click(function(){
		$('#cherry-img').animate({
			opacity: '0.25',
			height: 'toggle'
		}, 5000, 'swing', function(){
			$('#cherry-img').css({
				opacity: '1'
			}); //end image css
			$('#cherry-btn').css({
				backgroundColor: 'red'
			}); //end button css
		}); //end animate
	}); //end cherry animate

	//Video 4
	$('#jumbotron-btn').click(function(){
		$('#jumbotron-img').removeClass('oval').addClass('rounded');
		$('.jumbotron h1').text('Yummy fruit!');
		$('.jumbotron p').prepend('<p>This text goes before EVERY paragraph. Change the selector to do something different!</p>');
		$('.jumbotron p:last').append('<p>You clicked the button and made a new paragraph!</p>');
		$('#jumbotron-btn').replaceWith('<p style="color: green; font-weight: bold;">Success! You clicked the button.</p>');

	}); //end jumbo click

}); //end ready






















