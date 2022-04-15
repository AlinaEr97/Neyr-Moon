// Ссылка на главную страницу в логотипе 

$(function () {
	$('.logo__image').on("click", function () {
		window.location.href = "index.html";
	});
});


// Сортировка товаров по цене 

$(function () {
	$('.filter-buttons__high-price').on("click", function () {
		MySort('data-price');
	});
});

$(function () {
	$('.filter-buttons__low-price').on("click", function () {
		MySortDesc('data-price');
	});
});

function MySort(sortType) {
	let good_object = document.querySelector("#goods");
	for (let i = 0; i < good_object.children.length; i++) {
		for (let j = i; j < good_object.children.length; j++) {
			if (+good_object.children[i].getAttribute(sortType) > +good_object.children[j].getAttribute(sortType)) {
				replacedNode = good_object.insertBefore(good_object.children[j], good_object.children[i]);
				insertAfter(replacedNode, good_object.children[i]);
			}
		}
	}
}

function insertAfter (elem, refElem) {
	return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

function MySortDesc (sortType) {
	let good_object = document.querySelector("#goods");
	for (let i = 0; i < good_object.children.length; i++) {
		for (let j = i; j < good_object.children.length; j++) {
			if (+good_object.children[i].getAttribute(sortType) < +good_object.children[j].getAttribute(sortType)) {
				replacedNode = good_object.insertBefore(good_object.children[j], good_object.children[i]);
				insertAfter(replacedNode, good_object.children[i]);
			}
		}
	}
}


// Фильтр каталога  

let table = document.querySelectorAll(".table");
let wall = document.querySelectorAll(".bra");

$(function () {
	$('.filter-links__table').on("click", function () {
		for (let j = 0; j < all_goods.length; j++) {
			$(all_goods[j]).css("display", "none");
		}
		for (let i = 0; i < table.length; i++) {
			$(table[i]).css("display", "block");
		}
		history.pushState('', document.title, 'catalog.html#table_link');
	});
});

$(function () {
	$('.filter-links__bra').on("click", function () {
		for (let j = 0; j < all_goods.length; j++) {
			$(all_goods[j]).css("display", "none");
		}
		for (let i = 0; i < wall.length; i++) {
			$(wall[i]).css("display", "block");
		}
		history.pushState('', document.title, 'catalog.html#bra_link');
	});
});

$(function () {
	$('.filter-links__floor').on("click", function () {
		for (let j = 0; j < all_goods.length; j++) {
			$(all_goods[j]).css("display", "none");
		}
		for (let i = 0; i < floor.length; i++) {
			$(floor[i]).css("display", "block");
		}
		history.pushState('', document.title, 'catalog.html#floor_link');
	});
});

$(function () {
	$('.filter-links__candles').on("click", function () {
		for (let j = 0; j < all_goods.length; j++) {
			$(all_goods[j]).css("display", "none");
		}
		for (let i = 0; i < candles.length; i++) {
			$(candles[i]).css("display", "block");
		}
		history.pushState('', document.title, 'catalog.html#candles_link');
	});
});

$(function () {
	$('.filter-links__all').on("click", function () {
		for (let j = 0; j < all_goods.length; j++) {
			$(all_goods[j]).css("display", "block");
		}
		history.pushState('', document.title, window.location.pathname);
	});
});


// Изменение хэша URL при нажатии на кнопки фильтра 

$(function () {

	if (document.location.hash.indexOf('table_link') == 1) {
		for (let j = 0; j < all_goods.length; j++) {
			$(all_goods[j]).css("display", "none");
		}
		for (let i = 0; i < table.length; i++) {
			$(table[i]).css("display", "block");
		}
	}
	
	if (document.location.hash.indexOf('wall_link') == 1) {
		for (let j = 0; j < all_goods.length; j++) {
			$(all_goods[j]).css("display", "none");
		}
		for (let i = 0; i < wall.length; i++) {
			$(wall[i]).css("display", "block");
		}
	}
	
	if (document.location.hash.indexOf('floor_link') == 1) {
		for (let j = 0; j < all_goods.length; j++) {
			$(all_goods[j]).css("display", "none");
		}
		for (let i = 0; i < floor.length; i++) {
			$(floor[i]).css("display", "block");
		}
	}
	
	if (document.location.hash.indexOf('candles_link') == 1) {
		for (let j = 0; j < all_goods.length; j++) {
			$(all_goods[j]).css("display", "none");
		}
		for (let i = 0; i < candles.length; i++) {
			$(candles[i]).css("display", "block");
		}
		
	}
})



