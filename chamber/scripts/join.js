const time_stamp=document.getElementById("timestamp");
const now= new Date();
const formatted_timestamp=now.toISOString();
time_stamp.value=formatted_timestamp;
console.log(formatted_timestamp)


const open_button=document.querySelector(".openbutton1");

const profit_div=document.querySelector("#profit");

function displayProfit(data){
    profit_div.innerHTML="";
    profit_div.innerHTML=`
    <button class="closebutton1">❌</button>
    <h2>${data[0].title}</h2>
    <p>${data[0].description}</p>`;
    const close_button1=document.querySelector(".closebutton1");
    close_button1.addEventListener("click",()=>{
    profit_div.close();
    })
}
open_button.addEventListener("click",()=>{
    profit_div.showModal();
})
const memberships=[
   {title:"Non-Profit Membership Level",description:"Non Profit Level you can get new objects free"},
   {title:"Bronze Membership Level",description:"Bronze Level you can get new objects free"},
   {title:"Silver Membership Level",description:"Silver Level you can get new objects free"},
   {title:"Gold Membership Level",description:"Gold Level you can get new objects free"},
];

console.log(memberships);


const open_button2=document.querySelector(".openbutton2");
const bronze_div=document.querySelector("#bronze");

function displayBronze(data){
    bronze_div.innerHTML="";
    bronze_div.innerHTML=`
    <button class="closebutton2">❌</button>
    <h2>${data[1].title}</h2>
    <p>${data[1].description}</p>`;
    const close_button2=document.querySelector(".closebutton2");
    close_button2.addEventListener("click",()=>{
    bronze_div.close();
    })
}
open_button2.addEventListener("click",()=>{
    bronze_div.showModal();
})

 const open_button3=document.querySelector(".openbutton3");
 const silver_div=document.querySelector("#silver")
function displaySilver(data){
    silver_div.innerHTML="";
    silver_div.innerHTML=`
    <button class="closebutton3">❌</button>
    <h2>${data[2].title}</h2>
    <p>${data[2].description}</p>`;
     const close_button3=document.querySelector(".closebutton3");
     close_button3.addEventListener("click",()=>{
        silver_div.close();
     })    
 }
  open_button3.addEventListener("click",()=>{
    silver_div.showModal();
  })
  const open_button4=document.querySelector(".openbutton4");
  const gold_div=document.querySelector("#gold");
  function displayGold(data){
    gold_div.innerHTML="";
    gold_div.innerHTML=`
    <button class="closebutton4">❌</button>
    <h2>${data[3].title}</h2>
    <p>${data[3].description}</p>`;
     const close_button4=document.querySelector(".closebutton4");
     close_button4.addEventListener("click",()=>{
        gold_div.close();
     })    
  }
  open_button4.addEventListener("click",()=>{
    gold_div.showModal()
  })
displayProfit(memberships);
displayBronze(memberships);
displaySilver(memberships);
displayGold(memberships);