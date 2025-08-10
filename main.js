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