class Validator {
  // globally unique value
  static REQUIRED = 'REQUIRED';
  static MIN_LENGTH = 'MIN_LENGTH';

  // we can call 'validate' method without instanciating by making it static!
  static validate(value, flag, validatorValue) {
    if (flag === this.REQUIRED) {
      return value.trim().length > 0;
    }
    if (flag === this.MIN_LENGTH) {
      return value.trim().length > validatorValue;
    }
  }
}

class User {
  constructor(uName, uPassword) {
    this.userName = uName;
    this.password = uPassword;
  }

  greet() {
    console.log(`Hi, I am ${this.userName}`)
  }
}

class UserInputForm {
  constructor() {
    this.form = document.getElementById('user-input');
    this.userNameInput = document.getElementById('username');
    this.passwordInput = document.getElementById('password');

    this.form.addEventListener('submit', this.signupHandler.bind(this)); // -> bind를 해줘야 해당 인스턴스를 가르킴.
  }

  signupHandler(event) {
    event.preventDefault();
    // 여기서 this는 event target을 가르키게 됨!
    const enteredUserName = this.userNameInput.value;
    const enteredPassowrd = this.passwordInput.value;

    if (
      !Validator.validate(enteredUserName, Validator.REQUIRED) ||
      !Validator.validate(enteredPassowrd, Validator.MIN_LENGTH, 5)
      ) {
        alert('Invalid Input - username or password is wrong. (password should be at least 6 characters');
        return;
    }

    const newUser = new User(enteredUserName, enteredPassowrd);
    console.log(newUser);
    newUser.greet();
  }
}

// instance 할 필요 없이 그냥 사용할땐 이렇게!
new UserInputForm();