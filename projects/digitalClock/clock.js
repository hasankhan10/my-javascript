const display = document.querySelector("#display")

setInterval(function(){
    let date = new Date()
    display.querySelector("h1").innerText = date.toLocaleTimeString()
},1000)