const form = document.querySelector('#form');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');
const toc = document.querySelector('#toc');



const validate = (input) => {
  switch(input.type) {
    case 'text':
      validateText(input);
      break;
    case 'email':
      validateEmail(input);
      break;
    case 'password':
      validatePassword(input);
  }
}


const validateText = (input) => {
  if(input.value.trim() === '') {
    setError(input, 'Name cannot be empty');
  } else if(input.value.trim().length < 2) {
    setError(input, 'Name must be atleast 2 characters long')
  } else {
    setSuccess(input)
  }
}

const validateEmail = (input) => {
  let regEx = /^\w+@[a-zA-Z]+?\.[a-zA-Z-]{2,}$/

  if(input.value.trim() === '') {
    setError(input, 'Email address cannot be empty')
  } else if (!regEx.test(input.value)) {
    setError(input, 'Email address is not valid')
  } else {
    setSuccess(input)
  }
}

const validatePassword = (input) => {
  if(input.value.trim() === '') {
    setError(input, 'Password cannot be empty');
  } else if(input.value.trim().length < 5) {
    setError(input, 'Password must be atleast 5 characters long')
  } else if (!/\d/.test(input.value)) {
    setError(input, 'Password must contain atleast one digit')
  } else {
    setSuccess(input)
  }
}


const setError = (input, message) => {
  const inputGroup = input.parentElement;
  inputGroup.classList.add('error');
  inputGroup.classList.remove('success');

  const error = inputGroup.querySelector('small');
  error.innerText = message;
}

const setSuccess = input => {
  const inputGroup = input.parentElement;
  inputGroup.classList.remove('error');
  inputGroup.classList.add('success');

}



form.addEventListener('submit', e => {
  e.preventDefault();

  validate(firstName)
  validate(lastName)
  validate(email)
  validate(password)
  // validate(password2)
})