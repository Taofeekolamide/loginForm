var attempt = 3;

function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value; 
if (username == "ola" && password == "ola"){
    alert("log in successfully");
    window.location ="happy.html" 
    return false
}
else{
attempt--;
alert("you have" + attempt + "attempt left");
window.location = "index.html"

if(attempt == 0){
    document.getElementById("username").disabled=true;
    document.getElementById("password").disabled=true;
    document.getElementById("submit").disabled=true;
}
}
}