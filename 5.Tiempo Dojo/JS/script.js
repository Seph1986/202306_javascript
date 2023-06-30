console.log('probando')

function wAlert(){
    alert("Loading weather report...")
}

function cokiesAccept(){
    return document.querySelector(".cookie-card").remove();
}

function convertTemp(element){
    let max = document.querySelectorAll(".max");
    let min = document.querySelectorAll(".min");

    if(element.value === "°F"){
        for (let i = 0; i < 4; i++){
            let maxCelcius = + max[i].childNodes[0].data;
            let minCelcius = +min[i].childNodes[0].data;
            let maxFahrenheit = (maxCelcius * 9/5) + 32;
            let minFahrenheit = (minCelcius * 9/5) + 32;
            
            max[i].childNodes[0].data = Math.round(maxFahrenheit);
            min[i].childNodes[0].data = Math.round(minFahrenheit);

        }
    }
    else{
        for (let i = 0; i < 4; i++){
            let maxFahrenheit = + max[i].childNodes[0].data;
            let minFahrenheit = +min[i].childNodes[0].data;
            let maxCelcius = (maxFahrenheit - 32) *  5/9;
            let minCelcius = (minFahrenheit - 32) * 5/9;
            
            max[i].childNodes[0].data = Math.round(maxCelcius);
            min[i].childNodes[0].data = Math.round(minCelcius);
        }
    }

    console.log(max[0].childNodes[0], min[0].childNodes[0])
}