const emailForm = document.querySelector('.email-form');
const form = document.querySelector('.email-form form');
const email = document.querySelector('input');
const card = document.querySelector('.card');
const subscribeCard = document.querySelector('.subscribe-card');
const subscribeBtn = subscribeCard.querySelector('button');
const submittedEmail = subscribeCard.querySelector('strong');
const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (email.value && email.value.match(validEmail)) {
    submittedEmail.textContent = email.value;
    emailForm.classList.remove('error');
    card.classList.add('hidden');
    subscribeCard.classList.remove('hidden');
    email.value = '';
  } else {
    emailForm.classList.add('error');
  }
});

subscribeBtn.addEventListener('click', () => {
  card.classList.remove('hidden');
  subscribeCard.classList.add('hidden');
});

email.addEventListener('input', () => {
  emailForm.classList.remove('error');
});
