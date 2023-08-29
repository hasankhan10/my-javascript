let random = parseInt(Math.random()*100+1)
let number = document.getElementById("num")
let submit = document.getElementById("sbmt")
let lowOrHi = document.getElementById("lowOrHi")
let guessNum = document.getElementById("guessNum")
let atmptleft = document.getElementById("atmptleft")
let revele = document.getElementById("randNum")
let info = document.querySelector("#info")
let attempt = document.querySelector("#attempt")
let button = document.querySelector("button")
let attemptt = 10
let list  = []


submit.addEventListener("click",function(event){
    event.preventDefault()
    validNumber(number.value)

    number.value = ''
})

button.addEventListener("click",function(){
    restart()
})

function validNumber(n){
    if(n < 1){
        alert("Please enter a number above 1")
    }
    else if (n > 100) {
        alert("Please enter a number bellow 100")
    }

    lowOrhigh(n)

}

function lowOrhigh(n){
    if (n > random) {
        lowOrHi.innerText = "Your number is too high"
    }
    else if(n < random){
        lowOrHi.innerText = "Your number is too low"
    }
    else{
        lowOrHi.innerText = "Congregulation ! You guess the Right Number."
        number.disabled = true
        submit.disabled = true
        endGame()
    }
    guessList(n)

}

function guessList(n){
    if (n>=1 && n<=100) {
        list.push(n)
        guessNum.innerText = `${list}; `
        endGame()
    }
    
}

function endGame(){
    if (attemptt > 0) {
        atmptleft.innerText = attemptDecrease(attemptt)
    }
    else if(attemptt === 0){

        attempt.innerText = "Your attempt is Over !"
        revele.innerText = `The Number was ${random}`
        number.disabled = true
        submit.disabled = true


    }
    
}

function attemptDecrease(atm){
    atm -= 1
    attemptt = atm
    return atm
}

function restart(){
    window.location.reload();
}


