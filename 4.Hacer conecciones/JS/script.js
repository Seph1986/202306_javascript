console.log('probando')

function editName(){
    let name = document.getElementById('nameProfile');

    if(name.innerText === "John Doe"){
        return name.innerText = "Jane Doe"
    }
    else{
        return name.innerText = "John Doe"
    }
}

function remove(element){
  let eliminar = element.parentElement.parentElement.remove();


  let etiqueta = document.querySelector(".notification")
  let contador = + etiqueta.innerText;
  contador --
  let retornar = (etiqueta.innerText = contador)

  if(element.classList.contains("b-accept")){
    let valor = document.querySelector(".not-conect");
    let numero = + valor.innerText;
    numero ++
    
    return valor.innerText = numero;
  }

  return [eliminar, retornar]
}
