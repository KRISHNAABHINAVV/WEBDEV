function validateLogin() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (user === "" || pass === "") {
    error.textContent = "Please fill all fields!";
    return false;
  }
  if (pass.length < 6) {
    error.textContent = "Password must be at least 6 characters.";
    return false;
  }

  alert("Login successful!");
  return true;
}
