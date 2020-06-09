"use strict";
function displayToday() {
    $("todays").textContent = Date.now().toDateString;
}

function addListToday() {
    $("myCalendar").empty();
    var insideText = document.getElementById("typedItem").value;

    var text = document.createElement("li");
    text.setAttribute("class", "list-group-item");
    text.setAttribute("id", "listed");
    var check = document.createElement("INPUT");
    check.setAttribute("type", "checkbox");
    check.setAttribute("id", "thecheckbox")
    check.setAttribute("class", "checker");



    text.appendChild(check);

    var textnode = document.createTextNode(insideText);
    text.appendChild(textnode);
    var trash = document.createElement("btn");
    trash.setAttribute("class", "fa fa-trash");
    trash.setAttribute("id", "fatrash");
    text.appendChild(trash);



    document.getElementById("theInput").appendChild(text);
    var icoon = document.getElementById("fa fa-trash");
    trash.addEventListener("click", removeEvent)
    check.addEventListener("click", strikeThrough)
    removeEntry();
    displayToday();
}
function strikeThrough() {
    $(this).closest("li").toggleClass("strike");

}
function removeEntry() {
    document.getElementById("typedItem").value = "";

}

function removeEvent(e) {
    let li = e.target.closest("li");
    $(this).closest('li').remove();
}
function displayToday() {
    var zare = new Date().toDateString();
    document.getElementById("todays").innerHTML = zare;

}
displayToday();