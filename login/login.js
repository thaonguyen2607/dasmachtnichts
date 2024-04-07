const loginForm = document.getElementById("login-form");

//
loginForm.onsubmit = function (event) {
  event.preventDefault();
  const username = document.getElementById("email");
  const password = document.getElementById("password");

  const usernameError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");
  const loginError = document.getElementById("login-error");
  if (username.value === "") {
    usernameError.innerHTML = "Nhập tên đăng nhập";
  } else {
    usernameError.innerHTML = "";
  }
  if (password.value === "") {
    passwordError.innerHTML = "Nhập mật khẩu";
  } else {
    passwordError.innerHTML = "";
  }

  if (username.value !== "LTUT" || password.value !== "101206") {
    loginError.innerHTML = "Sai tên đăng nhập hoặc mật khẩu";
  } else {
    loginError.innerHTML = "";
    window.location.href = "../index.html";
  }
};
