import { nanoid } from 'nanoid'

const passwordBtn = document.querySelector('.generateBtn');
const displayPassword = document.querySelector('h2');
const copyPassword = document.querySelector('.copyBtn');

passwordBtn.addEventListener('click', () => {
  const randomPassword = nanoid();
  displayPassword.innerHTML = randomPassword;
});

copyPassword.addEventListener('click', () => {
  const password = displayPassword.innerHTML;
  navigator.clipboard.writeText(password);
  alert('A senha foi copiada');
  displayPassword.innerHTML = '...';
});