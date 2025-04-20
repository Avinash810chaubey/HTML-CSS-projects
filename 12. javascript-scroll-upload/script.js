// let Heading = document.querySelector('h1');
// let title = "Title";

// Heading.innerText = title;
// let Heading = document.querySelector('h1'); // no "All"
// let title = "New Heading Text";

// Heading.innerText = title;

let indicator = document.querySelector(".scroll-indicator .progress");
let scrollHeight =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", scroll);

function scroll() {
  let scrollTop = document.documentElement.scrollTop;
  let scrolled = (scrollTop / scrollHeight) * 100;
  indicator.style.width = `${scrolled}%`;
}