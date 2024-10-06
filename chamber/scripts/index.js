const current_event=document.querySelector("#current-event");
const temperature=document.querySelector("#temperature");
const weather_section=document.querySelector("#weather");
const spotlight_advertisement=document.querySelector("#spotlight-advertisement");
const text_description=document.querySelector("#description");

const myKEY="dd5699babfc4ebd5aeb2dd79addc71e2"
const myLat="-8.116243750665834"
const myLong="-79.02591046362777"
//onst apiKey = 'dd5699babfc4ebd5aeb2dd79addc71e2'; // Reemplaza con tu API Key
//const city = 'Trujillo,PE'; // Ciudad y país
const url=`https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKEY}`;
//const forecastresponse=`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKEY}&units=metric`

async function apiFetch(){
    try{
     const response= await fetch(url);
     //const forecast= await fetch(forecastresponse);
    
     if(response.ok){
        const data= await response.json();
        //const forecast_data=await forecast.json();
        console.log(data);
        //console.log(forecast_data);
        DisplayResults(data);
        //DisplayForecast(forecast_data)
     }
     else{
        throw Error (await response.text());
     }
    }
    catch(error){
        console.log("Error fetching members",error)
    }

}
apiFetch();
function DisplayResults(data){
    console.log("michi");
    current_event.innerHTML=`${data.main.temp}&deg;F`;
    const src_icon=`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
   let desc=data.weather[0].description;
    icon.setAttribute("SRC",src_icon);
    icon.setAttribute("ALT",data.weather[0].description);
    text_description.innerHTML=desc;

    
}
/*function DisplayForecast(forecastlist){
    const forecast_descrition=document.querySelector("#forecast");
    const threeDaysForecast=forecastlist.filter(item=>item.dt_txt.endsWith("12:00:00"));
    threeDaysForecast.slice(0,3).forEach(day => {
        const dayElement=document.createElement("div");
        dayElement.classList.add("day");
        const date = new Date(day.dt * 1000).toLocaleDateString('es-PE');
        const temp = day.main.temp;
        const description = day.weather[0].description;

        dayElement.textContent = `${date}: ${temp}°C, ${description.charAt(0).toUpperCase() + description.slice(1)}`;
        forecast_descrition.appendChild(dayElement);
        
    });

}*/

