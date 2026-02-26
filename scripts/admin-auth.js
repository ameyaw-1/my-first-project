const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "rizyll123";
const AUTH_FLAG = "rizyllAdminAuthenticated";

const loginForm = document.getElementById("admin-login-form");
const loginMessage = document.getElementById("login-message");

if (sessionStorage.getItem(AUTH_FLAG) === "true") {
  window.location.href = "admin-dashboard.html";
}

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const usernameValue = loginForm.username.value.trim();
  const passwordValue = loginForm.password.value;

  if (usernameValue === ADMIN_USERNAME && passwordValue === ADMIN_PASSWORD) {
    sessionStorage.setItem(AUTH_FLAG, "true");
    window.location.href = "admin-dashboard.html";
    return;
  }

  loginMessage.textContent = "Invalid username or password.";
  loginMessage.classList.add("visible");
});
