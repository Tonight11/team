var swiper = new Swiper('.mySwiper', {
	pagination: {
		el: '.header__count',
		type: 'fraction',
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

let burger = document.querySelector('.menu__icon');
let iconMenu = document.querySelector('.menu');

if (burger) {
	burger.addEventListener('click', function (e) {
		document.body.classList.toggle('lock');
		burger.classList.toggle('active');
		iconMenu.classList.toggle('active');
	});
}
