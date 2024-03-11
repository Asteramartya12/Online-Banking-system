document.getElementById("login-btn").addEventListener("click", function() {
  document.getElementById("login-modal").style.display = "block";
});

document.getElementById("signup-btn").addEventListener("click", function() {
  document.getElementById("signup-modal").style.display = "block";
});

document.getElementsByClassName("close")[0].addEventListener("click", function() {
  document.getElementById("login-modal").style.display = "none";
  document.getElementById("signup-modal").style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target == document.getElementById("login-modal")) {
    document.getElementById("login-modal").style.display = "none";
  }

  if (event.target == document.getElementById("signup-modal")) {
    document.getElementById("signup-modal").style.display = "none";
  }
});