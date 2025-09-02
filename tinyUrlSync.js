const textInput = document.getElementById("textInput");

// On page load, reset URL and input to initial state
window.addEventListener("DOMContentLoaded", () => {
  textInput.value = "";
  const path = "/" + encodeURIComponent(textInput.value);
  history.replaceState(null, null, path);
});

// Update the URL path whenever the input changes
textInput.addEventListener("input", () => {
  const path = "/" + encodeURIComponent(textInput.value);
  history.replaceState(null, null, path);
});