// Рендеринг похожих товаров на странице карточек 

let similar_wrapper = document.querySelectorAll(".similar__wrapper");

class Similar {
	render() {
		let similarCatalog = '';
		catalog.forEach(({id, classes, brend, material, img, type, name, old_price, new_price}) => {
			similarCatalog += `
					<div class="goods__offer goods-offer similar__offer goods-offer_${classes}">

							<img src="${img}" alt="#" class="goods-offer__image">

							<div class="goods-offer__hide hide-text similar__hide-text">
								<p class="hide-text__item similar__hide-item search-good"><span class="hide-text__item_titles similar__hide-item_titles">Бренд:</span>
								<br> ${brend}</p>
								<p class="hide-text__item similar__hide-item search-good"><span class="hide-text__item_titles similar__hide-item_titles">Материал:</span> 
								<br>${material}</p>
								<a class="hide-text__item_about similar__hide-item_about" href="item.html#${id}" target="_blank">Подробнее >></a>
								<a href="#cart" class="hide-text__item_add similar__hide-item_add popup-link" data-cart="${id}"></a>
							</div>
							<!-- /.hide-text -->

							<div class="goods-offer__container similar__container">
								<div class="goods-offer__text">
									<p class="goods-offer__type similar__type search-good">${type}</p>
									<p class="goods-offer__name similar__name search-good">${name}</p>
								</div>
								<div class="goods-offer__price">
									<p class="goods-offer__old-price similar__old-price">&nbsp;${old_price}</p>
									<p class="goods-offer__new-price similar__new-price">&nbsp;${new_price}</p>
								</div>
							</div>
							<!-- /.goods-offer__container -->

					</div>
					<!-- /.goods-offer -->	
			`;
		});

		for (let i = 0; i < similar_wrapper.length; i++) {
			similar_wrapper[i].innerHTML += similarCatalog;
		}
	}
}

const similarPage = new Similar();
similarPage.render();


// Фильтр похожих товаров

let similar_salt = $(".goods-offer_salt");
let similar_threed = $(".goods-offer_threed");
let similar_distance = $(".goods-offer_distance");
let similar_distance2 = $(".distance");
let similar_baby = $(".goods-offer_baby");
let similar_baby2 = $(".baby");
let similar_projector = $(".goods-offer_projector");
let similar_projector2 = $(".projector");
let similar_usb = $(".usb");
let similar_candles = $(".goods-offer_candles");
let similar_floor = $(".goods-offer_floor");
let similar_portable = $(".goods-offer_portable");
let similar_lamp = $(".goods-offer_lamp");
let similar_bra = $(".goods-offer_bra");
let similar_bra2 = $(".bra");

