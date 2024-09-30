const mainnav=document.querySelector(".navigation");
const hambutton=document.querySelector("#menu");
hambutton.addEventListener("click",() =>{
  mainnav.classList.toggle("show");
  hambutton.classList.toggle("show");
});
async function fetchMembers(){
    try{
        const response=await fetch("data/member.json");
        if(!response.ok){
            throw new Error("Network response is not ok"+ response.statusText);

        }
        const members= await response.json();
        displayMembers(members);
    }
    catch(error){
        console.log("Error fetching members",error);

    }
    
}
//Function Display Members
function displaymembers(member){
const cards=document.getElementById("card");
cards.innerHTML="";
member.forEach(tarjeta => {
    const div= document.createElement("div");
    div.classList("tarjeta");
    const imagen=createElement("img");
    imagen.src=tarjeta.image;
    imagen.alt=tarjeta.name;
    imagen.style.width="100px";
    imagen.style.heigth="100px";
    imagen.loading="lazy";
    
    const name=createElement("h3");
    name.textContent=member.name;
    const address=createElement("p");
    address.innerHTML="member.address.replace(/\n/g, '<br>');";
    const phone=createElement("p");
    phone.textContent=member.phone-number;
    const website=createElement("p");
    website.textContent=member.website-URL;
    const membership=createElement("p");
    membership.textContent=`Membership level:${member.membership-level}`
    div.appendChild(imagen);
    div.appendChild(name);
    div.appendChild(address);
    div.appendChild(phone);
    div.appendChild(website);
    div.appendChild(membership);
    cards.appendChild(website);

});

const paragraph=document.createElement("p");
const paragraph2=document.createElement("p");
const paragraph3=document.createElement("p");
paragraph.textContent="gatito ron ron";
cards.appendChild(paragraph);
}