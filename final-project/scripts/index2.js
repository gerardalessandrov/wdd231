document.addEventListener("DOMContentLoaded", () => {
    fetchAndDisplayEvents();
    fetchBusinessHighlights();
    apiFetch();
    DisplayForecast();
});

// Función para obtener y mostrar eventos
async function fetchAndDisplayEvents() {
    try {
        const events = await fetchData("data2/members.json");
        if (events) {
            displayFirstEvent(events);
            setupShowMoreButton(events);
        }
    } catch (error) {
        console.error("Error fetching events:", error);
    }
}

// Función para obtener datos
async function fetchData(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Network response was not ok: " + response.statusText);
    }
    return response.json();
}

// Función para mostrar el primer evento
function displayFirstEvent(events) {
    const eventsContainer = document.querySelector(".current-events");
    if (!eventsContainer) return console.error("Element with class 'current-events' not found");

    const firstEvent = events[0];
    eventsContainer.appendChild(createEventCard(firstEvent));
}

// Función para crear una tarjeta de evento
function createEventCard({ name, address, phone }) {
    const eventCard = document.createElement("div");
    eventCard.classList.add("event-card");
    
    eventCard.innerHTML = `
        <h3>${name}</h3>
        <p>Date: 10/10/2024</p>
        <p>${phone}</p>
        <p>${address}</p>
    `;
    return eventCard;
}

// Función para configurar el botón "Ver Más"
function setupShowMoreButton(events) {
    let currentIndex = 1;
    const eventsContainer = document.getElementById("events");
    const showMoreBtn = document.getElementById("more-events");
    const showLessBtn = document.getElementById("less-events");

    showMoreBtn.addEventListener('click', () => {
        if (currentIndex < events.length) {
            eventsContainer.appendChild(createEventCard(events[currentIndex]));
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
        currentIndex = 1;
        showLessBtn.style.display = 'none';
        showMoreBtn.style.display = 'block';
    });
}

// Variables para los destacados de negocios
let highlights = [];
let currentHighlightIndex = 0;

// Función para obtener destacados de negocios
async function fetchBusinessHighlights() {
    try {
        highlights = await fetchData('data2/members.json');
        displayHighlight(highlights[currentHighlightIndex]);
    } catch (error) {
        console.error('Error fetching highlights:', error);
    }
}

// Función para mostrar un destacado
function displayHighlight({ name, image, phone, website, membershipLevel, highlight }) {
    const highlightContainer = document.getElementById('business-highlight');
    if (!highlightContainer) return console.error('Highlight container not found');

    highlightContainer.innerHTML = `
        <img src="${image}" style="width:200px;" alt="${name}">
        <h3>${name}</h3>
        <h2>${phone}</h2>
        <h2>${website}</h2>
        <h2>Membership Level: ${membershipLevel}</h2>
        <p>${highlight}</p>
    `;
    document.getElementById('more-business-highlights')?.addEventListener('click', displayNextHighlight);
}

// Función para mostrar el siguiente destacado
function displayNextHighlight() {
    currentHighlightIndex = (currentHighlightIndex + 1) % highlights.length;
    displayHighlight(highlights[currentHighlightIndex]);
}

// Funciones para el clima
const weatherApiKey = "dd5699babfc4ebd5aeb2dd79addc71e2";
const myLat = "-8.116243750665834";
const myLong = "-79.02591046362777";

async function apiFetch() {
    const data = await fetchData(`https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${weatherApiKey}`);
    DisplayResults(data);
}

function DisplayResults({ main,weather }) {
    const temperature = document.querySelector("#temperature");
    const text_description = document.querySelector("#description");
    const icon = document.querySelector("#icon"); // Asumiendo que tienes un elemento con id 'weather-icon'

    temperature.innerHTML = `Temperature: ${Math.round(main.temp-273.15)}&deg;C`;
    icon.src = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
    icon.alt = weather[0].description;
    text_description.innerHTML = `Weather: ${weather[0].description}`;
}

// Función para obtener y mostrar el pronóstico
async function DisplayForecast() {
    const forecastData = await fetchData(`https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${weatherApiKey}`);
    Forecast(forecastData);
}

// Función para mostrar el pronóstico
function Forecast({ list }) {
    const forecastContainer = document.querySelector("#forecast");
    forecastContainer.innerHTML = ""; // Limpia el contenido anterior

    list.filter((_, index) => index % 8 === 0).forEach(dayForecast => {
        const { main: { temp }, weather, dt } = dayForecast;
        const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
        

        const tempCelsius = Math.round(temp - 273.15);
        

        const forecastCard = document.createElement('div');
        forecastCard.classList.add('forecast-card'); 
        forecastCard.innerHTML = `
            <h4>${new Date(dt * 1000).toLocaleDateString()}</h4>
            <img src="${iconUrl}" alt="${weather[0].description}" />
            <p>Weather: ${weather[0].description}</p>
            <p style="color: blue;">Temperature: ${tempCelsius} °C</p>
        `;
        
        forecastContainer.appendChild(forecastCard);
    });
}


