"use strict";
/*function letsDothis() {

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let daysOftheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let numberofDays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let result = "";
    for (i = 0; i < numberofDays.length; i++) {
        result += daysOftheWeek[6] + numberofDays[i]
    }
    return result;
}
*/
function toDolist() {

}

function myFunction() {
    $("#please").classList.toggle("show");

};
window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
        var dropdowns = document.getElementsByClassName("dropdown-menu");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show");
            }
        }
    }
}


function addTaskList() {
    var task = $("#task-todo").val();
    var ul = $("#task-lists");
    var li = createTaskListLi(task);
    ul.append(li);
}


function createTaskListLi(todoText) {

    var li = document.createElement("li");
    li.setAttribute("class", "list-group-item");
    var span1 = document.createElement("span");
    span1.setAttribute("class", "task-list");
    var span2 = document.createElement("span");
    span2.setAttribute("class", "task-list");
    var inputel = document.createElement("input");
    inputel.setAttribute("type", "checkbox");
    inputel.setAttribute("id", "check");
    var i = document.createElement("i");
    i.setAttribute("class", "fa fa-trash");
    var text = document.createTextNode(todoText);
    inputel.addEventListener("click", strikeThrough);



    // create child elements
    span1.appendChild(inputel);
    span2.appendChild(i);
    li.appendChild(span1);
    li.appendChild(text);
    li.appendChild(span2);

    return li;

}
function removeDoneTasks() {

}
function strikeThrough(e) {
    console.log("event", e.target);
    var checkbox = e.target;
    var li = checkbox.parentElement.parentElement;


    if (checkbox.checked) {
        li.classList.add("strike");
        //checkbox.style.textDecoration = 'line-through';

    } else {

        li.classList.remove("strike");

    }

}

