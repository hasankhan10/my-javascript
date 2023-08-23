const number = [1,2,3,4,5,6,7,8]

const newNumber = number.filter( (num) => (num > 4) ) // filter( function that return conditioanal result)
// console.log(newNumber);

let foreach = []
number.forEach( (num) => {
    if (num > 4) {
        foreach.push(num)
    }
} )

// console.log(foreach);

let myBook =[
    {
        name: "book1",
        page: 100,
        publish: 1990,
        writer: "john"
    },
    {
        name: "book2",
        page: 300,
        publish: 1995,
        writer: "hasan"
    },
    {
        name: "book3",
        page: 234,
        publish: 2000,
        writer: "khan"
    },
    {
        name: "book4",
        page: 400,
        publish: 2001,
        writer: "mehedi"
    },
    {
        name: "book5",
        page: 820,
        publish: 2005,
        writer: "asfak"
    },
    {
        name: "book6",
        page: 652,
        publish: 2010,
        writer: "farhad"
    }

]

myBook.forEach( (bk) => {
    // console.log(bk.name);
})
const filterBook = myBook.filter( (bk) => (bk.publish > 1995))
// console.log(filterBook);






