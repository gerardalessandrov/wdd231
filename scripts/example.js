const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const myKEY="dd5699babfc4ebd5aeb2dd79addc71e2"
const myLat="49.75"
const myLong="6.64"
const url=`https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKEY}`;
async function apiFetch(){ 
try{
    const response= await fetch(url);
    if (response.ok){
        const data= await response.json();
        console.log(data);
        displayResults(data);
    }
    else{
        throw  Error(await response.text());
    }
 }
 catch(error){
    console.log("Error fetching members",error)
     
 }
}
apiFetch();

function displayResults(data){
  console.log("hello");
  currentTemp.innerHTML=`${data.main.temp}&deg;F`;
  const iconsrc=`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  let desc=data.weather[0].description;
  weatherIcon.setAttribute("SRC",iconsrc)
  weatherIcon.setAttribute("ALT",data.weather[0].description);
  captionDesc.textContent=`${desc}`;

}
