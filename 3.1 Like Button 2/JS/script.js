console.log('probando')

function sumar(element){
   let elm = element.parentElement.querySelector(".counter")
   let count = +(elm.innerText)
   count++

   return elm.innerText = count

}