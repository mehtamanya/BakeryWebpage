document.addEventListener("DOMContentLoaded", () => {
  // SIGNUP
  const signupForm = document.getElementById("signupForm");
  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      const user = { username, email, password };
      localStorage.setItem("userData", JSON.stringify(user));

      document.getElementById("signupMessage").textContent =
        "Signup successful! Redirecting to login...";
      setTimeout(() => {
        window.location.href = "login.html";
      }, 1000);
    });
  }

  // LOGIN
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const loginUsername = document.getElementById("loginUsername").value;
      const loginPassword = document.getElementById("loginPassword").value;

      const savedUser = JSON.parse(localStorage.getItem("userData"));

      if (
        savedUser &&
        savedUser.username === loginUsername &&
        savedUser.password === loginPassword
      ) {
        document.getElementById("loginMessage").textContent =
          "Login successful! Redirecting...";
        setTimeout(() => {
          window.location.href = "menu.html";
        }, 1000);
      } else {
        document.getElementById("loginMessage").textContent =
          "Invalid username or password!";
      }
    });
  }
});
