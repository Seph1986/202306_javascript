function logAction(element){
    if (element.innerHTML == 'Login') return element.innerHTML = 'Logout';
    else return element.innerHTML = 'Login'
}

function hide(elm){
    return elm.remove();
}

function wAlert(){
    window.alert('Ninja was liked')
}