$(function () {

	if (document.location.hash.indexOf('salt') == 1) {
		for (let i = 0; i < similar_salt.length; i++) {
			$(similar_salt[i]).css("display", "block");
		}
		for (let i = 0; i < similar_portable.length; i++) {
			$(similar_portable[i]).css("display", "block");
		}
		for (let i = 0; i < similar_lamp.length; i++) {
			$(similar_lamp[i]).css("display", "block");
		}
		for (let i = 0; i < similar_candles.length; i++) {
			$(similar_candles[i]).css("display", "block");
		}
	}
	
	if (document.location.hash.indexOf('threed') == 1) {
		for (let i = 0; i < similar_threed.length; i++) {
			$(similar_threed[i]).css("display", "block");
		}
		for (let j = 0; j < similar_distance.length; j++) {
			$(similar_distance[j]).css("display", "block");
		}
		for (let k = 0; k < similar_distance2.length; k++) {
			$(similar_distance2[k]).css("display", "block");
		}
		for (let i = 0; i < similar_bra.length; i++) {
			$(similar_bra[i]).css("display", "block");
		}
	}
	
	if (document.location.hash.indexOf('baby') == 1) {
		for (let i = 0; i < similar_baby.length; i++) {
			$(similar_baby[i]).css("display", "block");
		}
		for (let j = 0; j < similar_baby2.length; j++) {
			$(similar_baby2[j]).css("display", "block");
		}
		for (let k = 0; k < similar_threed.length; k++) {
			$(similar_threed[k]).css("displa", "block");
		}
		for (let l = 0; l < similar_distance2.length; l++) {
			$(similar_distance2[l]).css("display", "block");
		}
	}
	
	if (document.location.hash.indexOf('projector') == 1) {
		for (let i = 0; i < similar_projector.length; i++) {
			$(similar_projector[i]).css("display", "block");
		}
		for (let j = 0; j < similar_projector2.length; j++) {
			$(similar_projector2[j]).css("display", "block");
		}
	}
	
	if (document.location.hash.indexOf('distance') == 1 || document.location.hash.indexOf('usb') == 1) {
		for (let i = 0; i < similar_distance.length; i++) {
			$(similar_distance[i]).css("display", "block");
		}
		for (let j = 0; j < similar_distance2.length; j++) {
			$(similar_distance2[j]).css("display", "block");
		}
		for (let k = 0; k < similar_usb.length; k++) {
			$(similar_usb[k]).css("displa", "block");
		}
		for (let l = 0; l < similar_threed.length; l++) {
			$(similar_threed[l]).css("display", "block");
		}
	}
	
	if (document.location.hash.indexOf('candles') == 1) {
		for (let i = 0; i < similar_candles.length; i++) {
			$(similar_candles[i]).css("display", "block");
		}
	}
	
	if (document.location.hash.indexOf('distanceusb2') == 1) {
		for (let i = 0; i < similar_salt.length; i++) {
			$(similar_salt[i]).css("display", "block");
		}
		for (let j = 0; j < similar_lamp.length; j++) {
			$(similar_lamp[j]).css("display", "block");
		}
		for (let k = 0; k < similar_portable.length; k++) {
			$(similar_portable[k]).css("display", "block");
		}
		for (let l = 0; l < similar_baby.length; l++) {
			$(similar_baby[l]).css("display", "none");
		}
		for (let m = 0; m < similar_baby2.length; m++) {
			$(similar_baby2[m]).css("display", "none");
		}
		for (let n = 0; n < similar_projector.length; n++) {
			$(similar_projector[n]).css("display", "none");
		}
	}
	
	if (document.location.hash.indexOf('portable5') == 1) {
		for (let i = 0; i < similar_salt.length; i++) {
			$(similar_salt[i]).css("display", "block");
		}
		for (let i = 0; i < similar_lamp.length; i++) {
			$(similar_lamp[i]).css("display", "block");
		}
		for (let i = 0; i < similar_candles.length; i++) {
			$(similar_candles[i]).css("display", "block");
		}
	}
	
	if (document.location.hash.indexOf('babydistanceusb8') == 1) {
		for (let i = 0; i < similar_floor.length; i++) {
			$(similar_floor[i]).css("display", "none");
		}
	}
	
	if (document.location.hash.indexOf('babyneondistance9') == 1) {
		for (let i = 0; i < similar_bra2.length; i++) {
			$(similar_bra2[i]).css("display", "none");
		}
	}
	
	if (document.location.hash.indexOf('lamp10') == 1) {
		for (let i = 0; i < similar_salt.length; i++) {
			$(similar_salt[i]).css("display", "block");
		}
		for (let j = 0; j < similar_portable.length; j++) {
			$(similar_portable[j]).css("display", "block");
		}
		for (let k = 0; k < similar_candles.length; k++) {
			$(similar_candles[k]).css("display", "block");
		}
	}
	
	if (document.location.hash.indexOf('threedbabyprojectordistance13') == 1 || document.location.hash.indexOf('threeddistance14')){
		for (let i = 0; i < similar_floor.length; i++) {
			$(similar_floor[i]).css("display", "none");
		}
		for (let j = 0; j < similar_distance.length; j++) {
			$(similar_distance[j]).css("display", "none");
		}
	}
	
	if (document.location.hash.indexOf('threedlava16') == 1) {
		for (let i = 0; i < similar_baby.length; i++) {
			$(similar_baby[i]).css("display", "none");
		}
		for (let j = 0; j < similar_baby2.length; j++) {
			$(similar_baby2[j]).css("display", "none");
		}
		for (let k = 0; k < similar_projector1.length; k++) {
			$(similar_projector1[k]).css("display", "none");
		}
	}
	
	if (document.location.hash.indexOf('floordistance18') == 1) {
		for (let i = 0; i < similar_distance.length; i++) {
			$(similar_distance[i]).css("display", "block");
		}
		for (let j = 0; j < similar_distance2.length; j++) {
			$(similar_distance2[j]).css("display", "block");
		}
		for (let k = 0; k < similar_baby.length; k++) {
			$(similar_baby[k]).css("display", "none");
		}
		for (let l = 0; l < similar_baby2.length; l++) {
			$(similar_baby2[l]).css("display", "none");
		}
		for (let l = 0; l < similar_usb.length; l++) {
			$(similar_usb[l]).css("display", "none");
		}
	}
	
	if (document.location.hash.indexOf('bra') == 1) {
		for (let i = 0; i < similar_bra.length; i++) {
			$(similar_bra[i]).css("display", "block");
		}
		for (let j = 0; j < similar_bra2.length; j++) {
			$(similar_bra2[j]).css("display", "block");
		}
		for (let k = 0; k < similar_threed.length; k++) {
			$(similar_threed[k]).css("display", "block");
		}
	}
});





