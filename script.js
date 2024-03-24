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

document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', function () {
      var animatedSection = document.getElementById('animated-section');
      var position = animatedSection.getBoundingClientRect().top;
      var windowHeight = window.innerHeight;

      if (position < windowHeight * 0.9) {
          animatedSection.classList.add('show');
      }
  });
});



