// Named Export

const errorMessage =
  "<p><em>You do not have any list items yet. Try adding one with the form above.</em></p>";

function applyTemplate(item) {
  return `<div class="col-xs-12 col-sm-4 col-md-4 adj_text"><h3>${item.title}</h3>
  <p>${item.tagline}</p>
  <img src="${item.img}" alt="${item.alt}" />

  <div class="read-more-btn">
    <a href="${item.link}" class="btn-oval">Learn More</a>
  </div></div>`;
}

function sessionTemplate(sessions) {
  // If there are no list items
  if (sessions < 1) return errorMessage;

  return "" + sessions.map(applyTemplate).join("") + "";
}

export {sessionTemplate, errorMessage};


// aliasing the export
const sessionURL = "sessions.json"

let sessionList = [];

function getSessions(){
    return new Promise(function(resolve, reject){
      var oReq = new XMLHttpRequest();
      oReq.onload = function (e) {
          sessionList = e.target.response;
        resolve(sessionList);
      };
      oReq.open('GET', sessionURL, true);
      oReq.responseType = 'json';
      oReq.send();
    })
  }
  

export {getSessions as sessions};

// Default export
export {getSessions as default, sessionURL};

// aggregating modules
export {sessionTemplate} from './template.js';



// =====================
//      Using Modules
// =====================

// Enabling modules
<script src="js/app.js" type="module"></script>

// Default imports
import getSessions from "./sessionRepository.js";

// Named imports - the name has to be the same
import {sessionTemplate, errorMessage} from "./template.js";
import {sessionTemplate as session, errorMessage} from "./template.js";
import * as template from "./template.js";
    // template.sessionTemplate     - use this syntax to perform import
    
