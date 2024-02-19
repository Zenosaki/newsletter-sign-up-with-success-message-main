document.querySelector('.js-submit').addEventListener('click', () => {
  const email = document.querySelector('.js-user-email').value;
  let result = false;

  for (let i = 0; i < email.length; i++) {
    if (email[i] === '@') {
      result = true;
      console.log(email);
      break;
    }
  }

  if (result === true) {
    document.querySelector('.js-main').classList.add('js-hide');
    document.querySelector('.email-valid').classList.remove('appearance');
    document.querySelector('.js-email').innerHTML = email;
  } else if(result === false) {
    document.querySelector('.Email-Box').classList.add('js-not-valid');
    document.querySelector('.js-email-required').classList.remove('email-title');
  }
});

document.querySelector('.dismiss').addEventListener('click', () => {
  location.reload();
});
