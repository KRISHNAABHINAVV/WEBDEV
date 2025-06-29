{
  "username": "john",
  "password": "123456"
}
let data = { username: "john", password: "123456" };

fetch('https://example.com/api/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
.then(response => response.json())
.then(result => {
  console.log("Server said:", result);
})
.catch(error => {
  console.error("Error:", error);
});
function submitLogin() {
  let data = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value
  };

  fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(json => {
    alert("Login Success: " + JSON.stringify(json));
  })
  .catch(err => alert("Login Failed"));
}

fetch("https://dummyjson.com/users")
  .then(res => res.json())
  .then(data => console.log(data.users));
