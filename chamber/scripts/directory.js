const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");
const membersContainer = document.getElementById('card');
const toggleButton = document.getElementById('toggle-view');
let isGridView = true;
// Maneja el clic en el botón de menú
hambutton.addEventListener("click", () => {
    mainnav.classList.toggle("show");
    hambutton.classList.toggle("show");
});
const today = new Date();
const year = document.querySelector("#year");
let alert = document.lastModified;

year.innerHTML = `©<span class="highlight">${today.getFullYear()} Gerard Vigo Rodrigues Trujillo</span>`;
short.innerHTML = `Last Modification: <span class="highlight"> ${alert}</span>`;
// Función para obtener miembros
async function fetchMembers() {
    try {
        const response = await fetch("data/member.json"); // Asegúrate de que la ruta sea correcta
        if (!response.ok) {
            throw new Error("Network response is not ok: " + response.statusText);
        }
        const members = await response.json();
        displayMembers(members);
    } catch (error) {
        console.log("Error fetching members", error);
    }
}

// Función para mostrar miembros
function displayMembers(members) { // Cambié a 'displayMembers'
    const cards = document.getElementById("card");
    cards.innerHTML = "";

    members.forEach(tarjeta => {
        const div = document.createElement("div");
        div.classList.add("tarjeta");

        const imagen = document.createElement("img");
        imagen.src = tarjeta.image;
        imagen.alt = tarjeta.name;
        imagen.style.width = "100px";
        imagen.style.height = "100px";
        imagen.loading = "lazy";

        const title = document.createElement("h3");
        title.textContent = tarjeta.name;

        const address = document.createElement("p");
        address.innerHTML = tarjeta.address.replace(/\n/g, '<br>');

        const phone = document.createElement("p");
        phone.textContent = tarjeta.phone;

        const website = document.createElement("p");
        website.textContent = tarjeta.website;

        const membership = document.createElement("p");
        membership.textContent = `Membership level: ${tarjeta.membershipLevel}`; // Corrige el acceso

        // Agrega los elementos al div
        div.appendChild(imagen);
        div.appendChild(title);
        div.appendChild(address);
        div.appendChild(phone);
        div.appendChild(website);
        div.appendChild(membership);

        // Agrega el div al contenedor de tarjetas
        cards.appendChild(div);
    });
}
toggleButton.addEventListener('click', () => {
    isGridView = !isGridView; // Cambia el estado de la vista

    // Cambia el estilo del contenedor basado en el estado
    if (isGridView) {
        membersContainer.style.display = 'grid'; // Vista en cuadrícula
        membersContainer.style.gridTemplateColumns = 'repeat(auto-fill, minmax(300px, 1fr))';
       
   
    } else {
        membersContainer.style.display = 'flex'; // Vista en lista
        membersContainer.style.flexDirection = 'column'; // Organiza en columnas
        membersContainer.style.alignItems = 'center';
    }
});


// Llama a fetchMembers cuando el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", fetchMembers);