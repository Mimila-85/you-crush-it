
const signupFormHandler = async function (event) {
  event.preventDefault();

  const usernameEl = document.querySelector("#name-input-signup");
  const emailnameEl = document.querySelector("#email-input-signup");
  const passwordEl = document.querySelector("#password-input-signup");
  fetch("/signup", {
    method: "post",
    body: JSON.stringify({
      name: usernameEl.value,
      email: emailnameEl.value,
      password: passwordEl.value
    }),
    headers: { "Content-Type": "application/json" }
  })
    .then(function () {
      document.location.replace("/dashboard");
    })
    .catch(err => console.log(err));
};

document
  .querySelector("#signup-form")
  .addEventListener("submit", signupFormHandler);
