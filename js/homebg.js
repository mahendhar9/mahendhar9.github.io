$(document).ready(function(){
	$("#home").particleground({
		dotColor: '#ecf0f1',
        lineColor: '#263142',
        density:12000
                    
	});

	new WOW().init();	

	$("#all9").click(function(){
		$("#calci1").fadeIn(1500);
		$("#psd1").fadeIn(1500);
	});

	$("#psd9").click(function(){
		$("#calci1").fadeOut(1500);
		$("#psd1").fadeIn(1500);
	});

	$("#calci9").click(function(){
		$("#psd1").fadeOut(1500);
		$("#calci1").fadeIn(1500);
	});


    $('[data-toggle="tooltip"]').tooltip(); 

    
  $('nav a[href*=#], #home a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1000);
       return false;
      }
    }
  });

	$('body').scrollspy({ target: '#navbar' });

  $('nav').affix({
	  offset: {
	    top: 100
	  }
	})


	// $("#sun").click(function(){
	// 	$("#contact-me").css("background-image", "url('../img/bg9.jpg')").fadeIn();
	// 	$("#contact-me h2").css("color","#fffff");
	// 	$("#contact-me p strong").css("color","#fffff");

	// });


	// function car(){
	// 	$(".beetle").css({left:'-128px'});
	//     $(".beetle").animate({left: "+=100%"}, 15000);
	// }

	// car();

	// function moveBackCar() {
	// 	$(".beetle").parent().css(position: 'relative');
	// 	$(".beetle").css({position:'absolute', left:0%, top:-12%});
	// }

	// moveBackCar();

	// $.when(car()).done(function() {
 	//    moveBackCar();
	// });


	
	// setInterval(function(){car()}, 5000);

});