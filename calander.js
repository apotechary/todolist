var infoOnEachMonths = {
    "jan": {
        "starting": "wed",
        "length": 31,
        "pre": "",
        "next": "feb"
    },
    "feb": {
        "starting": "sat",
        "length": 29
    },
    "mar": {
        "starting": "sun",
        "length": 31
    },
    "apr": {
        "starting": "wed",
        "length": 30
    },
    "may": {
        "starting": "wed",
        "length": 31
    },
    "jun": {
        "starting": "mon",
        "length": 30
    },
    "jul": {
        "starting": "wed",
        "length": 31
    },
    "aug": {
        "starting": "sat",
        "length": 31
    },
    "sep": {
        "starting": "tue",
        "length": 30
    },
    "oct": {
        "starting": "thu",
        "length": 31
    },
    "nov": {
        "starting": "sun",
        "length": 30
    },
    "dec": {
        "starting": "tue",
        "length": 31
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

createTableBody(defaultMonth);



function showPreviousOrNext(choice) {
    if (choice === "pre") {
        var mon = infoOnEachMonths[defaultMonth]["pre"];
    } else {
        var mon = infoOnEachMonths[defaultMonth]["next"];
    }

    if (mon !== "") {
        createTableBody(mon);
    }
}

function createTableBody(month) {
    defaultMonth = month;
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
    td.setAttribute("class", "days")
    var text = document.createTextNode(date);
    td.appendChild(text);

    return td;
}

