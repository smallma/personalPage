jQuery(document).ready(function($){
	var contentSections = $('.cd-section'),
		navigationItems = $('#cd-vertical-nav a');

	updateNavigation();
	$(window).on('scroll', function(){
		updateNavigation();
	});

	//smooth scroll to the section
	navigationItems.on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    $('#facebookBtn').on('click', function () {
    	console.log('facebook Btn click');
    	window.open("https://www.facebook.com/smallma009");
    });

    $('#flickrBtn').on('click', function () {
    	console.log('flickr Btn click');
    	window.open("https://www.flickr.com/photos/raindslr/");
    });

    $('#twitterBtn').on('click', function () {
    	console.log('twitter Btn click');
    	window.open("https://twitter.com/Rain_Lin");
    });

    // //smooth scroll to second section
    // $('.cd-scroll-down').on('click', function(event){
    //     event.preventDefault();
    //     smoothScroll($(this.hash));
    // });

    // //open-close navigation on touch devices
    // $('.touch .cd-nav-trigger').on('click', function(){
    // 	$('.touch #cd-vertical-nav').toggleClass('open');
  
    // });
    // //close navigation on touch devices when selectin an elemnt from the list
    // $('.touch #cd-vertical-nav a').on('click', function(){
    // 	$('.touch #cd-vertical-nav').removeClass('open');
    // });

	function delayToShowWording(element, delaySec) {
		setTimeout(function () {
			element.className = 'in';
		}, delaySec);
	}

	setTimeout(function () {
		var elements = $('#welcome').find('i');
		var delayInterval = 150;
		var elementCount = 0;
		_.each(elements, function(element)  {
			var delaySec = delayInterval * elementCount;
			elementCount = elementCount + 1;
			delayToShowWording(element, delaySec);
		})
	}, 1000);

	$('#cameraBtn').on('click', function(event) {
		console.log('cameraBtn click');
		swal({
			title: "My Albume",
			text: "<iframe width='526' height='352' frameborder='0' src='http://files.slidemypics.com/app/js/iframe.html?bg_color=1f1f1f&amp;hash=9c9ded2857eb64b4bf4d1da1a1547397&amp;r=0.9035518339369446'></iframe>",
			html: true
		});
	});

	$('#modelBtn').on('click', function(event) {
		console.log('modelBtn click');
	});

	function updateNavigation() {
		contentSections.each(function(){
			$this = $(this);
			var activeSection = $('#cd-vertical-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;
			if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
				navigationItems.eq(activeSection).addClass('is-selected');
			}else {
				navigationItems.eq(activeSection).removeClass('is-selected');
			}
		});
	}

	function smoothScroll(target) {
        $('body,html').animate(
        	{'scrollTop':target.offset().top},
        	600
        );
	}
});