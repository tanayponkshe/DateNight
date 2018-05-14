// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';
let shareLink = document.getElementById('sharelink');


function createSession(netflixURL, playState) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText());
        return this.responseText;
    }
  };
  xhttp.open("POST", "localhost:8080/createSession", false);
  xhttp.send("nflxURL=" + netflixURL + "&playState=" + playState);
}

shareLink.onclick = function(element) {
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;
    localStorage.setItem('netflixURL', url);
    localStorage.setItem('playState', 0);
    var sessionID = createSession();
    localStorage.setItem('sessionID', sessionID)
});
  

};
