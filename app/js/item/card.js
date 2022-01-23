let item_wrapper = document.querySelector(".popup__content");

class Item {
	render() {
		let ItemCatalog = '';
		catalog.forEach(({id, classes, path, group, brend_img, material, img, img1, img2, img3, type, name, old_price, new_price, description}) => {
			ItemCatalog += `
			<div class="popup__group popup__group" id="${id}">

				<nav class="breadcrumbs">
					<ul class="breadcrumbs__nav" id="breadcrumbs">
						<li class="breadcrumbs__crumb"><a class="breadcrumbs__link" href="index.html">Главная</a></li>
						<li class="breadcrumbs__crumb"><a class="breadcrumbs__link" href="#">Каталог товаров</a></li>
						<li class="breadcrumbs__crumb breadcrumbs__crumb_path"><a class="breadcrumbs__link" href="#">${path}</a></li>
						<li class="breadcrumbs__crumb breadcrumbs__crumb_good"><a class="breadcrumbs__link current" href="#">${type} "${name}"</a></li>
					</ul>
				</nav>
				<!-- /.breadcrumbs -->

				<div class="popup__box">
				
					<section class="card">
				
						<div class="card__offer card-offer">

							<div class="card-offer__pictures card-pictures">

								<img src="${img}" alt="item" class="card-pictures__image">
							
								<div class="card-slider swiper-container">

									<div class="card-slider__wrapper swiper-wrapper">

										<div class="card-slider__slide swiper-slide">
											<div class="card-slider__item">
												<img class="card-slider__image" src="${img1}" alt="item">
											</div>
										</div>

										<div class="card-slider__slide swiper-slide">
											<div class="card-slider__item">
												<img class="card-slider__image" src="${img2}" alt="item">
											</div>
										</div>

										<div class="card-slider__slide swiper-slide">
											<div class="card-slider__item">
												<img class="card-slider__image" src="${img3}" alt="item">
											</div>
										</div>

									</div>
									<!-- /.swiper-wrapper -->

								</div> 
								<!-- /.swiper-container -->

							</div>
							<!-- /.card-pictures -->

							<div class="card-offer__container details">
							
									<h2 class="details__title">${group} <br> ${type} "${name}"</h2>
								<div class="details__feedback feedback">
									<img src="img/pages/item/icons/star.png" alt="star" class="feedback__icon">
									<img src="img/pages/item/icons/star.png" alt="star" class="feedback__icon">
									<img src="img/pages/item/icons/star.png" alt="star" class="feedback__icon">
									<img src="img/pages/item/icons/star.png" alt="star" class="feedback__icon">
									<img src="img/pages/item/icons/star.png" alt="star" class="feedback__icon">
									<a href="#feedbacks" class="feedback__link">0.0 / 0 отзывов</a>
								</div>
								<div class="details__box details-box">
									<div class="details-box__pricing pricing">
										<p class="pricing__old-price">${old_price}</p>
										<p class="pricing__new-price">${new_price}</p>
										<img src="${brend_img}" alt="brend-name" class="pricing__brend">
									</div>
									<div class="details-box__buying buying">
										<button class="buying__add">В корзину</button>
										<p class="buying__availability">Товар в наличии</p>
										<img src="img/pages/item/icons/delivery.png" alt="delivery" class="buying__delivery">
									</div>
								</div>
								<p class="details__description">${description}</p>

							</div>
							<!-- /.details -->

						</div>
						<!-- /.card-offer -->

						<div class="card__characteristics characteristics">

							<h3 class="characteristics__title">Основные характеристики:</h3>

							<ul class="characteristics__list">

								<li class="characteristics__item">
									<span class="characteristics__text">Гарантийный срок:</span>
									<span class="characteristics__info">1 год</span>
								</li>
								<li class="characteristics__item">
									<span class="characteristics__text">Длина кабеля:</span>
									<span class="characteristics__info">160 см</span>
								</li>
								<li class="characteristics__item">
									<span class="characteristics__text">Материал:</span>
									<span class="characteristics__info">${material}</span>
								</li>
								<li class="characteristics__item">
									<span class="characteristics__text">Напряжение:</span>
									<span class="characteristics__info">230 В</span>
								</li>
								<li class="characteristics__item">
									<span class="characteristics__text">Питание:</span>
									<span class="characteristics__info">От сети 220 - 230 В 50 Гц</span>
								</li>
								<li class="characteristics__item">
									<span class="characteristics__text">Вес:</span>
									<span class="characteristics__info">4 кг</span>
								</li>
								<li class="characteristics__item">
									<span class="characteristics__text">Высота:</span>
									<span class="characteristics__info">22,5 см</span>
								</li>
								<li class="characteristics__item">
									<span class="characteristics__text">Тип светильника:</span>
									<span class="characteristics__info">Солевая лампа, Настольный ночник</span>
								</li>
								<li class="characteristics__item">
									<span class="characteristics__text">Страна производителя:</span>
									<span class="characteristics__info">Пакистан</span>
								</li>
								<li class="characteristics__item">
									<span class="characteristics__text">Комплектация:</span>
									<span class="characteristics__info">Инструкция; Солевая лампа; Лампочка Е14 15 Вт; <br> Патрон для лампы с сетевым проводом</span>
								</li>

							</ul>

						</div>

						<div class="card__feedbacks feedbacks" id="feedbacks">

							<h3 class="feedbacks__title">Отзывы</h3>
							<p class="feedbacks__text">На этот товар ещё не поступало отзывов</p>

						</div>

					</section>
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



