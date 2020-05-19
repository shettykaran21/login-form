let strength = 0,
  validations = [];

const bar1 = document.querySelector('.bar-1');
const bar2 = document.querySelector('.bar-2');
const bar3 = document.querySelector('.bar-3');
const bar4 = document.querySelector('.bar-4');
const passwordInput = document.querySelector('#password');
const list = document.querySelector('ul');

passwordInput.addEventListener('input', validatePassword);

function validatePassword(e) {
  const password = e.target.value;

  validations = [
    password.length > 5,
    password.search(/[A-Z]/) > -1,
    password.search(/[0-9]/) > -1,
    password.search(/[$&+,:;?@#]/) > -1,
  ];

  console.log(strength);

  strength = validations.reduce((acc, cur) => acc + cur);

  if (strength > 0) {
    bar1.classList.add('box-show');
  } else {
    bar1.classList.remove('box-show');
  }

  if (strength > 1) {
    bar2.classList.add('box-show');
  } else {
    bar2.classList.remove('box-show');
  }

  if (strength > 2) {
    bar3.classList.add('box-show');
  } else {
    bar3.classList.remove('box-show');
  }

  if (strength > 3) {
    bar4.classList.add('box-show');
  } else {
    bar4.classList.remove('box-show');
  }
}
