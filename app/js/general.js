// Показать-скрыть меню в мобильной версии

let burger_button = $(".menu-burger");
let menu = $(".menu");

burger_button.on("click", function () {
	menu.fadeToggle();
	$(".menu-burger__line").each(function() {
		$(this).toggleClass("menu-burger__line_active");
	});
});

$(document).mouseup(function (e) {
	if ( !burger_button.is(e.target) && burger_button.has(e.target).length === 0 && !menu.is(e.target) && menu.has(e.target).length === 0) {
		menu.fadeOut();
		$(".menu-burger__line").each(function() {
			$(this).removeClass("menu-burger__line_active");
		});
	};
});


// Логотип-ссылка на главную страницу сайта

$(function() {
	$('.logo__image').on('click', () => {
		location.href = 'index.html';
	});
});


// Фильтр товаров в боковом меню

let threed = $('.threed');
let lamp = $('.lamp');
let baby = $('.baby');
let lava = $('.lava');
let neon = $('.neon');
let bra = $('.bra');
let portable =$('.portable');
let projector = $('.projector');
let salt = $('.salt');
let distance = $('.distance');
let candles = $('.candles');
let floor = $('.floor');
let usb = $('.usb');
let all_goods = $('.goods-offer');

$(function () {
	$('#threed').on("click", function () {
		for (let j = 0; j < all_goods.length; j++) {
			$(all_goods[j]).css("display", "none");
		}
		for (let i = 0; i < threed.length; i++) {
			$(threed[i]).css("display", "block");
		}
	});
});
$(function () {
	$('#lamp').on("click", function () {
		for (let j = 0; j < all_goods.length; j++) {
			$(all_goods[j]).css("display", "none");
		}
		for (let i = 0; i < lamp.length; i++) {
			$(lamp[i]).css("display", "block");
		}
	});
});
$(function () {
	$('#baby').on("click", function () {
		for (let j = 0; j < all_goods.length; j++) {
			$(all_goods[j]).css("display", "none");
		}
		for (let i = 0; i < baby.length; i++) {
			$(baby[i]).css("display", "block");
		}
	});
});
$(function () {
	$('#lava').on("click", function () {
		for (let j = 0; j < all_goods.length; j++) {
			$(all_goods[j]).css("display", "none");
		}
		for (let i = 0; i < lava.length; i++) {
			$(lava[i]).css("display", "block");
		}
	});
});
$(function () {
	$('#neon').on("click", function () {
		for (let j = 0; j < all_goods.length; j++) {
			$(all_goods[j]).css("display", "none");
		}
		for (let i = 0; i < neon.length; i++) {
			$(neon[i]).css("display", "block");
		}
	});
});
$(function () {
	$('#bra').on("click", function () {
		for (let j = 0; j < all_goods.length; j++) {
			$(all_goods[j]).css("display", "none");
		}
		for (let i = 0; i < bra.length; i++) {
			$(bra[i]).css("display", "block");
		}
	});
});
$(function () {
	$('#portable').on("click", function () {
		for (let j = 0; j < all_goods.length; j++) {
			$(all_goods[j]).css("display", "none");
		}
		for (let i = 0; i < portable.length; i++) {
			$(portable[i]).css("display", "block");
		}
	});
});
$(function () {
	$('#projector').on("click", function () {
		for (let j = 0; j < all_goods.length; j++) {
			$(all_goods[j]).css("display", "none");
		}
		for (let i = 0; i < projector.length; i++) {
			$(projector[i]).css("display", "block");
		}
	});
});
$(function () {
	$('#salt').on("click", function () {
		for (let j = 0; j < all_goods.length; j++) {
			$(all_goods[j]).css("display", "none");
		}
		for (let i = 0; i < salt.length; i++) {
			$(salt[i]).css("display", "block");
		}
	});
});
$(function () {
	$('#distance').on("click", function () {
		for (let j = 0; j < all_goods.length; j++) {
			$(all_goods[j]).css("display", "none");
		}
		for (let i = 0; i < distance.length; i++) {
			$(distance[i]).css("display", "block");
		}
	});
});
$(function () {
	$('#candles').on("click", function () {
		for (let j = 0; j < all_goods.length; j++) {
			$(all_goods[j]).css("display", "none");
		}
		for (let i = 0; i < candles.length; i++) {
			$(candles[i]).css("display", "block");
		}
	});
});
$(function () {
	$('#floor').on("click", function () {
		for (let j = 0; j < all_goods.length; j++) {
			$(all_goods[j]).css("display", "none");
		}
		for (let i = 0; i < floor.length; i++) {
			$(floor[i]).css("display", "block");
		}
	});
});
$(function () {
	$('#usb').on("click", function () {
		for (let j = 0; j < all_goods.length; j++) {
			$(all_goods[j]).css("display", "none");
		}
		for (let i = 0; i < usb.length; i++) {
			$(usb[i]).css("display", "block");
		}
	});
});
$(function () {
	$('#all').on("click", function () {
		for (let j = 0; j < all_goods.length; j++) {
			$(all_goods[j]).css("display", "block");
		}
	});
});

