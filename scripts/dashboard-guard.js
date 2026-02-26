const AUTH_FLAG = "rizyllAdminAuthenticated";
const logoutButton = document.getElementById("logout-button");

if (sessionStorage.getItem(AUTH_FLAG) !== "true") {
  window.location.href = "admin.html";
}

logoutButton.addEventListener("click", () => {
  sessionStorage.removeItem(AUTH_FLAG);
  window.location.href = "admin.html";
});
