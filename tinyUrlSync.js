const textInput = document.getElementById("textInput");

// Helper: get the base path (project root on GitHub Pages)
const getBasePath = () => '/tiny-url-sync-js/';

// On page load, reset to base path and clear input
window.addEventListener("DOMContentLoaded", () => {
  const base = getBasePath();
  history.replaceState(null, null, base);
  textInput.value = "";
});

// Update the URL path whenever the input changes
textInput.addEventListener("input", () => {
  const base = getBasePath();
  const path = base + "/" + encodeURIComponent(textInput.value);
  history.replaceState(null, null, path);
});