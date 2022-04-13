//Рендеринг корзины товаров

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

let number = document.querySelectorAll(".popup-buy__number");
let summ_item = document.querySelectorAll(".popup-buy__result");
let summ_cart = document.querySelector(".popup-cart__result");
let cart_item_list = document.querySelectorAll (".popup-buy__group");
let plus = document.querySelectorAll("#button-plus");
let minus = document.querySelectorAll("#button-minus");
let number_button = document.querySelectorAll(".popup-buy__button");
let delete_item = document.querySelectorAll(".popup-buy__delete");
let accept = document.querySelectorAll(".popup-buy__accept");
let add_button = document.querySelectorAll(".hide-text__item_add");
let add_button_item = document.querySelectorAll(".buying__add");


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
		for (let j = 0; j < cart_item_list.length; j++) {
			if (cart_item_list[j].hasAttribute("data-display") && cart_item_list[j].getAttribute("data-price") == summ_item[i].getAttribute("data-price")) {
				sum = sum + parseInt(summ_item[i].value);
				summ_cart.innerHTML = sum + " руб.";
				if (number[i].value == "0" && number[i].getAttribute('data-id') == delete_item[i].getAttribute('data-cart')) {
					sum = sum - summ_item[j].value;
					summ_cart.innerHTML = sum + " руб.";
				}
			}
			
		}
	}
}


// Управление количеством выбранных товаров в корзине

function Accept() {
	for (let i = 0; i < accept.length; i++) {
		accept[i].removeAttribute('disabled');
		accept[i].onclick = () => {
			Result_item();
			Result();
			if (cart_item_list[i].getAttribute('data-cart') == accept[i].getAttribute('data-cart')) {
				accept[i].setAttribute('disabled', 'true');
			}
			if (number[i].value == "0" && number[i].getAttribute('data-id') == accept[i].getAttribute('data-cart')) {
				cart_item_list[i].style.display = "none";
			}
			
		}
	}	
}

for (let i = 0; i < plus.length; i++) {
	plus[i].onclick = () => {
		if (number[i].getAttribute('data-id') == plus[i].getAttribute('data-id')) {
			number[i].value++;
			Accept();
		}	
	}
}

for (let i = 0; i < minus.length; i++) {
	minus[i].onclick = () => {
		if (number[i].value >= 1 && number[i].getAttribute('data-id') == minus[i].getAttribute('data-id')) {
			number[i].value--;	
			Accept();
		}
		if (number[i].value == "0" && number[i].getAttribute('data-id') == minus[i].getAttribute('data-id')) {	
			for (let k = 0; k < cart_item_list.length; k++) {
				if (cart_item_list[k].getAttribute('data-cart') == number[j].getAttribute('data-id')) {
					number[j].value;	
				}
			}
		}
	}
}

for (let i = 0; i < number.length; i++) {
	number[i].onclick = () => {
		Accept();
	}
}


// Добавление товаров из каталога в корзину и удаление из корзины

for (let i = 0; i < add_button.length; i++) {
	add_button[i].onclick = () => {
		for (let j = 0; j < cart_item_list.length; j++) {
			if (cart_item_list[j].getAttribute('data-cart') == add_button[i].getAttribute('data-cart')) {
				cart_item_list[j].style.display = "flex";
				cart_item_list[j].setAttribute("data-display", "true");
				document.querySelector(".popup-cart__order").style.display = "block";
				document.querySelector(".popup-cart__summ").style.display = "block";
				number[j].value = "1";
			}	
		}
		Result_item();
		Result();
	}
}

for (let i = 0; i < add_button_item.length; i++) {
	add_button_item[i].onclick = () => {
		for (let j = 0; j < cart_item_list.length; j++) {
			if (cart_item_list[j].getAttribute('data-cart') == add_button_item[i].getAttribute('data-cart')) {
				cart_item_list[j].style.display = "flex";
				cart_item_list[j].setAttribute("data-display", "true");
				document.querySelector(".popup-cart__order").style.display = "block";
				document.querySelector(".popup-cart__summ").style.display = "block";
				number[j].value = "1";
			}	
		}
		Result_item();
		Result();
	}
}

for (let i = 0; i < delete_item.length; i++) {
	delete_item[i].onclick = () => {
		if (number[i].getAttribute('data-id') == delete_item[i].getAttribute('data-cart')) {
			number[i].value = "0";
			Result();
			cart_item_list[i].style.display = "none";
		}
	}
}


