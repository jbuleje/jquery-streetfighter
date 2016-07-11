$(document).ready(function() {
	doIntro();
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left':'1020px'},
			500,
			function(){
				$(this).hide();
				$(this).css('left','520px');
			}
		);
		
	})
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
		//ryu goes back to his ready position		
	})
	$(document).keydown(function(e) {
		if (e.keyCode == 88) {
			//playcool();
				$('.ryu-still').hide();
				$('.ryu-ready').hide();
				$('.ryu-cool').show();
			}
	}).keyup(function(e) {
    if (e.keyCode == 88) {
      //$('#cool')[0].pause();
      //$('#cool')[0].load();
      $('.ryu-cool').hide();
      $('.ryu-still').show();
    }
	});

});
function doIntro () {
	$('#theme-song')[0].volume=0.2;
	$('#theme-song')[0].load();
	$('#theme-song')[0].play();
}
function playHadouken () {
	$('#hadouken-sound')[0].volume=0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}
