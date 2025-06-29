<form onsubmit="return validateForm()">
  <input type="text" id="username" placeholder="Username"><br>
  <input type="email" id="email" placeholder="Email"><br>
  <input type="password" id="password" placeholder="Password"><br>
  <button type="submit">Submit</button>
</form>
<p id="error" style="color:red;"></p>


function validateForm() {
  let name = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;
  let error = "";

  if (name === "" || email === "" || pass === "") {
    error = "All fields are required.";
  } else if (!email.includes("@")) {
    error = "Invalid email format.";
  } else if (pass.length < 6) {
    error = "Password must be at least 6 characters.";
  }

  if (error !== "") {
    document.getElementById("error").innerText = error;
    return false; // Stop form from submitting
  }

  

  return true; // Allow form submission
}


//regex
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

if (!emailRegex.test(email)) {
  error = "Email is not valid.";
}
if (!passRegex.test(pass)) {
  error = "Password must contain upper, lower, and number.";
}
