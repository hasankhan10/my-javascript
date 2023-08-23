function name(name){
    if(!name){
        console.log("please enter your name.");
        return
    }
    return `${name} it is your namee.`
}

// const namee = name("")
// console.log(namee);


function addCart(...num){

    return num

}

// console.log(addCart(100,200,300)); output:- 100,200,300

const user = {

    userName: "Mehedi",
    prices: 999
}

 function handleObject(addUSer){
    console.log(`username is ${addUSer.userName} and price is ${addUSer.prices}`);
 }

// object under function
// handleObject({
//     userName: "mehedi",
//     prices: 999
// })


const newArray = [100,33,555,64]

function returnSecondValue(gettArray){
    return gettArray[1]
}

// console.log(returnSecondValue(newArray));


// arrow function .

const arrow = (num1,num2) => (num1+num2) 


// console.log(arrow(3,4));

const wellcome = (getParamiter) => (`hi,${getParamiter}`) 
// console.log(wellcome("mehedi")); 


const best = function (getName){
    console.log(`hi ${getName}`);

    const k = 10
    function access(){
        console.log(k);
    }
    access()
}
// best("mehedi")

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai =  () => {
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()

const addTwo = (num1, num2) => (num1 + num2)


console.log(addTwo(3, 4))