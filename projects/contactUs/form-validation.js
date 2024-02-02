const fName = document.getElementById('name');
const fEmail = document.getElementById('email');
const form = document.getElementById('form');
const error = document.getElementById('error');

form.addEventListener('submit', (event) => {
    let messages = []
    if (fName.value === '') {
        messages.push('<p class="sError"> *Name is required </p>')
    }

    if (fEmail.value === '') {
        messages.push('<p class="sError"> *Email is required </p>')
    }

    if (messages.length > 0) {
        event.preventDefault();
        error.innerHTML = messages.join('')
    }
})