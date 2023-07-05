for(let i = 0; i<21; i++){
    if(i % 2 === 1){
        console.log(i)
    }
}

for(let i = 0; i < 101; i++){
    if(i % 3 === 0){
        console.log(i)
    }
}

let secuencia = [4, 2.5, 1, -0.5, -2, -3.5];

for(let i of secuencia){
    console.log(i)
}

function numero(){
    let sum = 0;
    let i = 0

    while(i < 101){
        sum += i
        i ++
    }

    console.log(sum)
}

numero()

function multiplicando(){
    let product = 1;

    for(let i = 1; i < 13; i++){
       product *= i
    }

    console.log(product)
}

multiplicando()