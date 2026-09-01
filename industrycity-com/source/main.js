jQuery(document).ready(function($){

//Bttns
const loadButtonsSCroll = document.querySelectorAll('.load-more-box .basic-button:not(.no-hidden), .buttons-events .basic-button:first-child');

//Intersection contentObserver
if ('IntersectionObserver' in window) {
	let optionsContent = {
	  rootMargin: '-10px',
	  threshold: 0.2
	}

	function intersectionContent(entries) {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.click();
			}
		});
	}
	contentObserver = new IntersectionObserver(intersectionContent, optionsContent);
	loadButtonsSCroll.forEach(content => {
		contentObserver.observe(content);
	});

}

// Target the div elements containing the word 'free'
var $targetDivs = $('div.pill:contains("Free")');

// Do something with the selected divs (e.g., add a class, change styling, etc.)
$targetDivs.css('background', '#E7E971');

$("#page a, .site-footer a").click(function(event) {
		 //event.preventDefault();
		var link = $(this).attr("href");
		var target = $(this).attr("target");

		if (link.startsWith('#') || link.startsWith('javascript:') || $(this).closest('body').find('div[data-uk-lightbox]').length > 0 ) {


			//Don't run animation.

		} else if (link.startsWith('mailto')) {
			window.location.href = link;

		} else if (link.startsWith('tel')) {
			window.location.href = link;

		} else {


			if (target == '_blank') {
				window.open(link, '_blank');
			} else {

				// Check if browser is Safari, because location.href action interupts .screen-2 animation to finish
				var ua = navigator.userAgent.toLowerCase();

				if (ua.indexOf('safari') != -1) {

					if (ua.indexOf('chrome') > -1) {
						setTimeout(function () {
							$('body').addClass('invisible');

						}, 100);
						setTimeout(function() {
							window.location.href = link;
						}, 300);

					} else {
						setTimeout(function () {
							$('body').addClass('invisible');
						}, 100);
						setTimeout(function() {
							window.location.href = link;
						}, 300);

						window.onpageshow = function(event) {
							if (event.persisted) {
								window.location.reload()
							}
						};
					}

				} else {

					if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){

						setTimeout(function () {
							$('body').addClass('invisible');
						}, 100);
						setTimeout(function() {
							window.location.href = link;
						}, 300);

						window.onpageshow = function(event) {
							if (event.persisted) {
								window.location.reload()
							}
						};

					} else {

						setTimeout(function () {
							$('body').addClass('invisible');
						}, 100);
						setTimeout(function() {
							window.location.href = link;
						}, 300);

					}

				}

			}

		}
	});


	const currentUrl = window.location.href;
	if(currentUrl.includes('?eventDisplay=past')){
		$('.top-arrow-desktop').removeClass('events');
	}


	$('body').addClass('visible');

	$('.top-bar, .sidebar, .bottom-bar, .site, #masthead').addClass('loaded');

