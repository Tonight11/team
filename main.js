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

let current;
let bg = document.querySelector('.header');
let btnSwip = document.querySelectorAll('.btn-swiper');

btnSwip.forEach(i => {
	i.addEventListener('click', e => {
		current = +document.querySelector('.swiper-pagination-current')
			.innerText;
		const target = e.target;
		console.log(current);
		if (current == 1) {
			bg.style.backgroundImage = "url('../img/1.jpg')";
		} else if (current == 2) {
			bg.style.backgroundImage = "url('../img/bg2.jpg')";
		} else {
			bg.style.backgroundImage = "url('../img/bg3.jpg')";
		}
	});
});
