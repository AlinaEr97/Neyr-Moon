$(function() {
	$(".catalog__arrow").on("click", function() {
		$(this).toggleClass('catalog__arrow_unactive');
		$(".catalog__list").toggleClass('catalog__list_unactive');
	});
});

// Скрыть-показать каталог категорий сбоку 