//galery-slider (hero) on single-explore.php
if ($('.gallery-swiper-explore').length > 0) {
	$('.gallery-swiper-explore').each(function(index){
		var gallerySwiper = new Swiper($(this)[0],{
			pagination: {
				el: '.swiper-pagination',
				type: 'custom',
				renderCustom: function (swiper, current, total) {
					return current + ' / ' + total;
				},
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			speed: 600,
			slidesPerView: 1,
			loop: true,
			spaceBetween: 0
		});
	});
}

//lease button in bottom bar < 480px
if ($(window).width() < 480) {
	$('.lease-btn').html('Lease');
	$('#mapButton').html('Map');
} else {
	$('.lease-btn').html('Lease at IC');
	$('#mapButton').html('Explore Map');
}


$(window).on('orientationchange', function() {
	if ($(window).width() < 480) {
		$('.lease-btn').html('Lease');
		$('#mapButton').html('Map');
	} else {
		$('.lease-btn').html('Lease at IC');
		$('#mapButton').html('Explore Map');
	}
});

	// When ajax start function
	$(document).ajaxStart(function() {
		$('.custom-loader').show();});    //loader show
	$(document).ajaxStop(function() {
		$('.custom-loader').hide();   //loader hide
	});
	// When ajax start function

	$('.open-menu').click(function(e){
		e.preventDefault();
		if($(this).hasClass('open')) {
			$(this).removeClass('open');
			$('.main-navigation').removeClass('open');
			$('.content').removeClass('open');
			$('body').removeClass('uk-overflow-hidden');
			$('.header-form-mobile-view').removeClass('form-show');
		} else {
			$(this).addClass('open');
			$('.main-navigation').addClass('open');
			$('.content').addClass('open');
			$('body').addClass('uk-overflow-hidden');
			$('.header-form-mobile-view').addClass('form-show');
		}
	});

	$('.searchtrigger').click(function(e){
		e.preventDefault();
		if($(this).hasClass('open')) {
			$(this).removeClass('open');
			$('.search-overlay').removeClass('open');
			$('.search-close').removeClass('open');
			$('body').removeClass('uk-overflow-hidden');
		} else {
			$(this).addClass('open');
			$('.search-overlay').addClass('open');
			$('.search-close').addClass('open');
			$('body').addClass('uk-overflow-hidden');
		}
	});

	$('.search-close').click(function(e){
		if($(this).hasClass('open')) {
			$(this).removeClass('open');
			$('.search-overlay').removeClass('open');
			$('body').removeClass('uk-overflow-hidden');
			$('.searchtrigger').removeClass('open');
		} else {
			$(this).addClass('open');
			$('.search-overlay').addClass('open');
			$('body').addClass('uk-overflow-hidden');
			$('.searchtrigger').addClass('open');
		}
	});

	//All levels Multilevel Menu on Mobile
	if($(window).width() < 1024) {
		$('#primary-menu li.menu-item-has-children > a').click(function(e){
			e.preventDefault();
			if($(this).parent().find('> .sub-menu').hasClass('open')) {
				$(this).parent().removeClass('active');
				$(this).parent().find('> .sub-menu').removeClass('open');
				$(this).parent().find('> .sub-menu').slideUp(500);
			} else {
				$(this).parent().addClass('active');
				$(this).parent().find('> .sub-menu').addClass('open');
				$(this).parent().find('> .sub-menu').slideDown(500);
			}
		});
	}

	// Load More Press Releases
	$('.press-releases-section .see-more-button').click(function(){
		var page = parseInt($(this).attr('data-page')) + 1 ;
		$(this).attr('data-page',page);
		var allPages = parseInt($(this).attr('data-all-pages'));

		$.ajax({
			url: ajax_data.ajax_url,
			data: {
				'action':'load_more_press_releases',
				'page' : page
			},
			beforeSend: function(){
			},
			complete: function(){
			},
			success:function(data) {
				if(page >= allPages){
					$('.btn-wrp').hide();
				}
				$('.press-releases-section .posts-wrp').append(data);
			}, error: function(errorThrown){
				// console.log(errorThrown);
			}
		});
	});
	// END Load More Press Releases

	//stop many submits
	$('.wpcf7-submit').on('click',function(){
		$(this).css('pointer-events','none');
	});
	document.addEventListener( 'wpcf7submit', function( event ) {
		$('.wpcf7-submit').css('pointer-events','');
	}, false );


	// Hero margin top
	if ($('.site-main').children(":first").hasClass('ci-hero') || $('.entry-content').children(":first").hasClass('ci-hero') || $('#default-page-header').length > 0) {
		var header_height = $("#masthead").height() * -1;
		if ($('#default-page-header').length > 0) {
			$("#default-page-header").css({"margin-top" : header_height});
		} else {
			$(".ci-hero").css({"margin-top" : header_height});
		}
	}

//galery-slider on single tenants
if ($('.mySwiperBusines').length > 0) {
	$('.mySwiperBusines').each(function(index){
		var gallerySwiper = new Swiper($(this)[0],{
			pagination: {
				el: '.swiper-pagination',
				type: 'custom',
				renderCustom: function (swiper, current, total) {
					return current + ' / ' + total;
				},
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			speed: 600,
			slidesPerView: 1,
			loop: false,
			spaceBetween: 0
		});
	});
}

//mobile swiper
	if ($('.featured-events-swiper').length > 0) {
		var featuredEventsSwiper = new Swiper('.featured-events-swiper', {
			slidesPerView: 1.3,
			spaceBetween: 0,
			loop: true,
			breakpoints : {
				// when window width is >= 480px
				480: {
					slidesPerView: 2.5,
					spaceBetween: 0,
					//loop: true,
				},
				// when window width is >= 768px
				768: {
					slidesPerView: 4,
					spaceBetween: 0,
					loop: false,
				},

			},
		});
	}

	if ($('.special-featured-events-swiper').length > 0) {
		var sfeaturedEventsSwiper = new Swiper('.special-featured-events-swiper', {
			slidesPerView: 1.3,
			spaceBetween: 0,
			loop: true,
			breakpoints : {
				// when window width is >= 480px
				480: {
					slidesPerView: 2.5,
					spaceBetween: 0,
					//loop: true,
				},
				// when window width is >= 768px
				768: {
					slidesPerView: 3,
					spaceBetween: 0,
					loop: false,
				},

			},
		});
	}

	// Keep reading
	$('.keep-reading').click(function (e) {
		e.preventDefault();
		if($('.content-with-image').hasClass('all')){
			$('.content-with-image').removeClass('all')
			$('.keep-reading span').text('Keep reading')
		}else {
			$('.content-with-image').addClass('all')
			$('.keep-reading span').text('Read less')
		}

	})
	// End Keep reading

	// swipers with thumbnails(related swipers)
	var swiperWithThumbObject = {};
	$('.ic-thumbnail-swiper').each(function(index){
		swiperWithThumbObject[index] = new Swiper($(this)[0],{
			loop: true,
			spaceBetween: 40,
			slidesPerView: 4,
			freeMode: true,
			watchSlidesProgress: true,
		});
	});
	$('.ic-main-swiper').each(function(index){
		var columnSwiper = new Swiper($(this)[0],{
			loop: true,
			spaceBetween: 10,
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			thumbs: {
				swiper: swiperWithThumbObject[index],
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'custom',
				renderCustom: function (swiper, current, total) {
					return current + ' / ' + total;
				},
			},
		})
	});


	var swiperExplore = new Swiper(".swiper-explore", {
		pagination: {
			el: ".swiper-pagination",
			type: "fraction",
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});

	$("a[href='#popupContact']").on('click', function () {
		$('html,body').animate({
			scrollTop: 0
		}, 0);
		$("body").addClass("show-get-in-touch-popup");
	})
	$("[data-comp='close-popup']").on('click', function () {
		$("body").removeClass("show-get-in-touch-popup");
	})

	// back to top button click
	$('.btn-btt').on('click',function() {
		$('.right-main-column').scrollTop(0);
	})

	// Swiper Explore
	var swiperExplore = new Swiper(".swiper-explore", {
		// slidesPerView: 1.2,
		 pagination: {
			 el: ".swiper-pagination",
			 type: "fraction",
		 },
		 navigation: {
			 nextEl: ".swiper-button-next",
			 prevEl: ".swiper-button-prev",
		 },
		 breakpoints: {
			769: {
				slidesPerView: 1,
			}
		 }
	 });

	var swiperLease = new Swiper(".lease-main-swiper", {
		loop: true,
		spaceBetween: 10,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'custom',
			renderCustom: function (swiper, current, total) {
				return current + ' / ' + total;
			},
		},
	});


	var swiper = new Swiper(".singleExplore", {
		slidesPerView: 1.2,
		autoHeight: true,
		breakpoints: {
		 769: {
			 slidesPerView: 1,
		 }
		}
	});

	if ($('.space-gallery-scroll-tag').length) {
		$('.bottom-bar').append('<a href="#top" class="btn btn-btt backto">back to top</a>')
			.find('.btn.backto').css({
				background: 'rgba(224, 88, 41, 1)', color: '#000', display: 'block',
				marginRight: '3.6rem', marginLeft: 'auto', borderLeft: '2px solid #000'
			});
		if ($(window).width() < 1024) {
			$('.bottom-bar .btn.lease-btn').hide();
			$('.searchtrigger.btn.hidden-btn').css({ width: 0, height: 0, overflow: 'hidden' });
			$('.bottom-bar .btn.backto').css({ width: '100%', margin: 0 });
		}
	}

	if($('.leasing-page-hero .list-content a').length) {
		$('.leasing-page-hero .list-content a').click(function(event) {
			event.preventDefault();
			var targetId = $(this).attr('href');
			var targetElement = $(targetId);
			if (targetElement.length) {
				window.scrollTo(0, targetElement.offset().top);
			}
		});
	}



	// Load more ajax for:
	// Stories page,
	// Special Spaces template
	let currentPaged = 1;
	$('.load-more-box .basic-button').click(function(e){
		e.preventDefault();
		currentPaged ++;
		// console.log($(this).parent().attr('data-att-slug'));
		$.ajax({
			url: ajax_data.ajax_url,
			data: {
				'action':'load_more_posts',
					paged: currentPaged,
					cpt: $(this).parent().attr('data-att-type'),
					terms_ids: $(this).parent().attr('data-terms-ids'),
					category: $(this).parent().attr('data-att-category'),
					exclude_category: $(this).parent().attr('data-att-exclude-category'),
			},
			beforeSend: function(){
				$('.rolling').css('display', 'block');
				// $('.loader-blur').css('display', 'block');

				$('.stories .post-stories > div > div').removeClass('animation-fade-item');
			},
			complete: function(){
			},
			success:function(data) {
				$('.rolling').css('display', 'none');
				// $('.loader-blur').css('display', 'none');
				$('.post-stories').append(data);
				if($('.load-more-box').attr('data-att') == currentPaged) {
					$('.load-more-box').css('display', 'none');
				}
			}, error: function(errorThrown){
				// console.log(errorThrown);
			}
		});
	});
	// End Load more stories

	$(document).on('click', '#load-more-events', function(e) {
		var perLoad = 12;
		var allEvents = $(this).attr('data-all-events');
		var loaded = $(this).attr('data-show-on-load');
		
		if(allEvents > loaded ){
			$(this).attr('data-show-on-load',parseInt($(this).attr('data-show-on-load')) + perLoad);
			$('.post-event-row').each(function(e){
				if(e < parseInt(loaded) + perLoad && $(this).hasClass('uk-hidden')){
					$(this).removeClass('uk-hidden');
				}
			})
		}
		if(allEvents <= parseInt(loaded) + perLoad){
			$(this).addClass('uk-hidden');
		}
	});

	$('.subheadline').click(openShow);

	function openShow (e) {
		e.preventDefault();
		let parent = $(this).parent()[0];
		if($(parent).hasClass('open')){
			$(parent).removeClass('open');
		}else {
			$(parent).addClass('open');
		}
	}

	 // Smooth scroll
	 $(".hero-faq a").on('click', function(event){
		 event.preventDefault();
		 $('html,body').animate({
			 scrollTop:$(this.hash).offset().top
		 }, 500);
	 });
	 // End Smooth scroll


	// Select all links with hashes
	$('a[href*="#"]')
	// Remove links that don't actually link to anything
	.not('[href="#"]')
	.not('[href="#0"]')
	.click(function(event) {
		// On-page links
		if (
			location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
			&&
			location.hostname == this.hostname
		) {
			// Figure out element to scroll to
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			// Does a scroll target exist?
			if (target.length) {
				// Only prevent default if animation is actually gonna happen
				event.preventDefault();
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000, function() {
					// Callback after animation
					// Must change focus!
					var $target = $(target);
					$target.focus();
					if ($target.is(":focus")) { // Checking if the target was focused
						return false;
					} else {
						$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
						$target.focus(); // Set focus again
					};
				});
			}
		}
	});

	//swiper lazy load
	if ($('.swiper').length > 0) {
			$('.swiper').css('opacity','1');
	}

	// AddSearh predefined terms

	// Get all search buttons
	var buttons = $('.search-button');

	// Attach click event listeners to each button
	buttons.on('click', function() {
		// Get the search term from the data attribute
		var searchTerm = $(this).data('search-term');

		// Submit the search term to AddSearch
		addSearchSubmit(searchTerm);
	});

	// Function to submit the search term to AddSearch
	function addSearchSubmit(searchTerm) {

		var form = $('.addsWg-searchfield');

		var inputField = $('.addsWg-searchfield .icon');

		// Set the value of the search input field
		inputField.focus();
		inputField.val(searchTerm);

		setTimeout(function(){
			inputField.trigger($.Event("keydown", { which: 13 }));
		},200);
	}


	///////////////////////////////////////////////////////////////

	//filter
	$(".category-wrapper > form").on('submit',function(e){
		e.preventDefault();
	});
	//load and filter
	$('.right-side').on('click','.load-more-box.new-func .basic-button', function(e){
		e.preventDefault();
		let page = $(this).parent().attr('data-att-next');
		filterLoad(page);
	});

	$(".category-wrapper > form").on('change',function(e){
		e.preventDefault();
		filterLoad(1,true);
	});

	function filterLoad(page,reset = false){
		let business_category = [];
		let business_category_2 = [];
		let search = $('input[name="search-field"]').val();
		let cpt = $('#data-cpt-value').val();
		let cptPage = $('#data-cpt-value').attr('data-cpt-page');
		let openLate = $('.open-late').is(':checked');

		if($(".category input[data-taxonomy='business_category'").length > 0){
			$(".category input[data-taxonomy='business_category'").each( function(){
				let input = $(this);
				if( input.is(':checked') ){
					business_category.push(input.val());
				}
			});
		} else if($(".category input[data-taxonomy='primary_industry'").length > 0){
			$(".category input[data-taxonomy='primary_industry'").each( function(){
				let input = $(this);
				if( input.is(':checked') ){
					business_category.push(input.val());
				}
			});
		} else if ($(".category input[data-taxonomy='shop'").length > 0) {
			$(".category input[data-taxonomy='shop'").each( function(){
				let input = $(this);
				if( input.is(':checked') ){
					business_category.push(input.val());
				}
			});
		} else if ($(".category input[data-taxonomy='entertainment'").length > 0) {
			$(".category input[data-taxonomy='entertainment'").each( function(){
				let input = $(this);
				if( input.is(':checked') ){
					business_category.push(input.val());
				}
			});
		} else if ($(".category input[data-taxonomy='eat'").length > 0 && $(".category input[data-taxonomy='drink'").length > 0) {
			$(".category input[data-taxonomy='eat'").each( function(){
				let input = $(this);
				if( input.is(':checked') ){
					business_category.push(input.val());
				}
			});
			$(".category input[data-taxonomy='drink'").each( function(){
				let input = $(this);
				if( input.is(':checked') ){
					business_category_2.push(input.val());
				}
			});
		}

		//add params to url
		addParamsToURL(business_category, business_category_2, search, page, openLate);
		console.log(business_category);
		console.log(cptPage);
		$.ajax({
			url: ajax_data.ajax_url,
			data: {
				'action' : 'load_more_filter',
				'business_category' : business_category,
				'business_category_2' : business_category_2,
				'search' : search,
				'page' : page,
				'cpt' : cpt,
				'reset' : reset,
				'cpt_page' : cptPage,
				'open_late' : openLate
			},
			beforeSend: function(){
				$('.rolling').css('display', 'block');
				// $('.loader-blur').css('display', 'block');
				if(reset){
					$('.load-more-box').remove();
				} else {
					$('.load-more-box').attr('data-att-next',parseInt(page) + 1);
				}

				$('.right-side >div >div').removeClass('animation-fade-item');
			},
			complete: function(){
			},
			success:function(data) {
				//console.log(ajax_data.ajax_url);
				//console.log(data);
				$('.rolling').css('display', 'none');
				// $('.loader-blur').css('display', 'none');
				if(reset){
					$('.right-side').html(data);
				} else {
					if(cptPage === 'eat' || cptPage === 'shop' || cptPage === 'entertainment'){
						$('.right-side >  .right-side-wrp').append(data);
					} else if(cptPage === 'directory'){
						$('.right-side > .directory-post-wrapper').append(data);
					}
				}

				if(Number($('.load-more-box').attr('data-att')) < Number($('.load-more-box').attr('data-att-next'))) {
					$('.load-more-box').css('display', 'none');
				}

				let loadedButtonsSCroll = document.querySelectorAll('.load-more-box .basic-button, .buttons-events .basic-button:first-child');
				loadedButtonsSCroll.forEach(content => {
						contentObserver.observe(content);
				});
			}, error: function(errorThrown){
				// console.log(errorThrown);
			}
		});

	}

	//filter
	//////////////////////////////////////////////////

	//add params
	function addParamsToURL(business_category, business_category_2, search, page, openLate) {

			let queryParams = {};

			// Add non-empty parameters to queryParams
			if (business_category && business_category.length > 0) {
					queryParams['business-category'] = business_category.join(',');
			}

			if (business_category_2 && business_category_2.length > 0) {
					queryParams['business-category-2'] = business_category_2.join(',');
			}

			if (search && search != '') {
					queryParams['search'] = search;
			}

			if (page && page != 1) {
					queryParams['page-number'] = page;
			}

			if (openLate && openLate !== '') {
					queryParams['open-late'] = openLate;
			}

			let queryString = $.param(queryParams);
			let newUrl = window.location.pathname + (queryString ? '?' + queryString : '');
			window.history.pushState({}, '', newUrl);
	}

	// Leasing forms
	let counterRadiobutton = 0;
	let counterFormfield = 0;

	$( ".lease-form" ).each(function() {
		counterFormfield++;
		$(this).attr('id', 'form'+counterFormfield);
	});

	$( ".leasing-cagtegories .category" ).each(function() {
		counterRadiobutton++;
		$(this).attr('data-att', 'form'+counterRadiobutton);
	});
	
	$(".leasing-cagtegories .category").on( "click", function() {
		let attrCategory = $(this).attr('data-att');
		$( ".lease-form" ).hide();
		$('#'+attrCategory).show();
	});
	// End Leasing forms

	// Special spaces
	if ($('.gallery-swiper').length > 0) {

		$('.gallery-swiper').each(function(index){
			var gallerySwiper = new Swiper($(this)[0],{
				pagination: {
					el: '.swiper-pagination',
					type: 'custom',
					renderCustom: function (swiper, current, total) {
						return current + ' / ' + total;
					},
				},
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
				speed: 600,
				slidesPerView: 1,
				loop: true,
				spaceBetween: 0
			});
		});

	}

	// gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);
	// const scrollSections = gsap.utils.toArray('.ci-gallery-slider');
	// scrollSections.forEach((item, i) => {
	// 	let start = "top " + $('.top-bar').innerHeight();
	// 	let end = 'bottom ' + $('.top-bar').innerHeight();
	// 	if(i !== 0){
	// 		start = "top -1%";
	// 		end = 'bottom ' + $('.top-bar').innerHeight();
	// 	}
	// 	ScrollTrigger.create({
	// 	    trigger: item,
	// 	    onEnter : function(){
	// 	    	$('body').css('overflow','hidden');
	// 	    	if($('.ci-gallery-slider').eq(i + 1).length > 0){
	// 	    		 $('html,body').animate({
	// 	    			 scrollTop:$('.ci-gallery-slider').eq(i + 1).offset().top
	// 	    		 }, 200);
	// 	    	} else if($('.ci-gallery-slider').eq(i).next().hasClass('animation-fade-container')){
	// 	    		 $('html,body').animate({
	// 	    			 scrollTop:$('.animation-fade-container').offset().top
	// 	    		 }, 200);
	// 	    	}
	// 	    	setTimeout(function(){
	// 	    		$('body').css('overflow','auto');
	// 	    	},1500);

	// 	    },  onEnterBack : function(){
	// 	    	$('body').css('overflow','hidden');
	// 	    	if($('.ci-gallery-slider').eq(i).length > 0){
	// 	    		if(i === 0){
	// 	    			$('html,body').animate({
	// 	    				 scrollTop:0
	// 	    			}, 200);
	// 	    		} else {
	// 	    			$('html,body').animate({
	// 	    				 scrollTop:$('.ci-gallery-slider').eq(i).offset().top
	// 	    			}, 200);
	// 	    		}

	// 	    	}
	// 	    	setTimeout(function(){
	// 	    		$('body').css('overflow','auto');
	// 	    	},1500);
	// 	    },
	// 	    // snap: {
	// 	    //   snapTo: 1,
	// 	    //   duration: { min: 0.1, max: 0.2 },
	// 	    //   delay: 0.0
	// 	    // },
	// 	    markers: true,
	// 	    start: start, // start when top of trigger target hits 50% point of viewport
	// 	    end: end,
	// 	    // scrub: true,
	// 	    // pin: true,
	// 	    id: `item-${i}`
	// 	 });
	//   // tl = gsap.timeline({
	//   //   scrollTrigger: {
	//   //     toggleActions: "restart pause resume pause",
	//   //     trigger: item,
	//   //     start: 'top 5%', // start when top of trigger target hits 50% point of viewport
	//   //     end: 'bottom 10%',
	//   //     markers: true,
	//   //     duration: 0.6,
	//   //   },
	//   // });

	// });

	// jQuery('.tribe-filter-bar-c-filter').removeClass('tribe-filter-bar-c-filter--open').removeClass('tribe-filter-bar-c-filter--has-selections');
	// jQuery('.tribe-filter-bar-c-filter__toggle').attr('aria-expanded', 'false');
	$('.leasing-cagtegories .category').click(function(e){
		e.preventDefault();
		$('#gform_wrapper_10 .gform_hidden').val($.trim( $(this).text()));
		$('.leasing-cagtegories .category .checkmark').removeClass('checked');
		$(this).find('.checkmark').addClass('checked');
	})

	// if($('.home') && $('.home').length > 0){

	// 	var elements = document.querySelectorAll('div.scroll-div-first-three');
	// 	var sections = document.querySelectorAll('.ci-gallery-slider');
	// 	console.log(elements)
	// 	elements.forEach(function(element,index){

	// 		let isScrolling;
	// 		let isScrollingMore;
	// 		let animation = false;
	// 		let animationsScrollFinish = false;
	// 		let animationsScrollFinishFromTop = false;
	// 		let animationsScrollFinishFromBottom = false;
	// 		var animationlast = false;
	// 		let anim = false;
	// 		let scrolledPx = 0;
	// 		let pxMoved = 0;
	// 		let moved = false;

	// 		var handleScroll = function() {
	// 			element.scrollTo(0, 0);  // required when scroll bar is drgged
	// 		};

	// 		element.addEventListener('scroll', handleScroll, false);

	// 		var handleEvent = function(e) {
	// 			let haveElements = false;


	// 			if($(element).height() >= $(window).height() && window.matchMedia("(orientation: landscape)").matches || $(window).width() < 1024){
	// 				return;
	// 				// if(e.deltaY < 0 && $(".scroll-div-first-three").eq(index - 1) && $(".scroll-div-first-three").eq(index - 1).length > 0  && (element.scrollHeight + $(element).offset().top) - $('.bottom-bar').height() <= ($(".scroll-div-first-three").eq(index - 1).offset().top - $('.bottom-bar').height() )){
	// 				if(e.deltaY < 0 && $(".scroll-div-first-three").eq(index - 1) && $(".scroll-div-first-three").eq(index - 1).length > 0 && Math.abs(e.deltaY) < 50 && !animation){
	// 					return;
	// 				// } else if(e.deltaY > 0 && $(".scroll-div-first-three").eq(index + 1) && $(".scroll-div-first-three").eq(index + 1).length > 0  && (element.scrollHeight + $(element).offset().top) - $('.bottom-bar').height() >= ($(".scroll-div-first-three").eq(index + 1).offset().top - $('.bottom-bar').height() )){
	// 				} else if(e.deltaY > 0 && $(".scroll-div-first-three").eq(index + 1) && $(".scroll-div-first-three").eq(index + 1).length > 0  && Math.abs(e.deltaY) < 50 && !animation){
	// 					return;
	// 				}
	// 			}

	// 			if(index === 0 && e.deltaY < 0){
	// 				e.preventDefault();
	// 				return;
	// 			}
	// 			if($(".scroll-div-first-three").eq(index + 1) && $(".scroll-div-first-three").eq(index + 1).length > 0 && e.deltaY > 0){
	// 				haveElements = true;
	// 				e.preventDefault();// disables scrolling by mouse wheel and touch move
	// 			} else if($(".scroll-div-first-three").eq(index - 1) && $(".scroll-div-first-three").eq(index - 1).length > 0 && e.deltaY < 0){
	// 				haveElements = true;
	// 				e.preventDefault();// disables scrolling by mouse wheel and touch move
	// 			}
	// 			if(index === 2 && !haveElements  && !animationlast){
	// 				setTimeout(function() {
	// 					animationlast = true;
	// 				}, 800);
	// 				e.preventDefault();
	// 			}

	// 			var isTrackpad = false;
	// 			if (e.wheelDeltaY) {
	// 				if (e.wheelDeltaY === (e.deltaY * -3)) {
	// 					isTrackpad = true;
	// 				}
	// 			}
	// 			else if (e.deltaMode === 0) {
	// 				isTrackpad = true;
	// 			}
	// 			if(isTrackpad){
	// 				var delay1 = 20;
	// 				var delay2 = 25;
	// 			} else {
	// 				var delay1 = 3;
	// 				var delay2 = 8
	// 			}

	// 			if(haveElements && !animation && !animationsScrollFinish && Math.abs(e.deltaY) > delay1 && Math.abs(e.deltaY) < delay2 && !$('html, body').is(':animated')){
	// 				if(e.deltaY > 0 && $(".scroll-div").eq(index + 1) && $(".scroll-div").eq(index + 1).length > 0 && !animationsScrollFinishFromTop && !animationsScrollFinishFromBottom){
	// 					if(index === 1){
	// 						animationlast = false;
	// 					}
	// 					$('html, body').animate({
	// 						scrollTop: $(".scroll-div").eq(index + 1).offset().top - $('.top-bar').innerHeight()
	// 					}, 600,function() {
	// 						animationsScrollFinish = false;
	// 						animationsScrollFinishFromTop = false;
	// 					});
	// 					setTimeout(function() {
	// 						$(".scroll-div").eq(index + 1).css('max-height',$(window).innerHeight() - ($('.top-bar').innerHeight() + $('.bottom-bar').innerHeight()));
	// 						// $(".scroll-div").eq(index + 1).parent().css('min-height',$(window).innerHeight() - ($('.top-bar').innerHeight() + $('.bottom-bar').innerHeight()));
	// 					}, 200);
	// 					animationsScrollFinishFromTop = true;


	// 				} else if(e.deltaY < 0 && $(".scroll-div").eq(index - 1) && $(".scroll-div").eq(index - 1).length > 0 && !animationsScrollFinishFromTop && !animationsScrollFinishFromBottom){
	// 					if(index === 1){
	// 						animationlast = false;
	// 					}
	// 					$('html, body').animate({
	// 						scrollTop: $(".scroll-div").eq(index - 1).offset().top - $('#masthead').innerHeight()
	// 					}, 600,function() {
	// 						animationsScrollFinish = false;
	// 						animationsScrollFinishFromBottom = false;
	// 					});
	// 					setTimeout(function() {
	// 						$(".scroll-div").eq(index - 1).css('max-height',$(window).innerHeight() - ($('.top-bar').innerHeight() + $('#masthead').innerHeight()));
	// 						// $(".scroll-div").eq(index - 1).parent().css('min-height',$(window).innerHeight() - ($('.top-bar').innerHeight() + $('#masthead').innerHeight()));
	// 					}, 200);
	// 					animationsScrollFinishFromBottom = true;
	// 				}
	// 				animation = true;
	// 				animationsScrollFinish = true;
	// 				window.clearTimeout( isScrolling );
	// 				isScrolling = setTimeout(function() {
	// 					animation = false;
	// 				}, 66);

	// 			}
	// 		};

	// 		element.addEventListener('scroll', handleEvent, false);
	// 		element.addEventListener('mousewheel', handleEvent, false);
	// 		element.addEventListener('touchmove', handleEvent, false);

	// 	});

	// }

	//create on load
	// var scrollCustom = $('#fullpage').fullpage({

	// 	scrollBar: true,

	// 	beforeLeave: function(origin, destination, direction, trigger){
	// 		console.log(destination)
	// 			ind = destination.index;
	// 			console.log(secArr[ind])

	// 			console.log('scroll')
	// 			$('html,body').animate({
	// 				scrollTop: secArr[ind]
	// 			}, 500);
	// 			if(destination.isLast) {
	// 				setTimeout(function(){
	// 					fullpage_api.destroy();
	// 					$('#fullpage').remove()
	// 					// $('body').css('overflow','hidden')
	// 					// destroyed = true
	// 				}, 1000)
	// 				setTimeout(function(){
	// 					destroyed = true
	// 					console.log('last')
	// 				}, 3000)
	// 			} else {
	// 			}
	// 	},

	// 	});


	var secArr = [];
	var destroyed = false;
	$('#snap-content > section').each(function(){
		secArr.push($(this).offset().top)
	})
	// console.log(secArr)
	var scrollDown = true;
	var triggerBotton = false;
	var lastScrollTop = 0;
	var scrolling = true;
	var firstScroll = true;
	var int, intBack;
	var ind = 0;
	var totalNumSlides = 3;
	var lastSlideArr = totalNumSlides - 1;
	var $stop = false;
	

});





