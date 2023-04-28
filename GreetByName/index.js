"use strict"

window.onload = init;
function init() {
const greetbtn = document.getElementById("nameField");
greetbtn.onclick = onGreetUserBtnClicked
}
function onGreetUserBtnClicked() {
    alert("Hello UserName Here")
}