const textInput = document.getElementById("textInput");

// On page load, reset URL and input to initial state
window.addEventListener("DOMContentLoaded", () => {
  history.replaceState(null, null, "/");
  textInput.value = "";
});

// Update the URL path whenever the input changes
textInput.addEventListener("input", () => {
  const path = encodeURIComponent(textInput.value);
  history.replaceState(null, null, path);
});