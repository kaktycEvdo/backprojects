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
/// POST DATA ///
function prepareData(){
    let a = [];
    for (let element of document.querySelector(".A .tcontent").children){a.push(element.id)}
    let b = [];
    for (let element of document.querySelector(".B .tcontent").children){b.push(element.id)}
    let c = [];
    for (let element of document.querySelector(".C .tcontent").children){c.push(element.id)}
    let d = [];
    for (let element of document.querySelector(".D .tcontent").children){d.push(element.id)}
    let archive_ = [];
    for (let element of document.querySelector("#archive").children){archive_.push(element.id)}
    return {A: a, B: b, C: c, D: d, archive: archive_};
}
function sendData(e){
    e.preventDefault();
    let xhr = new XMLHttpRequest();
    let data = prepareData();

    xhr.open("POST", "../patch", false);
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");

    xhr.send(JSON.stringify(data));
}