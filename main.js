async function fetchData(){
    try{
        const integralQuestion = document.getElementById("integration").value.toLowerCase().trim();
        const response= await fetch(`https://newton.vercel.app/api/v2/integrate/${integralQuestion}`);
        
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
