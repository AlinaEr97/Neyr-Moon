// Показать-скрыть меню в мобильной версии

$(function() {
	$(".menu-burger").on("click", function() {
		$(".menu").toggleClass('menu_active');
	});
});


// Логотип-ссылка на главную страницу сайта

$('.logo__image').on('click', () => {
	location.href = 'index.html';
});


// Фильтр товаров в боковом меню

let threed = document.querySelectorAll('.threed');
let lamp = document.querySelectorAll('.lamp');
let baby = document.querySelectorAll('.baby');
let lava = document.querySelectorAll('.lava');
let neon = document.querySelectorAll('.neon');
let bra = document.querySelectorAll('.bra');
let portable = document.querySelectorAll('.portable');
let projector = document.querySelectorAll('.projector');
let salt = document.querySelectorAll('.salt');
let distance = document.querySelectorAll('.distance');
let candles = document.querySelectorAll('.candles');
let floor = document.querySelectorAll('.floor');
let usb = document.querySelectorAll('.usb');
let all_goods = document.querySelectorAll('.goods-offer');

$(function () {
	$('#threed').on("click", function () {
		for (let j = 0; j < all_goods.length; j++) {
			all_goods[j].style.display = 'none';
		}
		for (let i = 0; i < threed.length; i++) {
			threed[i].style.display = 'block';
		}
	});
});
$(function () {
	$('#lamp').on("click", function () {
		for (let j = 0; j < all_goods.length; j++) {
			all_goods[j].style.display = 'none';
		}
		for (let i = 0; i < lamp.length; i++) {
			lamp[i].style.display = 'block';
		}
	});
});
$(function () {
	$('#baby').on("click", function () {
		for (let j = 0; j < all_goods.length; j++) {
			all_goods[j].style.display = 'none';
		}
		for (let i = 0; i < baby.length; i++) {
			baby[i].style.display = 'block';
		}
	});
});
$(function () {
	$('#lava').on("click", function () {
		for (let j = 0; j < all_goods.length; j++) {
			all_goods[j].style.display = 'none';
		}
		for (let i = 0; i < lava.length; i++) {
			lava[i].style.display = 'block';
		}
	});
});
$(function () {
	$('#neon').on("click", function () {
		for (let j = 0; j < all_goods.length; j++) {
			all_goods[j].style.display = 'none';
		}
		for (let i = 0; i < neon.length; i++) {
			neon[i].style.display = 'block';
		}
	});
});
$(function () {
	$('#bra').on("click", function () {
		for (let j = 0; j < all_goods.length; j++) {
			all_goods[j].style.display = 'none';
		}
		for (let i = 0; i < bra.length; i++) {
			bra[i].style.display = 'block';
		}
	});
});
$(function () {
	$('#portable').on("click", function () {
		for (let j = 0; j < all_goods.length; j++) {
			all_goods[j].style.display = 'none';
		}
		for (let i = 0; i < portable.length; i++) {
			portable[i].style.display = 'block';
		}
	});
});
$(function () {
	$('#projector').on("click", function () {
		for (let j = 0; j < all_goods.length; j++) {
			all_goods[j].style.display = 'none';
		}
		for (let i = 0; i < projector.length; i++) {
			projector[i].style.display = 'block';
		}
	});
});
$(function () {
	$('#salt').on("click", function () {
		for (let j = 0; j < all_goods.length; j++) {
			all_goods[j].style.display = 'none';
		}
		for (let i = 0; i < salt.length; i++) {
			salt[i].style.display = 'block';
		}
	});
});
$(function () {
	$('#distance').on("click", function () {
		for (let j = 0; j < all_goods.length; j++) {
			all_goods[j].style.display = 'none';
		}
		for (let i = 0; i < distance.length; i++) {
			distance[i].style.display = 'block';
		}
	});
});
$(function () {
	$('#candles').on("click", function () {
		for (let j = 0; j < all_goods.length; j++) {
			all_goods[j].style.display = 'none';
		}
		for (let i = 0; i < candles.length; i++) {
			candles[i].style.display = 'block';
		}
	});
});
$(function () {
	$('#floor').on("click", function () {
		for (let j = 0; j < all_goods.length; j++) {
			all_goods[j].style.display = 'none';
		}
		for (let i = 0; i < floor.length; i++) {
			floor[i].style.display = 'block';
		}
	});
});
$(function () {
	$('#usb').on("click", function () {
		for (let j = 0; j < all_goods.length; j++) {
			all_goods[j].style.display = 'none';
		}
		for (let i = 0; i < usb.length; i++) {
			usb[i].style.display = 'block';
		}
	});
});
$(function () {
	$('#all').on("click", function () {
		for (let j = 0; j < all_goods.length; j++) {
			all_goods[j].style.display = 'block';
		}
	});
});

