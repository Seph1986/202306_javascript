console.log("page loaded...");

function player(element){
    element.classList.add("videoHover");
    element.childNodes[1].play()

}

function playerStop(element){
    element.classList.remove("videoHover");
    element.childNodes[1].pause()
}

