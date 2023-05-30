const formLogin = document.querySelector('.login-form');

const loginDate = {};

formLogin.addEventListener('submit', event => {
    event.preventDefault();

    if (formLogin.elements.email.value === '' || formLogin.elements.password.value === '') {
        return alert('Please fill in all fields!');
    }
    else {

        loginDate.email = formLogin.elements.email.value;
        loginDate.password = formLogin.elements.password.value;
    }
    console.log(loginDate);
    formLogin.reset();
});
