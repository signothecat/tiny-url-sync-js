# tiny-url-sync

A minimal example showing how to **synchronize an input field with the browser URL path** using plain HTML and JavaScript.

Whenever you type into the text field, the browser’s URL updates instantly without reloading the page.

---

## Demo

👉 Try it on [GitHub Pages](https://signothecat.github.io/tiny-url-sync/)

![demo](./screenshot.gif)

---

## Features

- Zero dependencies – HTML + pure JavaScript
- Live updates: URL changes as you type
- Uses `history.replaceState` to avoid page reloads

---

## Getting Started

## Getting Started

Clone the repo:

```zsh
git clone https://github.com/your-username/tiny-url-sync.git
cd tiny-url-sync
```

### Run with a local server

⚠️ Opening `app.html` directly with `file://` may not work as expected.
Please run a local development server instead, for example:

Using npx (if you have Node.js):

```zsh
npx serve . -l 8000
```

Using Python (built-in HTTP server):

```zsh
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000) in your browser.

---

## Code Overview

**app.html**
```html
<label for="textInput">Add path:</label>
<input type="text" id="textInput" />
<script src="app.js"></script>
```

**app.js**
```js
const textInput = document.getElementById("textInput");

textInput.addEventListener("input", () => {
  const path = '/' + textInput.value;
  history.replaceState(null, null, path);
});
```

---

## License

MIT License
