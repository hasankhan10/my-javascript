let body = document.querySelector("body")
let intervalId;
const start = document.getElementById("st")
const stop = document.getElementById("sp")
let isRunning = false

let randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = "#"
    for(i = 0; i< 6; i++){
        let random = Math.floor(Math.random()*16)
        color += hex[random]
}
body.style.backgroundColor = color
}


start.addEventListener("click",function(){
    if (isRunning == false) {
        intervalId = setInterval(randomColor,1000)
        isRunning = true
    }
    
})

stop.addEventListener("click",function(){
    clearInterval(intervalId)
    isRunning = false
})
