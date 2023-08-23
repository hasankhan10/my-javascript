// Immediately Invoked Function Execution.
(function (name){
    console.log(`hi, ${name} , how are you?`);

});
// ("mehedi")

( (num1,num2) => {
    console.log(num1*num2);  // the rules is ( here wil be function)  (here will be call)
} );

(  (getName) => {
    console.log(`good morning ${getName}`);
}  )
// ("mehedi")

// IIFE is used for to get free from global variable


const access = (function(){
    var privetVal = 12;
     
    return{
        getter: function(){
            console.log(privetVal);
        },
        setter: function(val){
            privetVal = val
        } 
    }

})()

// console.log(access.setter(14));
// console.log(access.getter());



