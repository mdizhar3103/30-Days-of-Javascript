// XMLHttpRequest (XHR)
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        console.log(this.responseText);
    }
};

xhttp.open('GET',"http://<enter_id></enter_id>.mockapi.io/api/v1/users",
true);  // 5b32a4fd82407e001413f1df -- trainerId
xhttp.send();


// ============================
//            JQuery 
// ============================

// npm install jquery
import $ from 'jquery';

$.get("http://<enter_id></enter_id>.mockapi.io/api/v1/users",
 data => console.log('data: ', data)
);


let promise = $.get("http://<enter_id></enter_id>.mockapi.io/api/v1/users");
promise.then(
    data => console.log('success: ', data),
    error => console.log('error: ', error)
);


// JQuery and HTTP POST
import $ from 'jquery';

let user = {
    name: 'Mohd Izhar',
    avatar: 'izhar.jpg'
};

let promise = $.post("http://<enter_id></enter_id>.mockapi.io/api/v1/users", user);
promise.then(
    data => console.log('data: ', data),
    error => console.log('error: ', error)
);


// ==============================================
//                  Forms
// ==============================================

let form = document.getElementById('user-form');
form.addEventListener('submit', event => {
    // prevent the browser from submitting the form
    event.preventDefault();
});


// accessing form fields
form.addEventListener('submit', event => {
    let user = form.elements['user'];
    let avatarFile = form.elements['avatar-file'];
    console.log(user.value ,avatarFile.value);
    event.preventDefault();
});

// Showing validation errors
// <input name="user" placeholder="User Name" />
// <span id="user-error"></span>

form.addEventListener('submit', event => {
    let user2 = form.elements['user'];
    let userError = document.getElementById('user-error');
    
    if(user2.value.length < 4) {    
        userError.textContent = "Invalid Entry";
        userError.style.color = "red";
        user2.style.borderColor = "red";
        user2.focus();
        event.preventDefault();
    }
});


// Posting From Javascript
import $ from 'jquery';

let form = document.getElementById('user-form');

form.addEventListener('submit', event => {
    let user = form.elements['user'];
    let avatarFile = form.elements['avatar-file'];
    
    let posting = {
        user: user.value,
        avatarFile: avatarFile.value
    };
    
    let promise = $.post("http://<enter_id></enter_id>.mockapi.io/api/v1/users", posting);
    promise.then(
        data => console.log('Success: ', data),
        error => console.log('Error: ', error)
    );
    event.preventDefault();
    
});

