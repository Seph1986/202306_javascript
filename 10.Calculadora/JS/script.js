console.log('probando');

let display = document.querySelector('#display');
let numero1 = 0;
let numero2 = 0;
let operacion = "";

function clr(){
    display.innerText = "0";
}

function press(element){
    if(display.innerText === "0"){
        if(element === "."){
            display.innerText = "0.";
        }
        else{display.innerText = element}
    }else{
        display.innerText = display.innerText + element;
    }
}

function setOP(element){
    numero1 = +(display.innerText)
    display.innerText = "0";
    operacion = element
}

function calculate(){
    numero2 = +(display.innerText)
    let calculo = 0;

    if(operacion === '/'){
        calculo = numero1 / numero2
    }
    if(operacion === '*'){
        calculo = numero1 * numero2
    }
    if(operacion === '-'){
        calculo = numero1 - numero2
    }
    if(operacion === '+'){
        calculo = numero1 + numero2
    }

    display.innerText = calculo 
}

