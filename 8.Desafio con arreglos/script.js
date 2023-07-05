// Siempre hambriento

function siempreHambriento(arr) {
    if(arr.includes("comida")){
        for(i of arr){
            if(i === "comida"){
                console.log("Delicioso")
            }
        }
    }else{
        console.log('Tengo hambre')
    }
}
   
siempreHambriento([3.14, "comida", "pastel", true, "comida"]);
// esto debería mostrar "delicioso, "delicioso"
siempreHambriento([4, 1, 5, 7, 2]);
// esto debería mostrar "Tengo hambre"


// Filtro paso alto

function highPass(arr, cutoff) {
    var filteredArr = [];
        for(i of arr){
            if(i > cutoff){
                filteredArr.push(i)
            }
        }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // esperamos de vuelta [6, 8, 10, 9]


// Mejor que el promedio

function betterThanAverage(arr) {
    var sum = 0;
    
    for(i of arr){
        sum += i
    }

    var count = 0
        for(i of arr){
            if(i > (sum / arr.length)){
                count ++
            }
        }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // esperamos 4 de vuelta


//Arreglo invertido

function revers(arr) {
    
    arr.reverse()
    
    return arr;
}
   
var result = revers(["a", "b", "c", "d", "e"]);
console.log(result); // esperamos de vuelta ["e", "d", "c", "b", "a"]


//Arreglo Fibonacci

function fibonacciArray(n) {
    // [0, 1] son los valores inciales del arreglos para calcular el resto
    var fibArr = [0, 1];
        for(let i = 1; i < n - 1; i++){
            fibArr.push(fibArr[i] + fibArr[i-1])
        }
    return fibArr;
}
   
var result = fibonacciArray(10);    
console.log(result); // esperamos de vuelta[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
