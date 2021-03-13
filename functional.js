const REQUIRED = 'REQUIRED';
const MIN_LENGTH = 'MIN_LENGTH';

function validate(value, flag, validatorValue) {
  if (flag === REQUIRED) {
    return value.trim().length > 0;
  }
  if (flag === MIN_LENGTH) {
    return value.trim().length > validatorValue;
  }
}


function getUserInput(inputElementId) {
  return document.getElementById(inputElementId).value;
}


function createUser(userName, userPassword) {
  if (!validate(userName, REQUIRED) || !validate(userPassword, MIN_LENGTH, 5)) {
    // alert(); --> side effect! 
    throw new Error('Invalid Input - username or password is wrong. (password should be at least 6 characters');
  }
  return {
    userName: userName,
    password: userPassword
  }
}


function greetUser(user) {
  console.log(`Hi, I am ${user.userName}`)
}


function signupHandler(e) {
  e.preventDefault();

  const enteredUsername = getUserInput('username');
  const enteredPassword = getUserInput('password');

  // error가 있을수도 있는 함수임! -> try-catch 사용하기!
  try {
    const newUser = createUser(enteredUsername, enteredPassword);
    console.log(newUser);
    greetUser(newUser);
  } catch (error) {
    // alert가 있어서 순수함수가 아니게되지만, 따로 빼서 순수함수로 만들수도 있지만, 이정돈 괜춘! 
    alert(error.message);
  }
}


function connectForm(formId, formSubmitHandler) {
  const form = document.getElementById(formId);
  form.addEventListener('submit', formSubmitHandler);
}
// function connectForm() {
//   const form = document.getElementById('user-input');
//   form.addEventListener('submit')
// }


connectForm('user-input', signupHandler);