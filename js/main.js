/*--Mobile Navigation Function--*/
<!--Mobile Nav function code taken from the same tutorial in index.html(line 38)-->
jQuery(document).ready(function($){
	//move nav element position according to window width
	moveNavigation();
	$(window).on('resize', function(){
		(!window.requestAnimationFrame) ? setTimeout(moveNavigation, 300) : window.requestAnimationFrame(moveNavigation);
	});

	//mobile version - open/close navigation
	$('.nav-trigger').on('click', function(event){
		event.preventDefault();
		if($('header').hasClass('nav-is-visible'));
		
		$('header').toggleClass('nav-is-visible');
		$('.main-nav').toggleClass('nav-is-visible');
		<!--Toggle Nav is visible for all sections of pages-->
		$('#home,#overview,#demoreel,#feature,#social,#footer,#project-home,#project-feature,#project-design-requirements,#project-structure-diagram,#how-it-works-video, #how-it-works,#gallery,#contact,#contact-form,#about-me-home,#about-me-description,#about-me-interest').toggleClass('nav-is-visible');
	});

	function moveNavigation(){
		var navigation = $('.main-nav-wrapper');
  		var screenSize = checkWindowWidth();
        if ( screenSize ) {
        	//desktop screen - insert navigation inside header element
			navigation.detach();
			navigation.insertBefore('.nav-trigger');
		} else {
			//mobile screen - insert navigation after #home element
			navigation.detach();
			<!--Insert for all pages-->
			navigation.insertAfter('#home,#project-home,#contact,#about-me-home');
		}
	}
	function checkWindowWidth() {
		var mq = window.getComputedStyle(document.querySelector('header'), '::before').getPropertyValue('content').replace(/"/g, '').replace(/'/g, "");
		return ( mq == 'mobile') ? false : true;
	}
});

/* Preloading image-Loading screen */
function preLoad() {
	$('.preload').fadeOut();
	console.log("Page loaded");
};

/* SCROLL Sticky nav for Desktop only */
$(document).ready(function(){
	$(window).scroll(function() {
	if ($(window).scrollTop() > 100 && $(window).width() > 800){
	
 		$('.main-nav').addClass('sticky');
		$('.main-nav li a').addClass('stickfont');
		$('.logo img').attr('src', 'images/logo-black.png');
		console.log("Sticky header only works for screen bigger than 800px");
  } else {
    
		$('.main-nav').removeClass('sticky');
		$('.main-nav li a').removeClass('stickfont');
		$('.logo img').attr('src', 'images/logo.png');
		};   	
	});	
});

/* Floating-Arrow Scroll DOWN effect */
/*Code taken from the tutorial-http://www.abeautifulsite.net/smoothly-scroll-to-an-element-without-a-jquery-plugin-2/*/
$('a[href^="#"]').on('click', function(event) {
	 var target = $( $(this).attr('href') );
	 if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

/*----YOUTUBE Video-1 DEMOREEL Play Btn function---*/
var videoURL1 = $('#video-1').prop('src');
	$(document).ready(function() {
  		$('#play-vid-btn-1').on('click', function(ev) {
			$(".video-container-1").fadeIn("slow");
			$(".video-container-1 iframe").fadeIn("slow");
			$(".video-container-1 object").fadeIn("slow");
			$(".video-container-1 embed").fadeIn("slow");
			$(".close-vid-btn-1").fadeIn("slow");
			$("body").css("overflow","hidden");
			 videoURL1 += "&autoplay=1";
			$('#video-1').prop('src',videoURL1);
   			 ev.preventDefault();
			 console.log("Video 1 Display Block");
    	});
	});
/*----Close Video-1 DEMOREEL Btn function---*/	
	$(document).ready(function() {
			$(".close-vid-btn-1").on('click', function(ev) {
				$(".video-container-1").fadeOut("slow");
				$(".video-container-1 iframe").fadeOut("slow");
				$(".video-container-1 object").fadeOut("slow");
				$(".video-container-1 embed").fadeOut("slow");
				$(".close-vid-btn-1").fadeOut("slow");
				$("body").css("overflow","visible");
				videoURL1 = videoURL1.replace("&autoplay=1", "");
				$('#video-1').prop('src','');
				$('#video-1').prop('src',videoURL1); 
    			ev.preventDefault();
	        	console.log("Video 1 Closed");
	    	});
		});
	
/*----YOUTUBE Video-2 HOW IT WORKS Play Btn function---*/
var videoURL2 = $('#video-2').prop('src');
	$(document).ready(function() {
  		$('#play-vid-btn-2').on('click', function(ev) {
			$(".video-container-2").fadeIn("slow");
			$(".video-container-2 iframe").fadeIn("slow");
			$(".video-container-2 object").fadeIn("slow");
			$(".video-container-2 embed").fadeIn("slow");
			$(".close-vid-btn-2").fadeIn("slow");
			$("body").css("overflow","hidden");
			 videoURL2 += "&autoplay=1";
			$('#video-2').prop('src',videoURL2);
   			 ev.preventDefault();
			 console.log("Video 2 Display Block");
    	});
	});
/*----Close Video-2 HOW IT WORKS Btn function---*/	
	$(document).ready(function() {
			$(".close-vid-btn-2").on('click', function(ev) {
				$(".video-container-2").fadeOut("slow");
				$(".video-container-2 iframe").fadeOut("slow");
				$(".video-container-2 object").fadeOut("slow");
				$(".video-container-2 embed").fadeOut("slow");
				$(".close-vid-btn-2").fadeOut("slow");
				$("body").css("overflow","visible");
				videoURL2 = videoURL2.replace("&autoplay=1", "");
				$('#video-2').prop('src','');
				$('#video-2').prop('src',videoURL2); 
    			ev.preventDefault();
	        	console.log("Video 2 Closed");
	    	});
		});
/*--------PROJECT LIGHTBOX CLICK FUNCTION--------*/
$(function(){
    $(".box-1").click(function(){
        $(".lightbox#box-1").css('visibility','visible');
		$(".lightbox#box-1").fadeIn("slow");
		console.log("lightbox clicked");
    });
	$(".box-2").click(function(){
        $(".lightbox#box-2").css('visibility','visible');
		$(".lightbox#box-2").fadeIn("slow");
		console.log("lightbox clicked");
    });
	$(".box-3").click(function(){
        $(".lightbox#box-3").css('visibility','visible');
		$(".lightbox#box-3").fadeIn("slow");
		console.log("lightbox clicked");
    });
	$(".box-4").click(function(){
        $(".lightbox#box-4").css('visibility','visible');
		$(".lightbox#box-4").fadeIn("slow");
		console.log("lightbox clicked");
    });
	$(".box-5").click(function(){
        $(".lightbox#box-5").css('visibility','visible');
		$(".lightbox#box-5").fadeIn("slow");
		console.log("lightbox clicked");
    });
	$(".box-6").click(function(){
        $(".lightbox#box-6").css('visibility','visible');
		$(".lightbox#box-6").fadeIn("slow");
		console.log("lightbox clicked");
    });
    
});	

/*--------LIGHTBOX CLOSE FUNCTION--------*/	
$(function(){
    $(".lightbox-close").click(function(){
        $(".lightbox").fadeOut("slow");
    });
    
});


