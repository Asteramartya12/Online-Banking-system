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

$(".up").click(function(){scroll(0,0)});

const bars = document.querySelectorAll('.bar');

bars.forEach((bar, index) => {
  setTimeout(() => {
    bar.style.height = `${bar.dataset.height}%`;
  }, index * 200);
});