document.addEventListener('DOMContentLoaded', () => {

    let intervalForm = "";
    let requiredInputsDates = {};
    let containerForm = "";

    document.addEventListener("click", e => {
        if (e.target.getAttribute('type') == 'submit' && e.target.classList.contains("gform_button")) onClickSubmit(e.target);
    }); 

    function onClickSubmit(submit) {
        containerForm = submit.closest('.lease-form');
        const form = submit.closest('form');
        const requiredInputs = form.querySelectorAll("[aria-required=true]");
        let allInputsFilled = true;
        if (requiredInputs.length) {
            requiredInputs.forEach( input => {
                let label = input.closest(".gfield").querySelector("label");
                labelText = label.childNodes[0].nodeValue.trim().replace(" ", "").toLowerCase();
                let date = input.value;
                requiredInputsDates[labelText] = date;
                if (input.value.trim() === '') allInputsFilled = false;
            });
    
            if (allInputsFilled) waitConfirmationMessage();
        }
    }
    function waitConfirmationMessage() {
        intervalForm = setInterval( () => {
            let validateMessage = 0;
            if (containerForm) validateMessage = containerForm.querySelectorAll(".gform_confirmation_message").length;
            if (validateMessage) {
                clearInterval(intervalForm);
                sendDates();
            }
        }, 300);
    }
    function sendDates() {
        try {
            if (!RulerAnalyticsVisitorId)
                throw "Ruler Analytics is not set on the page";

            var emailInput = requiredInputsDates.email;

            if (emailInput === undefined) {
                return;
            } else {

                var RulerAnalyticsPayload = {
                    action: "convert",
                    Name: `${requiredInputsDates.firstname} ${requiredInputsDates.lastname}`,
                    Email: requiredInputsDates.email,
                    Phone: requiredInputsDates.phone
                };

                RulerAnalytics.trackConversionAsync(RulerAnalyticsPayload, "", "", 500);

                console.log(requiredInputsDates, "data sent");

            }
        } catch (error) {
            console.error(error);
        }

        requiredInputsDates = {};
    }

})




// document.addEventListener('DOMContentLoaded', function () {
// var myFullpage = new fullpage('.home .main-site-content', {
//   licenseKey:'R0K68-6RC27-86JHK-ZO5M7-XUXDO'
// });
// }, false);




