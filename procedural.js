const form = document.getElementById('user-input');
const userNameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

function signupHandler(e) {
  e.preventDefault();

  const enteredUsername = userNameInput.value;
  const enteredPassword = passwordInput.value;

  if(enteredUsername.trim().length === 0) {
    alert('Invalid Input - username must not be empty!');
    return;
  }

  if (enteredPassword.trim().length <= 5) {
    alert('Invalid Input - password must be six characters or longer.');
    return;
  }

  const user = {
    userName: enteredUsername,
    password: enteredPassword
  }

  console.log(user);
}

form.addEventListener('submit', signupHandler);