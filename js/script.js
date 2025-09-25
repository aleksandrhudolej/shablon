

function reviewsSlider() {
	let parents = $(".reviews-slider.swiper-container");
	let slideCount = parents.find(".swiper-slide").length;
	let slider = new Swiper(".reviews-slider.swiper-container", {
		slidesPerView: 1,
		spaceBetween: 16,
		loop: slideCount > 1, // включаем loop только если больше одного слайда
		observer: true,
		observeParents: true,
		watchOverflow: true,
		touchReleaseOnEdges: true,
		speed: 700,
		rewind: true,
		pagination: {
			el: ".reviews-slider__pagination",
			clickable: true
		},
		breakpoints: {
			576: {
				slidesPerView: 2,
				spaceBetween: 16,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 16,
			},
		}
	});
}



function partnersSlider() {
	let spaceBetween, speed;
	$('.partners-slider.swiper-container').each(function (index, value) {
		spaceBetween = $(value).data('margin') ?? 30;
		speed = $(value).data('speed') ?? 5000;
		let slider = new Swiper(value, {
			slidesPerView: 'auto',
			spaceBetween: spaceBetween,
			loop: true,
			observer: true,
			observeParents: true,
			watchOverflow: true,
			touchReleaseOnEdges: true,
			speed: 7000,                // скорость анимации (меньше = быстрее)
			autoplay: {
				delay: 0,                 // без паузы
				disableOnInteraction: false, // не останавливать при взаимодействии
			},
		});
	});
}
function gamesSlider() {
	let slider = new Swiper(".games-slider.swiper-container", {
		slidesPerView: 'auto',
		spaceBetween: 16,
		loop: true,
		observer: true,
		observeParents: true,
		watchOverflow: true,
		touchReleaseOnEdges: true,
		speed: 700,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
			pauseOnMouseEnter: true
		},
		breakpoints: {
			992: {
				slidesPerView: 4,
				spaceBetween: 20,
			},
		}
	});
}

$(document).ready(function () {
	reviewsSlider();
	partnersSlider();
	gamesSlider();
})

$(document).on('click', '.js-detail-text__btn', function () {
	if (!$(this).parents('.js-detail-text').hasClass('active')) {
		$(this).parents('.js-detail-text').addClass('active');
	} else {
		$(this).parents('.js-detail-text').removeClass('active');
	}
});

// spoiler start ===============================================
$(document).on('click', '.js-spoiler-title', function () {
	let parents = $(this).parents('.js-spoiler');
	parents.find('.js-spoiler-body').stop(true, true);
	if (!parents.hasClass('js-spoiler-double')) {
		if (!$(this).parents('.js-spoiler-item').hasClass('active')) {
			$(this).parents('.js-spoiler').find('.js-spoiler-item').removeClass('active');
			$(this).parents('.js-spoiler').find('.js-spoiler-body').removeClass('active').slideUp(300);
			$(this).parents('.js-spoiler-item').addClass('active');
			$(this).parents('.js-spoiler-item').find('.js-spoiler-body').slideDown(300);
		} else {
			$(this).parents('.js-spoiler').find('.js-spoiler-item').removeClass('active');
			$(this).parents('.js-spoiler').find('.js-spoiler-body').slideUp(300);
		}
	} else {
		if (!$(this).parents('.js-spoiler-item').hasClass('active')) {
			$(this).parents('.js-spoiler-item').addClass('active');
			$(this).parents('.js-spoiler-item').find('.js-spoiler-body').slideDown(300);
		} else {
			$(this).parents('.js-spoiler-item').removeClass('active');
			$(this).parents('.js-spoiler-item').find('.js-spoiler-body').slideUp(300);
		}
	}
});
// spoiler end ===============================================G