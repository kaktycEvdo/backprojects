/// RATING ///
function allowDrop(ev) {
    ev.preventDefault();
}
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
/// MENU ///
const menu = document.querySelector(".linkssmenu");
function slideMenu(menu, b){
    if (b === 1){ menu.classList.add("visible"); }
    else if(b === 2){ menu.classList.remove("visible"); }
    else{ menu.classList.toggle("visible"); }
}
document.getElementById("menu_button").addEventListener("click", () => {
    slideMenu(menu, 1);
});
window.addEventListener('mouseover', (e) => {
    if (!menu.contains(e.target) && e.target.id !== "#linkss") {
        slideMenu(menu, 2);
    }
});
/// DYNAMIC BUILD ///
if (document.getElementById("archive")){
    for (let i = 1; i < 31; i++){
        let element = document.createElement("p");
        element.id = "i"+i.toString();
        element.classList.add("frog");
        element.addEventListener("dragstart", (e) => {drag(e)})
        element.draggable = true;
        document.getElementById("archive").appendChild(element);
    }
}
/// PREPARING POST DATA ///
function prepareData(){
    let A = [];
    for (let element of document.querySelector(".A .tcontent").children){A.push(element.id)}
    let B = [];
    for (let element of document.querySelector(".B .tcontent").children){B.push(element.id)}
    let C = [];
    for (let element of document.querySelector(".C .tcontent").children){C.push(element.id)}
    let D = [];
    for (let element of document.querySelector(".D .tcontent").children){D.push(element.id)}
    let archive = [];
    for (let element of document.querySelector("#archive").children){archive.push(element.id)}
    return JSON.stringify({A: A, B: B, C: C, D: D, archive: archive});
}
function sendData(){
    let xhr = new XMLHttpRequest();
    let data = prepareData();

    xhr.open("POST", "patch", true);
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
    xhr.send(data);
}