// Скроллинг
// Добавляем ко всем якорям атрибут data - goto = "Название якоря"
// Якорь записывается в класс секции 
// пример: class="page__section page__section_my-name"
// Скрипт вычисляет высоту шапки и отнимает ее от начала координат секции

const menuLinks = document.querySelectorAll('.menu__link[data-goto]'); // собираем массив значений атрибута goto
if (menuLinks.length > 0) { // если массив больше 0
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener('click', onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

			if (iconMenu.classList.contains('_active')) {	// удаление активных классов при переходе 
				document.body.classList.remove('_lock');		// к якорю из меню бургер
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault(); // отмена выполнения href
		}
	}
}

// Бургер

const iconMenu = document.querySelector('.menu__icon'); // константа для иконки бургера
const menuBody = document.querySelector('.menu__body'); // константа для появления меню
if (iconMenu) { // если константа iconMenu существует 
	iconMenu.addEventListener('click', function (e) {			// при нажатии на иконку происходит добавление классов 
		document.body.classList.toggle('_lock'); 					//к другим классам
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
		myNameLang.classList.toggle('_active');
	});
}