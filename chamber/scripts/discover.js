const msPerDay=8640000;
const today2=new Date();
const lastVisit=localStorage.getItem("lastVisit");
if(!lastVisit){
  document.getElementById("local-storage").textContent='Welcome! Let us know if you have any questions.';

}
else{
  const daysBetween=Math.floor(today2- new Date(parseInt(lastVisit)))/msPerDay;

if(daysBetween<1){
  document.getElementById("local-storage").textContent='Back so soon! Awesome!';
}
else{
  document.getElementById("localStorage").textContent=`You last visited ${daysBetween} day${
    daysBetween > 1 ? 's' : ''
} ago.`;
}}
localStorage.setItem('lastVisit', Date.now());


const today = new Date();
const year = document.querySelector("#year");
let alert = document.lastModified;


year.innerHTML = `©<span class="highlight">${today.getFullYear()} Gerard Vigo Rodrigues Trujillo</span>`;
short.innerHTML = `Last Modification: <span class="highlight"> ${alert}</span>`;


