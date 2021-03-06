// Рендеринг карточек товаров 

let item_wrapper = document.querySelector(".popup-item__content");

class Item {
	render() {
		let ItemCatalog = '';
		catalog.forEach(({id, path, path_link, group, brend, brend_img, material, img, img1, img2, img3, type, name, old_price, new_price, description, cable, voltage, weight, height, madein, equipment}) => {

			ItemCatalog += `
			<div class="popup-item__group" id="${id}">

				<nav class="breadcrumbs-item">
					<ul class="breadcrumbs-item__nav" id="breadcrumbs">
						<li class="breadcrumbs-item__crumb"><a class="breadcrumbs-item__link" href="index.html">Главная</a></li>
						<li class="breadcrumbs-item__crumb"><a class="breadcrumbs-item__link" href="catalog.html">Каталог товаров</a></li>
						<li class="breadcrumbs-item__crumb breadcrumbs-item__crumb_path"><a class="breadcrumbs-item__link" href="${path_link}">${path}</a></li>
						<li class="breadcrumbs-item__crumb breadcrumbs-item__crumb_good"><a class="breadcrumbs-item__link current" href="#">${type} "${name}"</a></li>
					</ul>
				</nav>
				<!-- /.breadcrumbs -->

				<div class="popup-item__box">
				
					<article class="card">
				
						<div class="card-offer">

							<div class="card-pictures">

								<img src="${img}" alt="${type} ${name}" class="card-pictures__image">
							
								<div class="card-slider swiper-container">

									<div class="swiper-wrapper card-slider__wrapper">

										<div class="swiper-slide card-slider__slide">
											<div class="card-slider__item">
												<img class="card-slider__image" src="${img1}" alt="${type} ${name}">
											</div>
										</div>

										<div class=" swiper-slide card-slider__slide">
											<div class="card-slider__item">
												<img class="card-slider__image" src="${img2}" alt="${type} ${name}">
											</div>
										</div>

										<div class="swiper-slide card-slider__slide">
											<div class="card-slider__item">
												<img class="card-slider__image" src="${img3}" alt="${type} ${name}">
											</div>
										</div>

									</div>
									<!-- /.swiper-wrapper -->

								</div> 
								<!-- /.swiper-container -->

							</div>
							<!-- /.card-pictures -->

							<div class="details">
							
									<h1 class="details__title">${group} <br> ${type} "${name}"</h1>
								<div class="details__feedback feedback">
									<img src="img/pages/item/icons/star.png" alt="рейтинг товара" class="feedback__icon">
									<img src="img/pages/item/icons/star.png" alt="рейтинг товара" class="feedback__icon">
									<img src="img/pages/item/icons/star.png" alt="рейтинг товара" class="feedback__icon">
									<img src="img/pages/item/icons/star.png" alt="рейтинг товара" class="feedback__icon">
									<img src="img/pages/item/icons/star.png" alt="рейтинг товара" class="feedback__icon">
									<a href="#feedbacks" class="feedback__link">0.0 / 0 отзывов</a>
								</div>
								<div class="details-box">
									<div class="pricing">
										<p class="pricing__old-price">${old_price}</p>
										<p class="pricing__new-price">${new_price}</p>
										<img src="${brend_img}" alt="${brend}" class="pricing__brend">
									</div>
									<div class="buying">
										<a href="#cart" class="buying__add popup-link" data-cart="${id}">В корзину</a>
										<p class="buying__availability">Товар в наличии</p>
										<img src="img/pages/item/icons/delivery.png" alt="Доставка" class="buying__delivery">
									</div>
								</div>
								<p class="details__description">${description}</p>

							</div>
							<!-- /.details -->

						</div>
						<!-- /.card-offer -->

						<div class="characteristics">

							<h3 class="characteristics__title">Основные характеристики:</h3>

							<ul class="characteristics__list">

								<li class="characteristics__item">
									<span class="characteristics__text">Гарантийный срок:</span>
									<span class="characteristics__info">1 год</span>
								</li>
								<li class="characteristics__item">
									<span class="characteristics__text">Длина кабеля:</span>
									<span class="characteristics__info">${cable}</span>
								</li>
								<li class="characteristics__item">
									<span class="characteristics__text">Материал:</span>
									<span class="characteristics__info">${material}</span>
								</li>
								<li class="characteristics__item">
									<span class="characteristics__text">Питание:</span>
									<span class="characteristics__info">${voltage}</span>
								</li>
								<li class="characteristics__item">
									<span class="characteristics__text">Вес:</span>
									<span class="characteristics__info">${weight}</span>
								</li>
								<li class="characteristics__item">
									<span class="characteristics__text">Высота:</span>
									<span class="characteristics__info">${height}</span>
								</li>
								<li class="characteristics__item">
									<span class="characteristics__text">Тип светильника:</span>
									<span class="characteristics__info">${group} ${type}</span>
								</li>
								<li class="characteristics__item">
									<span class="characteristics__text">Страна производитель:</span>
									<span class="characteristics__info">${madein}</span>
								</li>
								<li class="characteristics__item">
									<span class="characteristics__text">Комплектация:</span>
									<span class="characteristics__info">${equipment}</span>
								</li>

							</ul>

						</div>

						<div class="card__feedbacks feedbacks" id="feedbacks">

							<h3 class="feedbacks__title">Отзывы</h3>
							<p class="feedbacks__text">На этот товар ещё не поступало отзывов</p>

						</div>

					</article>
					<!-- /.card -->

					<section class="similar">

						<h2 class="similar__title">Похожие товары</h2>

						<div class="similar__wrapper">
						</div>

					</section>
					<!-- /.similar -->

				</div>

			</div>
			`;
		});

		item_wrapper.innerHTML += ItemCatalog;
	}
}

const itemPage = new Item();
itemPage.render();





