const cookieBanner = document.getElementById("cookie-banner");
const acceptBtn = document.getElementById("accept-btn");
const closeBtn = document.getElementById("close-btn");
const consentKey = "cookieConsentAccepted";

// Show banner only if user has not already accepted
window.addEventListener("DOMContentLoaded", () => {
  const hasAccepted = localStorage.getItem(consentKey);
  if (!hasAccepted) {
    cookieBanner.classList.remove("hidden");
  }
});

// Accept cookies
acceptBtn.addEventListener("click", () => {
  localStorage.setItem(consentKey, "true");
  cookieBanner.classList.add("hidden");
});

// Close button
closeBtn.addEventListener("click", () => {
  cookieBanner.classList.add("hidden");
});

