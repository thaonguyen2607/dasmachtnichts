const registerForm = document.getElementById("register-form");

//xu ly khi nguoi dung bam nut dang ky
registerForm.onsubmit = function (event) {
  event.preventDefault();

  const email = document.getElementById("register-email");
  const password = document.getElementById("register-password");

  const emailError = document.getElementById("email-error");
  console.log(emailError);
  const passwordError = document.getElementById("password-error");

  const registerError = document.getElementById("register-error");
  if (email.value === "") {
    emailError.innerHTML = "Nhập tên đăng nhập";
  } else {
    emailError.innerHTML = "";
  }
  if (password.value === "") {
    passwordError.innerHTML = "Nhập mật khẩu ";
  } else {
    passwordError.innerHTML = "";
  }
  //   if (confirmPassword.value === "") {
  //     confirmPasswordError.innerHTML = "Nhập lai mật khẩu ";
  //   } else {
  //     confirmPasswordError.innerHTML = "";
  //   }
  //   if (confirmPassword.value === "") {
  //     confirmPasswordError.innerHTML = "Vui long nhập lai mật khẩu ";
  //   } else if (confirmPassword.value !== password.value) {
  //     confirmPasswordError.innerHTML = "Mat Khau khong trung";
  //   } else {
  //     confirmPasswordError.innerHTML = "";
  //   }

  console.log("thanh cong");
};
