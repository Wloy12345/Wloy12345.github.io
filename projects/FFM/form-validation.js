const fUser = document.getElementById('username');
const fPwd = document.getElementById('pwd');
const form = document.getElementById('form');
const error = document.getElementById('error');

form.addEventListener('submit', (event) => {
    let messages = []
    if (fUser.value === '') {
        messages.push('<p class="sError"> *Username is required </p>')
    }

    if (fPwd.value === '') {
        messages.push('<p class="sError"> *Password is required </p>')
    }

    if (messages.length > 0) {
        event.preventDefault();
        error.innerHTML = messages.join('')
    }
})