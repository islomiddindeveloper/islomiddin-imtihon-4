"use strict";


const elPassword = document.querySelector(".login-password");
const elLogin = document.querySelector(".login-submit");
const elForm = document.querySelector(".login-page-form");
const elUsernameInput = document.querySelector(".login-page-username-input");


elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const usernameInputValue = elUsernameInput.value;
  const passwordInputValue = elPassword.value;

  elUsernameInput.value = null;
  elPassword.value = null;

  fetch("https://reqres.in/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      email: usernameInputValue,
      password: passwordInputValue,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data?.token) {
        window.localStorage.setItem("token", data.token);

        window.location.replace("./about/about.html");
      } else {
        const newDescErr = document.createElement("p");

        newDescErr.textContent = data.error;

        elLogin.classList.add("opacity");
        elLogin.style.opacity = 1;
        newDescErr.style.margin = 0;

        elLogin.innerHTML = null;

        elLogin.appendChild(newDescErr);
      }
    });
});





// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/islomiddindeveloper/islomiddin-imtihon-4.git
// git push -u origin main