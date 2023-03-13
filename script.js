const pwddata = document.querySelector("#password-data");
const para = document.createElement('p');
const pwd = document.querySelector('#pwd');
const confirmpwd = document.querySelector('#confirmpwd');

para.textContent = "* Passwords do not match"
para.setAttribute('class', 'error');

function Validate() {
    const password = document.querySelector("#pwd").value;
    const confirmpassword = document.querySelector("#confirmpwd").value;
    console.log(password);
    console.log(confirmpassword);
    if (password !== confirmpassword) {
        pwd.setAttribute('class', 'error-border');
        confirmpwd.setAttribute('class', 'error-border');
        pwddata.appendChild(para);
        return false;
    } else {
        return true;
    }
}