"use strict";

window.onload = init;

function init() {
    const greetbtn = document.getElementById("greetBtn");
    greetbtn.onclick = onGreetUserBtnClicked
}

function onGreetUserBtnClicked() {
    // get the initial known values (this time from the textboxes on your html)
    let username = nameField.value;



    //compute the unknown values
    let message = `Hello ${username}!`;



    ///display the result.
    alert(message)
}