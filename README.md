# tiny-url-sync-js

A minimal example showing how to **synchronize an input field with the browser URL path** using plain HTML and JavaScript.

Whenever you type into the text field, the browser’s URL updates instantly without reloading the page.

## Demo

👉 Try it on [GitHub Pages](https://signothecat.github.io/tiny-url-sync-js)

![demo](./screenshot.gif)

## Features

- Zero dependencies – HTML + pure JavaScript
- Live updates: URL changes as you type
- Uses `history.replaceState` to avoid page reloads

## Getting Started

Clone the repo:

```zsh
git clone https://github.com/your-username/tiny-url-sync-js.git
cd tiny-url-sync-js
```

### Run with a local server

⚠️ Opening `index.html` directly with `file://` may not work as expected.
Please run a local development server instead:

Using npx:

```zsh
npx serve -s . -l 8000
```

Then open [http://localhost:8000](http://localhost:8000) in your browser.

If you don't use `-s` (SPA fallback), put 404.html to redirect.
(Refer branch 'gh-pages')

**404.html**
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Redirecting…</title>
    <meta name="robots" content="noindex">
    <script>
      var base = '/tiny-url-sync-js';
      // Always redirect to the base
      location.replace(base);
    </script>
  </head>
  <body>
    <p>Redirecting to the app…</p>
  </body>
</html>
```

## Code Overview

**index.html**
```html
<label for="textInput">Add path:</label>
<input type="text" id="textInput" />
<script src="tinyUrlSync.js"></script>
```

**tinyUrlSync.js**
```js
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
```

## Demo JS diff overview

To support GitHub Pages specifications, the following diffs in JS apply (please refer branch 'gh-pages'):

**tinyUrlSync.js**
```diff
const textInput = document.getElementById("textInput");

+ // Helper: get the base path (project root on GitHub Pages)
+ const getBasePath = () => '/tiny-url-sync-js';

- // On page load, reset URL and input to initial state
+ // On page load, reset to base path and clear input
window.addEventListener("DOMContentLoaded", () => {
-   textInput.value = "";
-   const path = "/" + encodeURIComponent(textInput.value);
-   history.replaceState(null, null, path);
+   const base = getBasePath();
+   history.replaceState(null, null, base);
+   textInput.value = "";
});

// Update the URL path whenever the input changes
textInput.addEventListener("input", () => {
-   const path = "/" + encodeURIComponent(textInput.value);
-   history.replaceState(null, null, path);
+   const base = getBasePath();
+   if(!(textInput.value) || textInput.value == '' || textInput.value === '') {
+     history.replaceState(null, null, base);
+   }
+   else {
+     const path = base + "/" + encodeURIComponent(textInput.value);
+     history.replaceState(null, null, path);
+   }
});
```

## License

MIT License
