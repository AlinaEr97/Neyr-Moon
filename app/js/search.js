// Настройка строки поиска

let search_wrapper = document.querySelector(".search-items");
let searchItems = document.querySelectorAll(".search__item");

document.querySelector("#search").oninput = function Searching() {
	search_wrapper.style.display = "flex";
	let val = this.value.trim();
	class Search {
		render() {
			let htmlSearch = '';
			catalog.forEach(({brend, material, type, name}) => {
				htmlSearch += `
					<li class="search__item">${brend}</li>
					<li class="search__item">${material}</li>
					<li class="search__item">${type}</li>
					<li class="search__item">${name}</li>
				`
			});
			search_wrapper.innerHTML = htmlSearch;

			let searchItems = document.querySelectorAll(".search__item");
			if (val != '') {
				searchItems.forEach(function(elem) {
					if (elem.innerText.search(val) == -1) {
						elem.classList.add('hide');
					}
					else {
						elem.classList.remove('hide');
					}
				});
			}
			else {
				searchItems.forEach(function(elem) {
					elem.classList.remove('hide');
				});
			}
		}
	}
	const searchPage = new Search();
	searchPage.render();

	document.querySelector("#search").addEventListener('focusout', function (event) { 
		if (this.contains(event.relatedTarget)) return; 
		else {
			search_wrapper.style.display = "none";
		} 
	});
	document.querySelector("#search").addEventListener('focusin', function (event) { 
		if (this.contains(event.relatedTarget)) return; 
		else {
			search_wrapper.style.display = "flex";
		} 
	});
}



