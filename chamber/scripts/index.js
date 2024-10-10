document.addEventListener("DOMContentLoaded", () => {
    fetchAndDisplayEvents(); // Carga los eventos al cargar el DOM
});

// Función para obtener y mostrar eventos
async function fetchAndDisplayEvents() {
    try {
        const response = await fetch("data/member.json");
        if (!response.ok) {
            throw new Error("Network response was not ok: " + response.statusText);
        }
        const events = await response.json();
        console.log(events); 
        displayFirstEvent(events); // Muestra el primer evento
        setupShowMoreButton(events); // Configura el botón "Ver Más"

    } catch (error) {
        console.log("Error fetching events:", error);
    }
}

// Función para mostrar el primer evento
function displayFirstEvent(events) {
    const eventsContainer = document.querySelector(".current-events");
    if (!eventsContainer) {
        console.error("Element with class 'current-event' not found");
        return;
    }
    const firstEvent = events[0];
    const eventCard = createEventCard(firstEvent);
    eventsContainer.appendChild(eventCard);
}

// Función para crear una tarjeta de evento
function createEventCard(event) {
    const eventCard = document.createElement("div");
    eventCard.classList.add("event-card");

    const eventTitle = document.createElement("h3");
    eventTitle.textContent = event.name;

    const eventDate = document.createElement("p");
    eventDate.textContent = `Date: 10/10/2024 
    ${event.address}`;

    const eventDescription = document.createElement("p");
    eventDescription.textContent = event.phone;

 
    

    eventCard.appendChild(eventTitle);
    eventCard.appendChild(eventDate);
    eventCard.appendChild(eventDescription);

    return eventCard; // Asegúrate de devolver la tarjeta creada
}

// Función para configurar el botón "Ver Más"
function setupShowMoreButton(events) {
    let currentIndex = 1; // Inicia después del primer evento
    const showMoreBtn = document.getElementById("more-events");
    const showLessBtn = document.getElementById("less-events");
    const eventsContainer = document.getElementById("events");

    showMoreBtn.addEventListener('click', () => {
        if (currentIndex < events.length) {
            const nextEvent = events[currentIndex];
            const eventCard = createEventCard(nextEvent);
            eventsContainer.appendChild(eventCard);
            currentIndex++;

            if (currentIndex >= events.length) {
                showMoreBtn.style.display = 'none';  
            }
            showLessBtn.style.display = 'inline-block';
        }
    });

    showLessBtn.addEventListener('click', () => {
        while (eventsContainer.children.length > 1) {
            eventsContainer.removeChild(eventsContainer.lastChild);
        }
        currentIndex = 0; 
        showLessBtn.style.display = 'none'; 
        showMoreBtn.style.display = 'block'; 
    });
}

// Destacados de negocios
let highlights = []; 
let currentHighlightIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    fetchBusinessHighlights();  

    const moreHighlightsBtn = document.getElementById('more-business-highlights');
    if (moreHighlightsBtn) {
        moreHighlightsBtn.addEventListener('click', displayNextHighlight);
    }
});

// Función para obtener destacados de negocios
async function fetchBusinessHighlights() {
    try {
        const response = await fetch('data/member.json');
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        highlights = await response.json(); 
        displayHighlight(highlights[currentHighlightIndex]);  
    } catch (error) {
        console.error('Error fetching highlights:', error);
    }
}

// Función para mostrar un destacado
function displayHighlight(highlight) {
    const highlightContainer = document.getElementById('business-highlight');
    if (highlightContainer) {
        highlightContainer.innerHTML = ''; // Limpia el contenido anterior

        const nameElement = document.createElement('h3');
        nameElement.textContent = highlight.name;

        const imageElement = document.createElement('img');
        imageElement.src = highlight.image;
        imageElement.style.width="200px";

        const phoneElement = document.createElement('h2');
        phoneElement.textContent = highlight.phone;

        const websiteElement = document.createElement('h2');
        websiteElement.textContent = highlight.website;

        const membershipLevelElement = document.createElement('h2');
        membershipLevelElement.textContent = `Membership Level: ${highlight.membershipLevel}`;

        const highlightElement = document.createElement('p');
        highlightElement.textContent = highlight.highlight;

        highlightContainer.appendChild(imageElement);
        highlightContainer.appendChild(nameElement);
        highlightContainer.appendChild(phoneElement);
        highlightContainer.appendChild(websiteElement);
        highlightContainer.appendChild(membershipLevelElement);
        highlightContainer.appendChild(highlightElement);
    } else {
        console.error('Highlight container not found');
    }
}

// Función para mostrar el siguiente destacado
function displayNextHighlight() {
    currentHighlightIndex++;
    if (currentHighlightIndex < highlights.length) {
        displayHighlight(highlights[currentHighlightIndex]);
    } else {
        currentHighlightIndex = 0;  
        displayHighlight(highlights[currentHighlightIndex]);
    }
}

// Variables para el clima
const myKEY = "dd5699babfc4ebd5aeb2dd79addc71e2";
const myLat = "-8.116243750665834";
const myLong = "-79.02591046362777";
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKEY}`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            DisplayResults(data);
            
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log("Error fetching weather data:", error);
    }
}
const temperature=document.querySelector("#temperature");
const text_description=document.querySelector("#description")

function DisplayResults(data){
  
  temperature.innerHTML=`Temperature:${data.main.temp}&deg;F`;
    const src_icon=`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
   let desc=data.weather[0].description;
    icon.setAttribute("SRC",src_icon);
    icon.setAttribute("ALT",data.weather[0].description);
    text_description.innerHTML=`Weather:${desc}`;
    


    
}
// Función para obtener y mostrar el pronóstico
async function DisplayForecast() {
    const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myKEY}`;
    try {
        const response2 = await fetch(forecastURL);
        if (response2.ok) {
            const fetch_data = await response2.json();
            console.log(fetch_data);
            Forecast(fetch_data);
        } else {
            throw Error(await response2.text());
        }
    } catch (error) {
        console.log("Error fetching forecast data:", error);
    }
}

// Función para mostrar el pronóstico
function Forecast(data) {
    const forecastContainer = document.querySelector("#forecast");
    forecastContainer.innerHTML = ""; // Limpia el contenido anterior
    for (let i = 0; i < data.list.length; i += 8) { // Toma datos cada 3 horas
        const dayForecast = data.list[i];
        const iconCode = dayForecast.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        const roundTemp = Math.round(dayForecast.main.temp);
        
        const forecastCard = document.createElement("div");
        forecastCard.classList.add("forecast-card");
        
        const tempElement = document.createElement("p");
        tempElement.textContent = `Temperature: ${roundTemp} °C`;
        tempElement.style.color = "blue";
        
        forecastCard.innerHTML = `
            <h4>${new Date(dayForecast.dt * 1000).toLocaleDateString()}</h4>
            <img src="${iconUrl}" alt="${dayForecast.weather[0].description}" />
            <p>Weather: ${dayForecast.weather[0].description}</p>
        `;
        forecastCard.insertBefore(tempElement, forecastCard.querySelector("p"));
        forecastContainer.appendChild(forecastCard);
    }
}

// Llama a las funciones al cargar el DOM
document.addEventListener("DOMContentLoaded", () => {
    apiFetch();
    DisplayForecast();
});





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

