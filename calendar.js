
//$("#myCalendar").remove();

let monthInfo = {
    "jan": {
        "startdate": "wednesday",
        "enddate": 31,
        "prev": "",
        "next": "feb"
    },

    "feb":
    {
        "startdate": "saturday",
        "enddate": 29,
        "prev": "jan",
        "next": "mar"
    },
    "mar": {
        "startdate": "sunday",
        "enddate": 31,
        "prev": "feb",
        "next": "apr",
    },
    "apr":
    {
        "startdate": "wednesday",
        "enddate": 30,
        "prev": "mar",
        "next": "may"
    },
    "may":
    {
        "startdate": "friday",
        "enddate": 31,
        "prev": "apr",
        "next": "jun"

    },
    "jun":
    {
        "startdate": "monday",
        "enddate": 30,
        "prev": "may",
        "next": "jul"


    },
    "jul":
    {
        "startdate": "wednesday",
        "enddate": 31,
        "prev": "jun",
        "next": "aug",

    },
    "aug":
    {
        "startdate": "saturday",
        "enddate": 31,
        "prev": "jul",
        "next": "sep"

    },
    "sep":
    {
        "startdate": "tuesday",
        "enddate": 30,
        "prev": "aug",
        "next": "oct",

    },
    "oct":
    {
        "startdate": "thursday",
        "enddate": 31,
        "prev": "sep",
        "next": "nov",

    },
    "nov":
    {
        "startdate": "sunday",
        "enddate": 30,
        "prev": "oct",
        "next": "dec",
    },
    "dec":
    {
        "startdate": "wednesday",
        "enddate": 31,
        "prev": "nov",
        "next": "",
    }
};

let months = {
    "jan": "January",
    "feb": "February",
    "mar": "March",
    "apr": "April",
    "may": "May",
    "jun": "June",
    "jul": "July",
    "aug": "August",
    "sep": "September",
    "oct": "October",
    "nov": "November",
    "dec": "December"
};
let dayOftheweek = {
    "sunday": 0,
    "monday": 1,
    "tuesday": 2,
    "wednesday": 3,
    "thursday": 4,
    "friday": 5,
    "saturday": 6

};



var currentMonth = "jan";
var monbif = monthInfo[currentMonth]["prev"];
var monafter = monthInfo[currentMonth]["next"];

function createCalendar(mon) {
    $("#table-body").empty();
    let lastDate = monthInfo[mon]["enddate"]
    let countS = dayOftheweek[monthInfo[mon]["startdate"]]
    var count = 1;

    while (count <= lastDate) {

        var tableBody = document.getElementById("table-body");
        var row = document.createElement("tr");

        for (var i = 0; i < 7; i++) {
            if (count <= countS) {
                var cell = document.createTextNode("");

            } else {

                var cell = document.createTextNode(count - countS);
            }
            var enterada = document.createElement("td");
            enterada.appendChild(cell);
            row.appendChild(enterada);
            tableBody.appendChild(row);
            count++;
            if (count > lastDate + countS) {
                break
            }
        }

    }
    var showT = months[currentMonth].toUpperCase();
    document.getElementById("theMonth").innerText = showT;
    document.getElementById("display").innerText = showT.slice(0, 3);
    document.getElementById("dropdownMenuLink").innerText = showT;
}
createCalendar(currentMonth);

function monthFromDropDown(e) {
    var monthDrop = e.target.text.slice(0, 3).toLowerCase();
    console.log(monthDrop);
    console.log(showT);
    createCalendar(monthDrop);

    currentMonth = monthDrop;
    monbif = monthInfo[currentMonth]["prev"];
    monafter = monthInfo[currentMonth]["next"];
    var showT = months[currentMonth].toUpperCase();
    document.getElementById("theMonth").innerText = showT;
    document.getElementById("display").innerText = showT.slice(0, 3);
    document.getElementById("dropdownMenuLink").innerText = showT;
    /* title = $(event.target).closest('element-row').find('.dropdown-item');
     var comeThrough = title.prevObject.prevObject[0].text
     var stringForm = " " + comeThrough
     var toGetmonth = stringForm.slice(0, 4);
     var finaLly = toGetmonth[months]
     */


}




function showPrevNext(choice) {
    if (choice === "") {
        return;
    } else if (choice === monbif) {
        createCalendar(choice);
        currentMonth = choice;
        monbif = monthInfo[currentMonth]["prev"];
        monafter = monthInfo[currentMonth]["next"];

    } else {
        createCalendar(monafter)
        currentMonth = choice;
        monbif = monthInfo[currentMonth]["prev"];
        monafter = monthInfo[currentMonth]["next"];
    }
    var showT = months[currentMonth].toUpperCase();
    document.getElementById("theMonth").innerText = showT;
    document.getElementById("display").innerText = showT.slice(0, 3);
    document.getElementById("dropdownMenuLink").innerText = showT;

}
