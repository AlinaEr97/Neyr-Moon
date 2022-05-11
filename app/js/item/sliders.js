// Слайдер картинок в карточке товара

new Swiper (".card-slider", {
	mousewheel: {
		sensitivity: 1, 
	},
	loop: true,
	slidesPerView: 3,
	breakpoints: {
		300: {
			slidesPerView: 1,
		},
		910: {
			slidesPerView: 3,
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


// Переключение главной картинки товара

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

