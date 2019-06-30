var player1 = videojs('player1');
var player2 = videojs('player2');
var player3 = videojs('player3');
var player4 = videojs('player4');
var player5 = videojs('player5');

var playBtn1 = $('#play1');
var playBtn2 = $('#play2');
var playBtn3 = $('#play3');
var playBtn4 = $('#play4');
var playBtn5 = $('#play5');

var rewindBtn1 = $('#rewind1');
var rewindBtn2 = $('#rewind2');
var rewindBtn3 = $('#rewind3');
var rewindBtn4 = $('#rewind4');
var rewindBtn5 = $('#rewind5');

var popupShow1 = $('.popup');
var popupShow2 = $('.popup');
var popupShow3 = $('.popup');
var popupShow4 = $('.popup');
var popupShow5 = $('.popup');

var popupRemove1 = $('.remove');
var popupRemove2 = $('.remove');
var popupRemove3 = $('.remove');
var popupRemove4 = $('.remove');
var popupRemove5 = $('.remove');

var doneBtn1 = $('#done1');
var doneBtn2 = $('#done2');
var doneBtn3 = $('#done3');
var doneBtn4 = $('#done4');
var doneBtn5 = $('#done5');

var doneCheck1 = $('#check1');
var doneCheck2 = $('#check2');
var doneCheck3 = $('#check3');
var doneCheck4 = $('#check4');
var doneCheck5 = $('#check5');



$( "a" ).click(function( event ) {
  event.preventDefault();
  $( "<h3>" )
    .append( "default " + event.type + " prevented" )
    .appendTo( "#log" );
});

player1.on('ready', function () {

	playBtn1.click(function () {

		//play-btn
		if (!player1.paused()) {
			player1.pause();
		} else {
			player1.play();
		}
	});

	//rewind
	rewindBtn1.click(function () {
		var time = player1.currentTime();
		player1.currentTime(time - 2);

	});
	
	doneBtn1.click(function(){
		popupShow1.css({'display' : "block"})
		
		doneBtn1.css({'display' : "none"})
		doneCheck1.css({'opacity' : "1"})
	});
	
	popupRemove1.click(function(){
		popupShow1.css({'display' : "none"})
	
	});
});

player2.on('ready', function () {
	
	playBtn2.click(function () {

		//play-btn
		if (!player2.paused()) {
			player2.pause();
		} else {
			player2.play();
		}
	});

	//rewind
	rewindBtn2.click(function () {
		var time = player2.currentTime();
		player2.currentTime(time - 2);

	});
	
	doneBtn2.click(function(){
		popupShow2.css({'display' : "block"})
		
		doneBtn2.css({'display' : "none"})
		doneCheck2.css({'opacity' : "1"})
	});

	popupRemove2.click(function(){
		popupShow2.css({'display' : "none"})
	
	});
	
});

player3.on('ready', function () {
	
	playBtn3.click(function () {

		//play-btn
		if (!player3.paused()) {
			player3.pause();
		} else {
			player3.play();
		}
	});

	//rewind
	rewindBtn3.click(function () {
		var time = player3.currentTime();
		player3.currentTime(time - 2);

    });
	
	doneBtn3.click(function(){
		popupShow3.css({'display' : "block"})
		
		doneBtn3.css({'display' : "none"})
		doneCheck3.css({'opacity' : "1"})
	});
	
	
	popupRemove3.click(function(){
		popupShow3.css({'display' : "none"})

	});
});

player4.on('ready', function () {

	playBtn4.click(function () {

		//play-btn
		if (!player4.paused()) {
			player4.pause();
		} else {
			player4.play();
		}
	});

	//rewind
	rewindBtn4.click(function () {
		var time = player4.currentTime();
		player4.currentTime(time - 2);

	});
	
	doneBtn4.click(function(){
		popupShow4.css({'display' : "block"})
		
		doneBtn4.css({'display' : "none"})
		doneCheck4.css({'opacity' : "1"})
	});
	
	popupRemove4.click(function(){
		popupShow4.css({'display' : "none"})

	});
	
});

player5.on('ready', function () {

	playBtn5.click(function () {

		//play-btn
		if (!player5.paused()) {
			player5.pause();
		} else {
			player5.play();
		}
	});

	//rewind
	rewindBtn5.click(function () {
		var time = player5.currentTime();
		player5.currentTime(time - 2);

	});

	doneBtn5.click(function(){
		popupShow5.css({'display' : "block"})
		
		doneBtn5.css({'display' : "none"})
		doneCheck5.css({'opacity' : "1"})
	});

	popupRemove5.click(function(){
		popupShow5.css({'display' : "none"})
	
	});
	
});



$("#accordion").accordion({
	header: ".accordionHeader",
	heightStyle: ""
});


$('.toggle').click(function () {
	$('.toggleBall').toggleClass('active')

	$('body').toggleClass('night')
	$( '#logo2' ).toggleClass( 'erop' );
});
