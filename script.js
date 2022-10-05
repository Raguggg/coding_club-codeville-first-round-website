$("body").css("background-color","rgba(235,239,243,255)");
const onConfirmRefresh = function (event) {
    event.preventDefault();
    return event.returnValue = "Are you sure you want to leave the page?";
  } 
window.addEventListener("beforeunload", onConfirmRefresh, { capture: true });
const scriptURL = 'https://script.google.com/macros/s/AKfycby9aSmTdIfOkcZ9BBgvKgzDEGR_v7zFTuJMQOD1dFgJH3HTQvag7lS_iHIT5ay8RD3f/exec'
const form = document.forms['google-sheet']
$(document).ready(function() {
    //option A
    $("form").submit(function(e){
        e.preventDefault(e);
        document.documentElement.requestFullscreen().catch((e) => {
            console.log(e)
        });
        
        document.getElementById("ips").style.display='none';
        document.getElementById("forms").style.display='block';
        document.getElementById("cc").style.display='block';
    });
});
function full(){
    document.documentElement.requestFullscreen().catch((e) => {
            console.log(e)
        });
    document.querySelector(".popup").style.display = "none";
}


document.addEventListener("visibilitychange", event => {
    let a = document.getElementById('tab').value;
    const element = document.querySelector('#ips');
    if (element.style.display=='none' && Number(a)<4){
    if (document.visibilityState === "visible") {
        console.log("tab is active")
    } else {
        alert("tab is switched")
        document.querySelector(".popup").style.display = "block";
        document.getElementById('tab').value = Number(a) + 1;
        document.getElementById('abc').innerHTML=Number(a) + 1;
        if (Number(a) == 3) {
            document.querySelector(".popup").style.display = "none";
            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            document.getElementById("oops").style.display='block';
            document.getElementById("forms").style.display='none';
            document.getElementById("cc").style.display='none';
        }
    }
}
})
