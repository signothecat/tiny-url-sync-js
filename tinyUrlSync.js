const textInput = document.getElementById("textInput");

textInput.addEventListener("input", () => {
  const path = '/' + textInput.value;
  history.replaceState(null, null, path);
});
