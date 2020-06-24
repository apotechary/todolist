"use strict";



function getTaskList(e) {
    var ul = $("#task-lists");
    ul.empty();

    var td = e.target;
    //console.log('before', defaultDateElement.classList)
    defaultDateElement.classList.remove("selected");
    //console.log('after', defaultDateElement.classList)
    defaultDateElement = td;
    td.setAttribute("class", "selected");



    var cellValue = defaultMonth + e.target.innerText;
    defaultDate = cellValue;
    console.log('date', cellValue);
    var data = database[cellValue];
    if (data === undefined) {
        database[cellValue] = [];
    } else {

        for (let i = 0; i < data.length; i++) {
            var li = createTaskListLi(data[i]);
            ul.append(li);
        }
    }
}

function addTaskList() {

    var task = $("#task-todo").val().trim();
    if (task === "") {
        alert("please enter a task!");
        return;
    }

    if (database[defaultDate] === undefined) {
        database[defaultDate] = [];
    }
    database[defaultDate].push(task);
    var ul = $("#task-lists");
    var li = createTaskListLi(task);
    ul.append(li);
    clearField();
}


function createTaskListLi(todoText) {

    var li = document.createElement("li");
    li.setAttribute("class", "list-group-item each-list");
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
    i.addEventListener("click", removeDoneTasks)

    // create child elements
    span1.appendChild(inputel);
    span2.appendChild(i);
    li.appendChild(span1);
    li.appendChild(text);
    li.appendChild(span2);
    return li;

}

function removeDoneTasks() {
    $(this).closest("li").remove();
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

function clearField() {
    document.getElementById("task-todo").value = "";
}
