const buttons = document.querySelectorAll("button")
const bod = document.querySelector("body")

bod.addEventListener("click",function(){
    bod.style.backgroundColor = "white"
})

buttons.forEach(function(col){
    col.addEventListener("click",function(){
        event.stopPropagation();
        bod.style.backgroundColor = col.innerText
    })
    
})

