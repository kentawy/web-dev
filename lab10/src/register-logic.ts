import { FormData, validateForm, normalizeForm, FormErrors } from './validator.js';

const regForm = document.querySelector<HTMLFormElement>('#registration-form');

const inputName = document.querySelector<HTMLInputElement>('#reg-username');
const inputEmail = document.querySelector<HTMLInputElement>('#reg-email');
const inputPassword = document.querySelector<HTMLInputElement>('#reg-password');
const inputBirth = document.querySelector<HTMLInputElement>('#reg-birth');
const inputConsent = document.querySelector<HTMLInputElement>('#reg-terms');

const errorName = document.querySelector<HTMLSpanElement>('#error-reg-username');
const errorEmail = document.querySelector<HTMLSpanElement>('#error-reg-email');
const errorPassword = document.querySelector<HTMLSpanElement>('#error-reg-password');
const errorBirth = document.querySelector<HTMLSpanElement>('#error-reg-birth');
const errorConsent = document.querySelector<HTMLSpanElement>('#error-reg-terms');

const allInputs = [inputName, inputEmail, inputPassword, inputBirth, inputConsent];
const allErrorSpans = [errorName, errorEmail, errorPassword, errorBirth, errorConsent];

const clearErrors = () => {
  allInputs.forEach(input => input?.classList.remove('input-error'));
  allErrorSpans.forEach(span => {
    if (span) span.textContent = '';
  });
};

regForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  clearErrors();

  const data: FormData = {
    name: inputName?.value || '',
    email: inputEmail?.value || '',
    password: inputPassword?.value || '',
    age: Number(inputBirth?.value ? 
         (new Date().getFullYear() - new Date(inputBirth.value).getFullYear()) : 0),
    consent: inputConsent?.checked || false,
  };
  
  const normalizedData = normalizeForm(data);
  const errors: FormErrors = validateForm(normalizedData);
  
  console.log('Normalized Data:', normalizedData);
  console.log('Errors:', errors);

  if (Object.keys(errors).length > 0) {
    if (errors.name && inputName && errorName) {
      errorName.textContent = errors.name;
      inputName.classList.add('input-error');
    }
    if (errors.email && inputEmail && errorEmail) {
      errorEmail.textContent = errors.email;
      inputEmail.classList.add('input-error');
    }
    if (errors.password && inputPassword && errorPassword) {
      errorPassword.textContent = errors.password;
      inputPassword.classList.add('input-error');
    }
    if (errors.age && inputBirth && errorBirth) {
      errorBirth.textContent = errors.age;
      inputBirth.classList.add('input-error');
    }
    if (errors.consent && inputConsent && errorConsent) {
      errorConsent.textContent = errors.consent;
      inputConsent.classList.add('input-error');
    }
  } else {
    alert('Форма валідна! Відправляємо...');
  }
});