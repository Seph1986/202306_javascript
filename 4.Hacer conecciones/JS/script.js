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

  let contador = + document.querySelector(".notification").innerText;
  contador --
  let retornar = (document.querySelector(".notification").innerText = contador)

  if(element.classList.contains("b-accept")){
    let numero = + document.querySelector(".not-conect").innerText;
    numero ++
    
    return document.querySelector(".not-conect").innerText = numero;
  }

  return [eliminar, retornar]
}
