"use strict";
function displayToday() {
    $("todays").textContent = Date.now().toDateString;
}

function addListToday() {
    // $("myCalendar").empty();
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
    insertTodo();
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

let todos = [];
//var todoInput = document.getElementById("listed");


function insertTodo() {

    //addListToday();
    todos.push(document.getElementById("listed"));
    //todoItems = todoItems.push(todoInput);
}


function clearTodo(myNode) {

    var node = document.getElementById("theInput");
    while (node.firstChild) {
        node.removeChild(myNode.firstChild);
    }
}
const container = document.querySelector("#theInput");
clearTodo(container);

function saveTodos() {
    var str = JSON.stringify(todos);
    localStorage.setItem("todos", str);


}
// to get data from local storage
function getTodos() {
    var str = localStorage.getItem("todos");
    todos = JSON.parse(str);
    var magic = str.value;
    alert(magic);
    if (!todos) {
        todos = []
    }
}
