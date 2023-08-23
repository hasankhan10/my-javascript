// for of loop

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const  greetings = "hello world !"

for (const greet of greetings) {

    if (greet == " " || greet == "  ") {
        continue
    }
    else{
        // console.log(`Each charechter is: ${greet}`);
    }

}

//  MAPS //      non repetable object.....(unique value)

const map = new Map()

map.set("IN","India")
map.set("USA","United State Of America")
map.set("FR","Franch")
map.set("BD","Bangladesh")

// console.log(map);

// for (const key of map) {
//     console.log(key);
// }

for (const [key , value] of map) {
    // console.log(key ,":-" ,value);
}

// let myObject = {
//     "game1": "NFS",
//     "game2": "Spiderman",         this is not iterable...in forof loop
//     "game3": "Batman"
// }
// for (const [game ,name] of myObject) {
//     // console.log(game);
// }


const myObject = {
    js: "jsvsscript",
    cpp: "c++",
    rb: "ruby"
}

for (const key in myObject) {
    // console.log(key, ":->",myObject[key])
}


let programing = ["js","cpp","python","java","ruby","javascript"]


for (const key in programing) {
    // console.log(key);  //to get value
}

for (const key of programing) {
    // console.log(key);             // using forof loop
}

// for each loop

const coding = ["java","python","cpp","js"]

// coding.forEach( function (value){
//     console.log(value);               this using by callback function.
// } )

coding.forEach( (item,index,arr) => {
    // console.log(item,index,arr);
} )

function printMe(item){
    // console.log(item);
}

// coding.forEach(printMe)

let myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "cpp",
        languageFileName: "c++"
    }
]

myCoding.forEach( (item) => {
    // console.log(item.languageName);
} )