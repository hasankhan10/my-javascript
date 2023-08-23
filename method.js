// using map() function.

let mehedi = [1,2,3,4,5,6,7]

let hasan = mehedi.map( (num) => num * 10)  // first execute   // chaining mathode.
                  .map( (num) => num + 1)// second execute.
                  .filter( (num) => num > 11)  // third execute.

// console.log(hasan);

// using reduce() function.

const array = [1,2,3,4]

const totalArray = array.reduce( (acc,currval) => (acc + currval),0)

// console.log(totalArray);

// example

const shopingaCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
    
]

const totalPrice = shopingaCart.reduce( (initial,item) => {
    return initial + item.price
},0)

console.log(`Your total Price is: ${totalPrice}`);