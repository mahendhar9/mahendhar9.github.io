$(document).ready(function(){
	$("#home").particleground({
		dotColor: '#ecf0f1',
		lineColor: '#263142',
		density:12000

	});

	$('#voiceModal').modal('show');

	if (annyang) {
		var commands = {
			'go to *term': function(term) {
				console.log('Go to ' + term.toString());
				$('#voice-' + term.toString() + ' a').click();
			},

      ':projectCategory projects': function(projectCategory) {
      	console.log(projectCategory);
        if(projectCategory.toString() == "all") {
          console.log("See " + projectCategory.toString() + ' projects')
          $("#all9").click();
        } else if(projectCategory.toString().toLowerCase() == "html") {
        	 console.log("See " + projectCategory.toString() + ' projects')
          $("#html9").click();
        } else if(projectCategory.toString().toLowerCase() == "javascript") {
        	 console.log("See " + projectCategory.toString() + ' projects')
          $("#javascript9").click();
        } else if(projectCategory.toString().toLowerCase() == "rails") {
        	 console.log("See " + projectCategory.toString() + ' projects')
          $("#rails9").click();
        } else if(projectCategory.toString().toLowerCase() == "angular") {
        	 console.log("See " + projectCategory.toString() + ' projects')
          $("#angular9").click();
        }
      }
		};
		annyang.addCommands(commands);

		annyang.start();
	}

	new WOW().init();	

	$("#all9").click(function(ev){
		ev.preventDefault();		
		$('.all').fadeIn(1000);
	});

	$("#html9").click(function(ev){
		ev.preventDefault();		
		$('.all').hide();
		$('.html').fadeIn(1000);		
	});

	$("#javascript9").click(function(ev){
		ev.preventDefault();		
		$('.all').hide();
		$('.javascript').fadeIn(1000);		
	});

	$("#rails9").click(function(ev){
		ev.preventDefault();		
		$('.all').hide();
		$('.rails').fadeIn(1000);		
	});

	$("#angular9").click(function(ev){
		ev.preventDefault();		
		$('.all').hide();
		$('.angular').fadeIn(1000);		
	});

	$("#mystartup9").click(function(ev){
		ev.preventDefault();		
		$('.all').hide();
		$('.startup').fadeIn(1000);		
	});

	$("#wordpress9").click(function(ev){
		ev.preventDefault();		
		$('.all').hide();
		$('.eureka').fadeIn(1000);		
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

	$('body').scrollspy({ target: 'nav' });

	$('nav').affix({
		offset: {
			top: 100
		}
	})



});