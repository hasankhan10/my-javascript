const emptyObject = {}
if (Object.keys(emptyObject).length === 0) {
    // console.log(`Don't have user email.`); 
}
else{
    // console.log(`not at all`); 
}

// falsy value :- false,0,-0,BigInt 0n, "",null, undefined, NaN

// truthhy valu:- "0","false",[],{},function(){}


// nulish coalesing Oparator (??): null undifined

// let val1;
// val1 = 10 ?? 15


// console.log(val1);

// Tarnary oparator 

// condition ? true : false    :-    syntax || if else sort syntax

let teaPrice = 100
teaPrice >=80 ? console.log(`hi  everyone`) : console.log(`bye everyone.`);
