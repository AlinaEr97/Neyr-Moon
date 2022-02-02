new Swiper (".card-slider", {
	mousewheel: {
		sensitivity: 1, 
	},
	loop: true,
	slidesPerView: 3,
	breakpoints: {
		300: {
			spaceBetween: 90,
		},
		350: {
			spaceBetween: 100,
		},
		450: {
			spaceBetween: 100,
		},
		600: {
			spaceBetween: 120,
		},
		750: {
			spaceBetween: 140,
		},
		850: {
			spaceBetween: 120,
		},
		910: {
			spaceBetween: 110,
		},
		940: {
			spaceBetween: 110,
		},
		1000: {
			spaceBetween: 100,
		},
		1200: {
			spaceBetween: 40,
		},
		1360: {
			spaceBetween: 0,
		},
	},
	centeredSlides: true,
	initialSlide: 1,
	simulateTouch: false,
	effect: 'slide',
});

// Слайдер картинок в карточке товара


let main_image = document.querySelectorAll(".card-pictures__image");
let chosen_image = document.querySelectorAll(".card-slider__image");

$(function() {
	for (let i = 0; i < chosen_image.length; i++) {
		$(chosen_image[i]).on("click", function() {
			for (let j = 0; j < main_image.length; j++) {
				$(main_image[j]).attr('src', $(this).attr('src'));
			}
		});
	}
});

// Переключение главной картинки товара