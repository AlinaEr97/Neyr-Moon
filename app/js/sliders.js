// Слайдер акций

new Swiper (".sales-slider", {
	//пагинация
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true,
	},
	mousewheel: {
		sensitivity: 1, 
	},
	slidesPerView: 1,
	centeredSlides: true,
	initialSlide: 2,
	loop: true,
	loopedSlides: 1,
	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
	},
	effect: 'slide',
	breakpoints: {
		
	}, 
});


// Слайдер брендов 

new Swiper (".brends-slider", {
	//стрелки
	navigation: {
		nextEl: '.brends__button_next',
		prevEl: '.brends__button_prev'
	},
	mousewheel: {
		sensitivity: 1, 
	},
	slidesPerView: 6,
	initialSlide: 5,
	loopedSlides: 17,
	centeredSlides: true,
	spaceBetween: 5,
	breakpoints: {
		500: {
			spaceBetween: 10,
		},
	},
	loop: true,
	
	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
	},
	effect: 'slide',
	breakpoints: {
		
	}, 
});


//Стрелки навигации слайдера брендов

const swiperPrev = document.getElementById('swiperPrev')
const swiperNext = document.getElementById('swiperNext')

swiperPrev.addEventListener('click', () => {
	$(".brends-slider").slidePrev();
})

swiperNext.addEventListener('click', () => {
	$(".brends-slider").slideNext();
})
