import { validateForm, normalizeForm } from './validator.js';
const regForm = document.querySelector('#registration-form');
const inputName = document.querySelector('#reg-username');
const inputEmail = document.querySelector('#reg-email');
const inputPassword = document.querySelector('#reg-password');
const inputBirth = document.querySelector('#reg-birth');
const inputConsent = document.querySelector('#reg-terms');
const errorName = document.querySelector('#error-reg-username');
const errorEmail = document.querySelector('#error-reg-email');
const errorPassword = document.querySelector('#error-reg-password');
const errorBirth = document.querySelector('#error-reg-birth');
const errorConsent = document.querySelector('#error-reg-terms');
const allInputs = [inputName, inputEmail, inputPassword, inputBirth, inputConsent];
const allErrorSpans = [errorName, errorEmail, errorPassword, errorBirth, errorConsent];
const clearErrors = () => {
    allInputs.forEach(input => input?.classList.remove('input-error'));
    allErrorSpans.forEach(span => {
        if (span)
            span.textContent = '';
    });
};
regForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    clearErrors();
    const data = {
        name: inputName?.value || '',
        email: inputEmail?.value || '',
        password: inputPassword?.value || '',
        age: Number(inputBirth?.value ?
            (new Date().getFullYear() - new Date(inputBirth.value).getFullYear()) : 0),
        consent: inputConsent?.checked || false,
    };
    const normalizedData = normalizeForm(data);
    const errors = validateForm(normalizedData);
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
    }
    else {
        alert('Форма валідна! Відправляємо...');
    }
});
//# sourceMappingURL=register-logic.js.map