function validatePWs() {
    pw = document.querySelector("#pass");
    pw_confirm = document.querySelector("#pass2");

    if (pw.value !== pw_confirm.value) {
        pw_confirm.setCustomValidity('Passwords must match');
        return false
    }

    if (pw.value === pw_confirm.value) {
        pw_confirm.setCustomValidity('');
        return true
    }
}

const pass_confirm = document.getElementById("pass2");
pass_confirm.addEventListener('focusout', validatePWs)
pass_confirm.addEventListener('input', validatePWs)
const pass_og = document.getElementById("pass");
pass_og.addEventListener('focusout', validatePWs)
