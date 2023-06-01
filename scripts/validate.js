

function userName() {
    document.getElementById("username").value = prompt("what is your name");
}

function passWord() {
    document.getElementById("password").value = prompt("what is your password");
}


function validate() {
    let user = document.getElementById("username").value;
    let pswrd = document.getElementById("password").value;

    if (user == "ola" && pswrd == "ola55" ){
        alert ("login successfully");
        window.location = "happy.html"
        return false
    } 

else{
attempt--;
alert("you have " + attempt + " attempt left");
window.location = "index.html"

if(attempt == 0){
    document.getElementById("username").disabled=true;
    document.getElementById("password").disabled=true;
    document.getElementById("submit").disabled=true;
}
}
}