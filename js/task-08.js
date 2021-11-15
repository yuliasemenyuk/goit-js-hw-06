
const formEl = document.querySelector('.login-form');
const warnMessage = 'Fill in all the fields!';

formEl.addEventListener('submit', submitted)

function submitted(event) {
    event.preventDefault();
    const {
        elements: {email, password}
    } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        return alert(warnMessage)
    }

    const formResult = {
        email: event.currentTarget.email.value,
        password: event.currentTarget.password.value,
      };
      console.log(formResult);
      event.currentTarget.reset();
}