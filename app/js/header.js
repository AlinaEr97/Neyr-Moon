// Плавный переход по якорям из хедера

let $page = $('html, body, .wrapper, header, .header__block, .header-nav');
$('a[href*="#"]').click(function() {
   $page.animate({
      scrollTop: $($.attr(this, 'href')).offset().top-200
	}, 800);
   return false;
});