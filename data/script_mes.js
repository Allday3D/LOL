// Get the modal
var modal;

// Get the modal
var modal = document.getElementById("myModalWait");

// When the user clicks a submit button, open the modal 
function showWaitModal(data) 
{
  modal.style.display = "block";
  // alert("enabling modal");
  document.getElementById("myModalWaitText").innerHTML = data;
}

// When the user clicks on <span> (x), close the modal
function closeModal() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//-------------------------------------------------------------------------------------------

function showHideDiv(divElement,callingElement) {
    var x = document.getElementById(divElement);
    if (x.style.display == "none") {
        x.style.display = "block";
		callingElement.innerText = "-";
    } else {
        x.style.display = "none";
		callingElement.innerText = "+";
    }
}

function showDiv(divElement) {
	var x = document.getElementById(divElement);
    x.style.display = "block";
}

function changeButtonText(buttonId,buttonText) {
	var x = document.getElementById(buttonId);
    x.innerText = buttonText;
}

function showHideIcon(iconName,displayState) {
	var x = document.getElementById(iconName);
    x.style.visibility = displayState;
}

//-------------------------------------------------------------------------------------------
function beginPage()
{
 document.getElementById("homeIconLink").setAttribute('href', location.protocol + '//' + 
                                                              location.host + '/reload');
 request("wifi_status", showWifiStatus);
 request("ntp_status", showNTPStatus);
 // request("smtp_status", showSMTPStatus);
 // request("sms_status", showSMSStatus);
 setupStatusRefresh();
 unprotectedCheckbox();
 sms_isHashCheckDisabledCheckbox();
 // Get the modal after loading
 modal = document.getElementById("myModalWait");
}

function showWifiStatus(data)
{
 document.getElementById("wifiResponseText").innerHTML = data;
}

function showNTPStatus(data)
{
 document.getElementById("ntpResponseText").innerHTML = data;
}

function setupStatusRefresh()
{
 //Request status every 10 seconds
 //Send current number of status lines as parameter to indicate to webserver if an update is needed
 //i.e. when number of webserver status lines != number of browser lines send a full update

 setInterval(function() {showHideIcon("loading_icon","visible");request("curStatus" + '?' + "statusLineCount=" +  document.getElementById("fstatusLineCount").value, showStatus, 1); }, 10e3); 
}

function unprotectedCheckbox()
{
 var checkbox = document.getElementById("funprotected");
 document.getElementById("fpass").disabled = checkbox.checked;
}

function isBlank(str) {
  // For checking if a string is blank, null or undefined  
  return (!str || /^\s*$/.test(str));
}

//-------------------------------------------------------------------------------------------
function startTime() {
    var today = new Date();
	var day = today.getDate();
	var mth = 1 + today.getMonth();
	var y = today.getFullYear();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
	day = checkTime(day);
    mth = checkTime(mth);
	h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txtTime').innerHTML =
    h + ":" + m + ":" + s;
	document.getElementById('txtDate').innerHTML =
    y + "/" + mth + "/" + day;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

//-------------------------------------------------------------------------------------------