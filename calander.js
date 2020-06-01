var infoOnEachMonths = {
    "jan": {
        "starting": "wed",
        "length": 31,
        "pre": "",
        "next": "feb"
    },
    "feb": {
        "starting": "sat",
        "length": 29,
        "pre": "jan",
        "next": "mar"
    },
    "mar": {
        "starting": "sun",
        "length": 31,
        "pre": "feb",
        "next": "apr"
    },
    "apr": {
        "starting": "wed",
        "length": 30,
        "pre": "mar",
        "next": "may"
    },
    "may": {
        "starting": "wed",
        "length": 31,
        "pre": "apr",
        "next": "jun"
    },
    "jun": {
        "starting": "mon",
        "length": 30,
        "pre": "may",
        "next": 'jul'

    },
    "jul": {
        "starting": "wed",
        "length": 31,
        "pre": "jun",
        "next": "aug"
    },
    "aug": {
        "starting": "sat",
        "length": 31,
        "pre": "jul",
        "next": "sep"
    },
    "sep": {
        "starting": "tue",
        "length": 30,
        "pre": "aug",
        "next": "oct"


    },
    "oct": {
        "starting": "thu",
        "length": 31,
        "pre": "sep",
        "next": "nov"
    },
    "nov": {
        "starting": "sun",
        "length": 30,
        "pre": "oct",
        "next": "dec",
    },
    "dec": {
        "starting": "tue",
        "length": 31,
        "pre": "nov",
        "next": ""
    },
};

var dayToNum = {
    "sun": 0,
    "mon": 1,
    "tue": 2,
    "wed": 3,
    "thu": 4,
    "fri": 5,
    "sat": 6
};

var monthMap = {
    "jan": "january",
    "feb": "february",
    "mar": "march",
    "apr": "april",
    "may": "may",
    "jun": "june",
    "jul": "july",
    "aug": "august",
    "sep": "september",
    "oct": "october",
    "nov": "november",
    "dec": "december"
}



var defaultMonth = "jan";
var defaultDate = "jan1";
var defaultDateElement;

createTableBody(defaultMonth);

showPreviousOrNext = (choice) => {
    if (choice === "pre") {
        var mon = infoOnEachMonths[defaultMonth]["pre"];
    } else {
        var mon = infoOnEachMonths[defaultMonth]["next"];
    }
    var ul = $("#task-lists");
    ul.empty();
    createTableBody(mon);

}

function showPreNextButtons() {
    if (infoOnEachMonths[defaultMonth]["pre"] === "") {
        $('#pre').prop("disabled", true);
    } else {
        $('#pre').prop("disabled", false);
    }
    if (infoOnEachMonths[defaultMonth]["next"] === "") {
        $('#next').prop("disabled", true);
    } else {
        $('#next').prop("disabled", false);
    }
}

function createTableBody(month) {
    defaultMonth = month;
    showPreNextButtons();
    $('#current-month').text(monthMap[defaultMonth].toUpperCase());

    $('#dropdownMenuLink').text(monthMap[defaultMonth].toUpperCase());

    var tablebody = $("#table-body").empty();
    var startDate = dayToNum[infoOnEachMonths[month]["starting"]];

    var endDate = infoOnEachMonths[month]["length"];
    var counter = 1;
    var isFirstWeek = true;
    while (counter < endDate) {
        var tr = document.createElement("tr");
        if (7 - startDate < counter) {
            isFirstWeek = false;
        }

        for (let i = 0; i < 7; i++) {
            if (i >= startDate && isFirstWeek) {
                var td = createTd(counter);
                counter++;
            }
            else if (!isFirstWeek && counter < endDate) {
                var td = createTd(counter);
                counter++;
            }
            else {
                var td = createTd("");
            }

            tr.appendChild(td);
        };
        tablebody.append(tr);
    }



}

function createTd(date) {
    var td = document.createElement("td");
    if (date === "") {
        td.setAttribute("disabled", "");
    }


    if (date === 1 && defaultMonth === "jan") {
        td.setAttribute("id", "jan1");
        td.setAttribute("class", "days selected");
        defaultDateElement = td;
    } else {
        td.setAttribute("id", "box");
        td.setAttribute("class", "days");
    }
    var text = document.createTextNode(date);
    td.appendChild(text);

    td.addEventListener("click", getTaskList);

    return td;
}


