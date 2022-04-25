// Рендеринг каталога товаров

let goods_wrapper = document.getElementById ("goods");

class Goods {
	render() {
		let htmlCatalog = '';
		catalog.forEach(({id, path, classes, brend, material, img, type, name, old_price, new_price}) => {
			htmlCatalog += `
					<div class="goods__offer goods-offer ${classes}" data-price="${new_price}" data-type="${path}">

						<img src="${img}" alt="${type} ${name}" class="goods-offer__image">

						<div class="goods-offer__hide hide-text">
							<p class="hide-text__item search-good"><span class="hide-text__item_titles">Бренд:</span>
							<br> ${brend}</p>
							<p class="hide-text__item search-good"><span class="hide-text__item_titles">Материал:</span> 
							<br>${material}</p>
							<a class="hide-text__item_about" href="item.html#${id}">Подробнее >></a>
							<a href="#cart" class="hide-text__item_add popup-link" data-cart="${id}"></a>
						</div>
						<!-- /.hide-text -->

						<div class="goods-offer__container">
							<div class="goods-offer__text">
								<p class="goods-offer__type search-good">${type}</p>
								<p class="goods-offer__name search-good">${name}</p>
							</div>
							<div class="goods-offer__price">
								<p class="goods-offer__old-price">&nbsp;${old_price}</p>
								<p class="goods-offer__new-price">&nbsp;${new_price}</p>
							</div>
						</div>
						<!-- /.goods-offer__container -->

					</div>
					<!-- /.goods-offer -->	
			`;
		});

		goods_wrapper.innerHTML += htmlCatalog;
	}
}

const goodsPage = new Goods();
goodsPage.render();


