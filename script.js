const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const buttonField = document.getElementById('submit');


class EmptyField extends Error {
    constructor(field) {
    const message = `$(field) cannot be empty`; 
    super(message); 
    this.name = 'EmptyFeld';
    }
}

class EmptyForm extends Error {
    constructor(message) {
        super(message);
        this.name = 'Ошибка формы';

    }
}

class SmallPass extends Error {
    constructor(password) {
    const message2 = `пароль не может быть короче 4 символов`; 
    super(message2); 
    this.name = 'Ошибка пароля';
    }
}


class DogOut extends Error {
    constructor(email) {
    const message3 = `введите корректную почту`; 
    super(message3); 
    this.name = 'Ошибка почты';
    }
}

const formData = {
    login: null,
    password: null
};
  
function isValidEmail(emailField) {
    const EMAIL_REGEXP = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return EMAIL_REGEXP.test(emailField);

    }
 

emailField.addEventListener('keyup', ({target: {value}}) => formData.login = value);

emailField.addEventListener('blur', ({target: {value}}) => {
try {
    if(!value.length) throw new EmptyField('login');
} catch (e) {
    console.log(e);
}
});

passwordField.addEventListener('keyup', ({target: {value}}) => formData.password = value);

passwordField.addEventListener('blur', ({target: {value}}) => {
try {
    if(!value.length) throw new EmptyField('password');
} catch (e) {
    console.log(e);
}
});
buttonField.addEventListener('click', () => {
   try {
    if (!formData.login || !formData.password) throw new EmptyForm('Форма не может быть пустой');
 } catch (e) {
    alert(e);
 }

 try {
    if (passwordField.value.length < 4 && formData.password) throw new SmallPass('malo');
 } catch (e) {
    alert(e);
 }


 try {
    if  (!isValidEmail(emailField.value)) throw new DogOut('without dog');
 } catch (e) {
    alert(e)
 }


});




