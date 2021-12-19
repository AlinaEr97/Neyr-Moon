let goods_wrapper = document.getElementById ("goods");
class Goods {
	render() {
		let htmlCatalog = '';
		catalog.forEach(({classes, brend, material, img, type, name, old_price, new_price}) => {
			htmlCatalog += `
					<div class="goods__offer goods-offer ${classes}">

							<img src="${img}" alt="#" class="goods-offer__image">

							<div class="goods-offer__hide hide-text">
								<p class="hide-text__item search-good"><span class="hide-text__item_titles">Бренд:</span>
								<br> ${brend}</p>
								<p class="hide-text__item search-good"><span class="hide-text__item_titles">Материал:</span> 
								<br>${material}</p>
								<a class="hide-text__item_about" href='#'>Подробнее >></a>
								<a class="hide-text__item_add" href='#'></a>
							</div>
							<!-- /.hide-text -->

							<div class="goods-offer__container kitchen-offer__container">
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

		goods_wrapper.innerHTML = htmlCatalog;
	}
}

const goodsPage = new Goods();
goodsPage.render();

