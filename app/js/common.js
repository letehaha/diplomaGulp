$(function() {

	$(window).load(function(){
		$("preloader-dots").fadeOut();
		$(".loader").delay(400).fadeOut("slow");
	})

	// animate toggle_menu
	$(".toggle_menu").click(function() {
	  $(".burger").toggleClass("active");
	});

	// animated elements

	$(".top_intro_center h1").addClass('animated fadeInDown');
	$(".top_intro_center p").addClass('animated fadeInUp');

	
	// enable/disable top_menu
	$(".toggle_menu").click(function(){
		if ($(".top_menu").is(":visible")){
			$(".top_menu").fadeOut(600);
			$(".top_menu li a").removeClass("fadeInUp animated");
			$(".top_intro_center").removeClass("it_opacity");
		} else{
			$(".top_menu").fadeIn(600);
			$(".top_menu li a").addClass("fadeInUp animated");
			$(".top_intro_center").addClass("it_opacity");
		};
	});

	// transform header-text
	$(window).scroll(function() {

		var st = $(this).scrollTop();

		$(".top_intro_center").css({
			"transform" : "translate(0%, " + st/6  + "%"
		});
	});
	

	//close top_menu on click items
	$(".top_menu ul a").click(function(){
		$(".top_menu").fadeOut(600);
		$(".burger").toggleClass("active");
	});

	//section WORKS, list items .active
	$(".s_portfolio li").click(function() {
		$(".s_portfolio li").removeClass("active");
		$(this).addClass("active");
	});


	$(".popup_content").magnificPopup({
		type:"inline"
	});


	//Scroll to id
	$("a[href='#home'], a[href='#about'], a[href='#works'], a[href='#contact'], a[href='#contact_message']").mPageScroll2id();

	//enable/disable contact-message
	$(".link_contact-message, .close-button").click(function(){
		if ($(".contact-message").is(":visible")){
			$(".contact-message").fadeOut(600);
		} else{
			$(".contact-message").fadeIn(600);
		};
	});

	//Animation load scrollbar
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},2000);
	});

	//Add target on link
	var root = location.protocol + '//' + location.host;
	$('a').not(':contains(root)').click(function(){
	    this.target = "_blank";
	});
	

	//forms


	$("#contact_form").submit(function() {
		$.ajax({
			url: "https://formspree.io/letehaha@gmail.com", 
    		method: "POST",
    		data: $(this).serialize(),
    		dataType: "json"
		}).done(function() {
			$('.input-submit span').fadeIn(100);
			setTimeout(function(){
				$('.input-submit span').fadeOut(800);
			}, 2000);
			$("#contact_form").trigger("reset");
		});
		return false;
	});


	$("#contact_form-message").submit(function() {
		$.ajax({
			url: "https://formspree.io/letehaha@gmail.com", 
    		method: "POST",
    		data: $(this).serialize(),
    		dataType: "json"
		}).done(function() {
			$('.input-submit span').fadeIn(100);
			setTimeout(function(){
				$('.input-submit span').fadeOut(800);
			}, 2000);
			$("#contact_form-message").trigger("reset");
		});
		return false;
	});
});
// setTimeout($('.input-submit span').show();, 2000);