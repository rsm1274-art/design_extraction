jQuery(document).ready(function($){

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
				autoplay: true,
				speed: 600,
				slidesPerView: 1,
				loop: true,
				spaceBetween: 0,
				watchOverflow: true,
			});
		});

	}

});