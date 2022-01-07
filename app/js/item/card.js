let card_wrapper = document.getElementById ("card");
class Card {
	render() {
		let htmlItem = '';
		catalog.forEach(({classes, brend, material, img, type, name, old_price, new_price}) => {
			htmlItem += `
					<div class="card__offer card-offer ${classes}">

							<img src="${img}" alt="#" class="card-offer__image">

							<div class="card-offer__hide">
								<p class="hide-text__item search-good"><span class="hide-text__item_titles">Бренд:</span>
								<br> ${brend}</p>
								<p class="hide-text__item search-good"><span class="hide-text__item_titles">Материал:</span> 
								<br>${material}</p>
								<a class="hide-text__item_about" href='item.html'>Подробнее >></a>
								<a class="hide-text__item_add" href='#'></a>
							</div>
							<!-- /.hide-text -->

							<div class="card-offer__container kitchen-offer__container">
								<div class="card-offer__text">
									<p class="card-offer__type search-good">${type}</p>
									<p class="card-offer__name search-good">${name}</p>
								</div>
								<div class="card-offer__price">
									<p class="card-offer__old-price">&nbsp;${old_price}</p>
									<p class="card-offer__new-price">&nbsp;${new_price}</p>
								</div>
							</div>
							<!-- /.card-offer__container -->

					</div>
					<!-- /.card-offer -->	
			`;
		});

		goods_wrapper.innerHTML = htmlItem;
	}
}