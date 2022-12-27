// DOM declarations 

const form = document.querySelector("form");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm_password");


form.addEventListener("submit", (e) => {
   if (password.value != confirmPassword.value) {
        alert("Passwords don't match");
        e.preventDefault();
   }
})

