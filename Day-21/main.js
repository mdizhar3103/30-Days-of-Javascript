// JavaScript Document
var start = '{"favColor": "Orange", "favSeason": "Fall"}';

var myObject = JSON.parse(start);
console.log(myObject);

console.log("--- Stringify result ---");
var myString = JSON.stringify(myObject);
console.log(myString);

console.log("--- Converting Stringify back to Object ---");
var myObject = JSON.parse(myString);
console.log(myObject);


// ========================================
//          Single Level JSON Data
// ========================================
var theData1 = '{"first": "Mohd", "last": "Izhar", "city": "Sales"}';
var myObj = JSON.parse(theData1);
console.log(myObj);

document.getElementById('message').innerHTML = myObj.last;          // will update the HTML id data


// ========================================
//          Double Level JSON Data
// ========================================
var theData2 = '{"Izhar": {"age": "23", "degree": "Bachelors"}, "Jim": {"age": "35", "degree": "Masters"}}';
var myObj = JSON.parse(theData2);
console.log(myObj);

document.getElementById('message').innerHTML = myObj.Izhar.age;


// ========================================
//          Triple Level JSON Data
// ========================================
var theData3 = '{"Izhar": {"age": "23", "degree": {"Bachelors": "UPES", "Masters": "Havard"}}, "Jim": {"age": "35", "degree": "Masters"}}';
var myObj = JSON.parse(theData3);
console.log(myObj);

document.getElementById('message').innerHTML = myObj.Izhar.degree.Bachelors;


// =====================
//          AJAX 
// =====================
var xhr = new XMLHttpRequest();

xhr.open('GET', 'data.json', true);

xhr.send();

xhr.onreadystatechange = function() {
    console.log(xhr.readyState);
    console.log(xhr.status);
    console.log(xhr.statusText);

    /*
    readystatechange in XMLHttpRequest
    0 - unsent
    1 - opened
    2 - headers_received
    3 - loading
    4 - done
    */
}

// -----------------------

var xhr = new XMLHttpRequest();

xhr.open('GET', 'data.json', true);
xhr.responseText = 'text';
xhr.send();

xhr.onreadystatechange = function() {
    console.log(xhr.readyState);
    console.log(xhr.status);
    console.log(xhr.statusText);
}

xhr.onload = function() {
    if (xhr.status === 200) {
        var myStuff = JSON.parse(xhr.responseText);
        console.log(myStuff);
    } else {
        console.log(xhr.status, xhr.statusText)
    }

}

// --------------
// project data
// --------------
var hotelInfo;
var details;
var xhr = new XMLHttpRequest();
xhr.open('GET', "data.json", true);
xhr.responseType = 'text';
xhr.send();


xhr.onload = function() {
    if(xhr.status === 200) {
        hotelInfo = JSON.parse(xhr.responseText);
        console.log(hotelInfo);
        display(0);
  
    } // end if
} // end function


function display(x) {
    document.getElementById('roomName').innerHTML = hotelInfo[x].name;
    document.getElementById('desc').innerHTML = hotelInfo[x].description;
    document.getElementById('photo').src = hotelInfo[x].photo;

    document.getElementById('weekday').innerHTML = hotelInfo[x].cost.weekday;
    document.getElementById('weekend').innerHTML = hotelInfo[x].cost.weekend;

    details = "";
    for(let i = 0; i < hotelInfo[x].details.length; i++) {
        details += "<p>"+ hotelInfo[x].details[i] +"</p>";
    }
    document.getElementById('details').innerHTML = details;
}

