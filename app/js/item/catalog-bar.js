$(function() {
	$(".catalog__arrow-item").on("click", function() {
		$(this).toggleClass('catalog__arrow-item_active');
		$(".catalog__list").toggleClass('catalog__list-item_active');
	});
});

// Показать-скрыть каталог категорий сбоку


$(document).ready(function(){
	$('filter__button').on('click', function(e){
		e.preventDefault();
	});
	$('.filter__item').hover(function () {
		clearTimeout($.data(this,'timer'));
		$('.filter__links',this).stop(true,true).slideDown(200);
	}, function () {
		$.data(this,'timer', setTimeout($.proxy(function() {
			$('.filter__links',this).stop(true,true).slideUp(200);
		}, this), 100));
	});
});

// Кнопки фильтров над карточкой товара
