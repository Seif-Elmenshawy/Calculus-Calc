async function fetchintegrationData(){
    try{
        const integralQuestion = document.getElementById("integration").value.toLowerCase().trim();
        const encoded = encodeURIComponent(integralQuestion)
        const response= await fetch(`https://newton.vercel.app/api/v2/integrate/${encoded}`);
        
        if(!response.ok){
            throw new Error("Couldn't fetch the data");
        }
        const data= await response.json();
        const result = document.getElementById("intgrateresult");
        const answer = data.result;
        result.innerText=answer;

    }
    catch(error){
        console.error(error);
    }
}

async function fetchDerivativeData(){
    try{
        const integralQuestion = document.getElementById("derivativequestion").value.toLowerCase().trim();
        const encoded = encodeURIComponent(integralQuestion)
        const response= await fetch(`https://newton.vercel.app/api/v2/integrate/${encoded}`);
        
        if(!response.ok){
            throw new Error("Couldn't fetch the data");
        }
        const data= await response.json();
        const result = document.getElementById("derivativeans");
        const answer = data.result;
        result.innerText=answer;

    }
    catch(error){
        console.error(error);
    }
}
function changetheme(){
    const nav = document.getElementById("nav");
    nav.classList.toggle("darktheme")
    document.getElementById("footer").classList.toggle("darktheme")
    document.getElementsById("hero").classList.toggle("darktheme")
}
function re(){
    let email = document.getElementById("email").value
    let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    let validation = pattern.test(email)
    if (validation === false){
        alert("insert a valid email")
    }
    else{
        return true
    }
}
const element = document.getElementById("integration");
element.addEventListener("paste", function(){
    alert("you pasted something");
})

document.getElementById("contact").addEventListener("submit", function(event) {
  event.preventDefault(); // prevent the form from submitting/reloading
  document.getElementById("main").style.display = "none";

  const newHeading = document.createElement("h1");
  newHeading.innerText = "Thanks for sharing your opinion";
  document.body.appendChild(newHeading);
});

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("contact").addEventListener("submit", function(event) {
  event.preventDefault(); // prevent the form from submitting/reloading
  document.getElementById("main").style.display = "none";

  const newHeading = document.createElement("h1");
  newHeading.innerText = "Thanks for sharing your opinion";
  document.body.appendChild(newHeading);
});
});
