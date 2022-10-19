var swiper = new Swiper('.mySwiper', {
	pagination: {
		el: '.header__count',
		type: 'fraction',
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	loop: true,
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

let next;
let active = 0;
let bg = document.querySelectorAll('[data-back]');
let btnSwip = document.querySelectorAll('.btn-swiper');

btnSwip.forEach(i => {
	i.addEventListener('click', e => {
		next =
			+document.querySelector('.swiper-pagination-current').innerText - 1;

		const currentItem = document.querySelector(`[data-index="${active}"]`),
			nextItem = document.querySelector(`[data-index="${next}"]`);

		currentItem.dataset.back = 'after';
		nextItem.dataset.back = 'active';

		active = next;
	});
});
