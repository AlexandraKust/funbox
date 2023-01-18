// получение всех карточек 
let cards = document.querySelectorAll('.catalog__item');

// при клике на карточку присваеваем класс selected
cards.forEach(item => item.addEventListener('click', function () {
	if (!item.classList.contains('disabled')) {
		item.classList.toggle('selected');
	}
	cardStatus();
}));

// событие при наведении мыши на карточку
cards.forEach(item => item.addEventListener("mouseover", function () {
	if (item.classList.contains('selected')) {
		this.querySelector('.card-catalog__descr').innerHTML = "Котэ не одобряет?";
		this.querySelector('.card-catalog__descr').style.color = "#D91667";
	}
}));
// событие при отводе мыши от карточку
cards.forEach(item => item.addEventListener("mouseout", function () {
	if (item.classList.contains('selected')) {
		this.querySelector('.card-catalog__descr').innerHTML = "Сказочное заморское яство";
		this.querySelector('.card-catalog__descr').style.color = "#666666";
	}
}));

window.addEventListener('load', cardStatus());

// функция отображения состояний карточек
function cardStatus() {
	for (let i = 0; i < cards.length; i++) {
		let cardDescr = cards[i].querySelector('.catalog__descr');
		let spanSelected = cardDescr.querySelector('.catalog__descr-selected');
		let spanDisabled = cardDescr.querySelector('.catalog__descr-disabled');
		let spanDefault = cardDescr.querySelector('.catalog__descr-default');

		let topCardDescr = cards[i].querySelector('.card-catalog__descr');
		topCardDescr.innerHTML = "Сказочное заморское яство";
		topCardDescr.style.color = "#666666";

		if (cards[i].classList.contains("selected")) {
			spanSelected.style.display = "block";
			spanDisabled.style.display = "none";
			spanDefault.style.display = "none";

		}
		else if (cards[i].classList.contains("disabled")) {
			spanDisabled.style.display = "block";
			spanSelected.style.display = "none";
			spanDefault.style.display = "none";
		}
		else if (!cards[i].classList.contains("selected") && !cards[i].classList.contains("disabled")) {
			spanDefault.style.display = "block";
			spanSelected.style.display = "none";
			spanDisabled.style.display = "none";
		}
	}
}



