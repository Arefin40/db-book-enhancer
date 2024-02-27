/**
 * Sets the dark theme as a default theme.
 */
document.documentElement.className = "dark";

/**
 * Creates an HTML element.
 * @param {string} tagName name of the tag.
 * @param {string} content content of the element.
 * @param {string} className the css class(es) for the element.
 */
const createElement = (tagName, className, content) => {
   let elm = document.createElement(tagName);
   if (className) elm.className = className;
   if (content) elm.innerHTML = content;
   return elm;
};

/**
 * Adds custom CSS styles to the document.
 * @param {string} css the CSS code to be added.
 */
const addStyles = (css) => {
   let el = createElement("style");
   el.setAttribute("type", "text/css");
   el.innerHTML = css;
   document.head.appendChild(el);
};

/**
 * Toggles between light and dark theme mode.
 */
const themeChangeBtn = createElement("button", "theme-change-btn", "☼");
themeChangeBtn.addEventListener("click", () => {
   document.documentElement.classList.toggle("dark");
});
const btnContainer = createElement("div", "theme-change-btn-container");
btnContainer.appendChild(themeChangeBtn);
document.body.insertBefore(btnContainer, document.body.firstChild);

/**
 * Makes the `Load an SQLite database file` button minimalistic.
 */
const dbfileBtn = document.getElementById("dbfile");
dbfileBtn.parentNode.innerHTML = `Load an SQLite database file
<input type="file" id="dbfile" defaultvalue="univdb-sqlite.db">`;

/**
 * Centers the action buttons within a div.
 */
let main = document.querySelector("main");
let buttons = document.querySelectorAll(".button");
let div = createElement("div", "buttons");
buttons.forEach((button) => div.appendChild(button));
document.querySelector("main").insertBefore(div, main.children[5]);

/**
 * Prevents CodeMirror from changing cursor visibility.
 */
const cursors = document.querySelector(".CodeMirror-cursors");
const cursorsOriginalVisibility = cursors.style.visibility;
Object.defineProperty(cursors.style, "visibility", {
   get: () => originalVisibility,
   set: () => {},
});

/**
 * Observes the changes made in the output table and counts the number of rows if any change occurs.
 */
const outputTable = document.getElementById("output");
const rowCount = createElement("p", "row-count", "Hello World!");
outputTable.appendChild(rowCount);
console.log(rowCount);
console.log(outputTable);
const observer = new MutationObserver(() => {
   const firstChild = outputTable.firstChild;
   if (!(firstChild && firstChild.lastChild)) return;
   const recordsSize = outputTable.firstChild.lastChild.childNodes.length;
   if (recordsSize > 0) {
      rowCount.innerText = recordsSize;
   }
});
observer.observe(outputTable, { childList: true, subtree: true });

/**
 * Applies custom CSS styles to the document.
 */
addStyles(`
@import url('https://fonts.googleapis.com/css2?family=Fira+Code&family=Mulish:wght@200..1000&display=swap');

html {
   transition: all;
   transition-duration: 100ms;
}

html.dark {
   background: #aab8c3;
}

body, .button {
   font-family: "Mulish", sans-serif, system-ui;
   font-size: 16px;
   font-style: normal;
}

body {
   line-height: 1.5;
   color: #525252;
   padding: 2.5rem;
   position: relative;
   box-shadow: 0px 0px 20px #404040;
   border: 0;
}

.dark body {
   background: #262626;
   color: #a3a3a3;
}

a {
   text-decoration: none;
    color: #0284c7;
}

h1 {
   color: #059669;
   font-size: 2.5rem;
   font-weight: 800;
}

main > label[for="commands"] {
   text-align: center;
   display: flex;
   justify-content: center;
   margin-bottom: -1rem;
   font-weight: 500;
}

pre, pre th, pre td, .CodeMirror pre {
   font-weight: 400;
   font-style: normal;
   color: #262626;
}

pre, pre th, pre td {
   font-family: "Courier", monospace;
   font-size: 0.875rem;
}

.CodeMirror pre {
   font-family: "Consolas", monospace;
   font-size: 1rem;
}

th, td {
   padding: 0.25rem 0.5rem;
}

th {
   font-weight: 700 !important;
   color: black;
}

.dark #output thead tr {
   color: white;
}

.dark .CodeMirror pre,
.dark pre,
.dark pre th,
.dark pre td {
   color: #d5d7db;
}

.dark #output th,
.dark #output td {
   border: 1px solid #404040;
}

#output tr:nth-child(even) {
   background-color: #f5f5f5;
}

.dark #output tr:nth-child(even) {
   background-color: #303030;
}

#output th, #output td {
   border: 1px solid #d4d4d4;
}

footer {
   text-align: center;
}

.dark footer {
   color: #a3a3a3;
}

#execute {
   margin-top: 0;
   width: auto;
   min-width: 0;
}

.button {
   margin-top: 0px;
   width: auto;
   min-width: 0px;
   transition: transform;
   transition-duration: 120ms;
   padding: 0.375rem 1rem;
   border: 1px solid #a3a3a3;
}

.button:active {
   transform: scale(0.95);
}

.buttons {
   display: flex;
   justify-content: center;
}

.dark .button {
   color: #d4d4d4;
   background: linear-gradient(#525252, #404040);
   border: 1px solid #222;
   border-radius: 0.3125rem;
}

#dbfile {
   width: 0px;
   height: 0px;
   visibility: hidden;
}

.CodeMirror div.CodeMirror-cursor {
   border-left: 1.5px solid #ec4899;
   visibility: visible !important;
   animation: cursor 450ms infinite alternate ease-in;
}

.CodeMirror.cm-s-default {
   border: 1px solid #d4d4d4;
}

.dark .CodeMirror.cm-s-default {
   background: #171717;
   border: 1px solid #353535;
}

.CodeMirror-lines {
   line-height: 1.4;
}

.cm-s-default .cm-keyword {
   color: #db2777;
}

.cm-s-default .cm-variable-2,
.cm-s-default .cm-number {
   color: #0369a1;
}

.dark .cm-s-default .cm-variable-2,
.dark .cm-s-default .cm-number {
   color: #0284c7;
}

.cm-s-default .cm-string {
   color: #059669;
}

.cm-s-default .cm-comment {
   color: #a3a3a3;
}

.dark .cm-s-default .cm-comment {
   color: #525252;
}

.dark .CodeMirror-gutter {
   background: #262626;
}

.dark .CodeMirror-gutters {
   border-right: 1px solid #353535;
}

.error {
   margin-top: 1rem;
   color: #f43f5e;
}

.theme-change-btn-container {
   position: absolute;
   top: 2.5rem;
   left: 100%;
   margin-left: 1rem;
   height: 100%;
}

.theme-change-btn {
   position: sticky;
   top: 3rem;
   width: 3rem;
   height: 3rem;
   display: flex;
   justify-content: center;
   align-items: center;
   text-align: center;
   font-size: 1.5rem;
   border-radius: 1.5rem;
   background: #d4d4d4;
   color: #525252;
   border: 0;
   box-shadow: 0px 0px 20px #404040;
}

.dark .theme-change-btn {
   background: #171717;
   color: #a3a3a3;
   box-shadow: 0px 0px 20px #404040;
}

@keyframes cursor{
   0% {
      transform: scaleY(1.25);
   }
   100% {
      transform: scaleY(0);
   }
}
`);
