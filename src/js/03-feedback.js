import throttle from 'lodash.throttle';
const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');
const textareaEl = document.querySelector('textarea');
formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', onFormSubmit);

let formData = {};
const parsedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));
if (parsedFormData) {
  if (parsedFormData.email) {
    formData.email = parsedFormData.email;
  }
  if (parsedFormData.message) {
    formData.message = parsedFormData.message;
  }

  fillForm();
}

function onFormInput(event) {
  formData[event.target.name] = event.target.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();
  if (formData.email || formData.message) {
    console.log(formData);
  }
  formData = {};

  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function fillForm() {
  if (parsedFormData.email) {
    inputEl.value = formData.email;
  }
  if (parsedFormData.message) {
    textareaEl.value = formData.message;
  }
}
