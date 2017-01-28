$(document).ready(function(){

	//----------------------------------------------
            
   var backToTop = $('<a>', { 
			href: '#top', 
			class: 'back-to-top',
			html: '<i class="fa fa-angle-up fa-3x"></i>'
		});

	backToTop
		.hide()
		.appendTo('body')
		.on('click', function() {
			$('html,body').animate({ scrollTop: 0 }, 2000);
		});

	var win = $(window);
	win.scroll(function() {
		if ( win.scrollTop() >= 500 ) backToTop.fadeIn();
		else backToTop.hide();
	});

	 //----------------------------------------------
	 
		var nav = $('.nav'),
		navLinks = nav.find('a');

	navLinks.on('click', function(event)
	{
		event.preventDefault();
		
		var id = this.hash;
		$('html,body').animate({ scrollTop: $(id).offset().top - 70 },2000);
		$('.nav li').removeClass('showing');
	}); 

	//----------------------------------------------
	
	

	$('.menu').on('click', function(){
				
				$('.nav li').toggleClass('showing');
			});


 });