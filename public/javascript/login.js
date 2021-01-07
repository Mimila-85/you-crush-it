const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-input-login').value.trim();
  const password = document.querySelector('#password-input-login').value.trim();
console.log(email, password)
  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    const body = await response.json()
    console.log(body)

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};
document
  .querySelector("#login-form")
  .addEventListener("submit", loginFormHandler);


// const loginFormHandler = async function (event) {
//   event.preventDefault();
//   const usernameEl = document.querySelector("#username-input-login");
//   const passwordEl = document.querySelector("#password-input-login");
//   fetch("/api/users/login", {
//     method: "post",
//     body: JSON.stringify({
//       email: usernameEl.value,
//       password: passwordEl.value
//     }),
//     headers: { "Content-Type": "application/json" }
//   })
//     .then(function () {
//       document.location.replace("/dashboard");
//     })
//     .catch(err => console.log(err));
// };
// document
//   .querySelector("#login-form")
//   .addEventListener("submit", loginFormHandler);
// const loginFormHandler = async function (event) {
//   event.preventDefault();

//   const usernameEl = document.querySelector("#username-input-login");
//   const passwordEl = document.querySelector("#password-input-login");
//   fetch("/api/users/login", {
//     method: "post",
//     body: JSON.stringify({
//       name: usernameEl.value,
//       password: passwordEl.value
//     }),
//     headers: { "Content-Type": "application/json" }
//   })
//     .then(function () {
//       document.location.replace("/dashboard");
//     })
//     .catch(err => console.log(err));
// };

// document
//   .querySelector("#login-form")
//   .addEventListener("submit", loginFormHandler);
