// Рендеринг корзины товаров

let cart_wrapper = document.querySelector(".popup-buy");

class Cart {
	render() {
		let CartCatalog = '';
		catalog.forEach(({id, img, type, name, new_price}) => {

			CartCatalog += `
			<div class="popup-buy__group" data-price="${new_price}" data-cart="${id}">

				<img class="popup-buy__image" src="${img}" alt="товар">

				<div class="popup-buy__text-box">
					<span class="popup-buy__item">${type} ${name}</span>
					<span class="popup-buy__item">${new_price} руб.</span>

					<div class="popup-buy__button-box"> 
						<span class="popup-buy__button" id="button-plus" data-id="${id}">+</span>
						<input type="text" class="popup-buy__number" data-price="${new_price}" data-id="${id}" value="1">
						<span class="popup-buy__button" id="button-minus" data-id="${id}">-</span>
					</div>

					<div>
						<button class="popup-buy__accept" data-cart="${id}">Подтвердить</button>
						<button class="popup-buy__delete" data-cart="${id}">
							<img class="popup-buy__delete-button" src="img/popup/delete.png" >
						</button>
					</div>

					<p class="popup-buy__summ">Выбрано на сумму:</p>
					<div class="popup-buy__result-box">
						<input type="text" class="popup-buy__result" data-price="${new_price}" value="${new_price}" disabled>
						<span class="popup-buy__currency">руб.</span>
					</div>
				</div>
				<!-- /.popup-buy__text-box -->

		

			</div>
			<!-- /.popup-buy__group -->
			`;
		});

		cart_wrapper.innerHTML += CartCatalog;
	}
}

const cartPopup = new Cart();
cartPopup.render();


// Переменные для корзины

let number = $(".popup-buy__number");
let summ_item = $(".popup-buy__result");
let summ_cart = document.querySelector(".popup-cart__result");
let cart_item_list = $(".popup-buy__group");
let plus = document.querySelectorAll("#button-plus");
let minus = document.querySelectorAll("#button-minus");
let number_button = $(".popup-buy__button");
let delete_item = $(".popup-buy__delete");
let accept = $(".popup-buy__accept");
let add_button = $(".hide-text__item_add");
let add_button_item = $(".buying__add");


// Калькулятор цены

function Result_item() {
	for (let i = 0; i < number.length; i++) {
		if (summ_item[i].getAttribute('data-price') == number[i].getAttribute('data-price')) {
			summ_item[i].value = number[i].getAttribute('data-price')*number[i].value;
		}
	}
}

function Result() {
	let sum = 0;
	for (let i = 0; i < summ_item.length; i++) {
		if (cart_item_list[i].hasAttribute("data-display") && $(cart_item_list[i]).attr("data-price") == $(summ_item[i]).attr("data-price")) {
			sum = sum + parseInt(summ_item[i].value);
			summ_cart.innerHTML = sum + " руб.";
			if (number[i].value == "0" && $(number[i]).attr('data-id') == $(delete_item[i]).attr('data-cart')) {
				sum = sum - summ_item[i].value;
				summ_cart.innerHTML = sum + " руб.";
			}
		}
	}
}


// Управление количеством выбранных товаров в корзине

function Accept() {
	for (let i = 0; i < accept.length; i++) {
		$(accept[i]).removeAttr('disabled');
		$(accept[i]).on("click", function () {
			Result_item();
			Result();
			if ($(cart_item_list[i]).attr('data-cart') == $(accept[i]).attr('data-cart')) {
				$(accept[i]).attr('disabled', 'true');
			}
			if (number[i].value == "0" && $(number[i]).attr('data-id') == $(accept[i]).attr('data-cart')) {
				$(cart_item_list[i]).css("display", "none");
			}
		});
	}	
}

for (let i = 0; i < plus.length; i++) {
	$(plus[i]).on("click", function () {
		if ($(number[i]).attr('data-id') == $(plus[i]).attr('data-id')) {
			number[i].value++;
			Accept();
		}	
	});
}

for (let i = 0; i < minus.length; i++) {
	$(minus[i]).on("click", function () {
		if (number[i].value >= 1 && $(number[i]).attr('data-id') == $(minus[i]).attr('data-id')) {
			number[i].value--;	
			Accept();
		}
		if (number[i].value == "0" && $(number[i]).attr('data-id') == $(minus[i]).attr('data-id')) {	
			if ($(cart_item_list[i]).attr('data-cart') == $(number[i]).attr('data-id')) {
				number[i].value;	
			}
		}
	});
}

for (let i = 0; i < number.length; i++) {
	$(number[i]).on("click", function () {
		Accept();
	});
}


// Добавление товаров из каталога в корзину и удаление из корзины

for (let i = 0; i < add_button.length; i++) {
	$(add_button[i]).on("click", function () {
		for (let j = 0; j < cart_item_list.length; j++) {
			if ($(cart_item_list[j]).attr('data-cart') == $(add_button[i]).attr('data-cart')) {
				$(cart_item_list[j]).css("display", "flex");
				$(cart_item_list[j]).attr("data-display", "true");
				$(".popup-cart__order").css("display", "block");
				$(".popup-cart__summ").css("display", "block");
				$(number[j]).val("1");
			}	
		}
		Result_item();
		Result();
	});
}

for (let i = 0; i < add_button_item.length; i++) {
	$(add_button_item[i]).on("click", function () {
		for (let j = 0; j < cart_item_list.length; j++) {
			if ($(cart_item_list[j]).attr('data-cart') == $(add_button_item[i]).attr('data-cart')) {
				$(cart_item_list[j]).css("display", "flex");
				cart_item_list[j].setAttribute("data-display", "true");
				$(".popup-cart__order").css("display", "block");
				$(".popup-cart__summ").css("display", "block");
				$(number[j]).val("1");
			}	
		}
		Result_item();
		Result();
	});
}

for (let i = 0; i < delete_item.length; i++) {
	$(delete_item[i]).on("click", function () {
		if ($(number[i]).attr('data-id') == $(delete_item[i]).attr('data-cart')) {
			$(number[i]).val("0");
			Result();
			$(cart_item_list[i]).css("display", "none");
		}
	});
}


