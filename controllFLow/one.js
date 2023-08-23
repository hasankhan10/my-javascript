// if statement
const temparature = 40

if (temparature > 35) {
    // console.log(`temparature is high.`);
}
else{
    // console.log(`tempareture is low.`);
}

// multiple condition

const balence = 850
if (balence<500) {
    // console.log(`less than 500`);
}
else if (balence<700) {
    // console.log(`less then 700`);
}
else if (balence<900) {
    // console.log(`less than 900`);
}
else{
    // console.log(`less then 1100`);
}

let userLoggedIn = true
let debitCart = false
if (userLoggedIn && debitCart) {  // && ,|| :- logical oparator
    // console.log(`you are eligable to buy this course.`);
}
else{
    // console.log(`you are not eligable.`);
}

let userGoogle = true
let userEmail = false
if (userEmail || userGoogle) {
    // console.log(`you can entered here.`);
}
else{
    // console.log(`fuck you`);
}