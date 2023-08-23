// const tinderUser = new Object() its also possible
const tinderUser = {}
tinderUser.id = 123
tinderUser.name = "Mehedi"
tinderUser.age = 20
tinderUser.hieght = "5 foot 4 inches"
tinderUser.isLogIn = true

// console.log(tinderUser.isLogIn);

// Object under a Object

const newUser = {
    age: 20,
    fullName: {
        firstName: "Mehedi",
        lastName: "Hasan"
    }
}

// console.log(newUser.fullName);

// concatinate the object

const obj1 = {
    1: "a",
    2: "b",
    3: "c"
}
const obj2 = {
    5: "a",
    6: "b",
    7: "c"
}


// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);                           way no 1

// const obj3 = {obj1,obj2}                     way no 2
// console.log(obj3); 

// const obj3 = {...obj1,...obj2}                     way no 3
// console.log(obj3); 

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}


const {courseInstructor: instructor} = course

console.log(instructor);
