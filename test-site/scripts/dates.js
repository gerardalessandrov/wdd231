// use the date object
const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener("click", () => {
  mainnav.classList.toggle("show");
  hambutton.classList.toggle("show");
});

const today = new Date();
const year = document.querySelector("#year");
let alert = document.lastModified;

year.innerHTML = `©<span class="highlight">${today.getFullYear()} Gerard Vigo Rodrigues Trujillo</span>`;
short.innerHTML = `Last Modification: <span class="highlight"> ${alert}</span>`;
