const password = document.querySelector(".pass");
const copyBtn = document.querySelector(".copy");
let result = '';
function passGenerator(length) {
    result = '';

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>?';
    for (let index = 0; index < length; index++) {
        result+=chars.charAt(Math.floor(Math.random()*chars.length));
    }
    return result;
}

const form = document.querySelector("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const length = document.getElementById("length");
    passGenerator(length.value);
    password.textContent = result;
   
});

//copy
copyBtn.addEventListener("click",(()=>{
    if (!password.textContent) return;

    navigator.clipboard.writeText(password.textContent).then(()=>{
        copyBtn.textContent = "Copied!";

        setTimeout(()=>{copyBtn.textContent ="Copied!";},1000)
    })
}))





