let car = {
    name: "Tata",
    weight: "500kg",
    highSpeed: "2220km/h",
    start: function(){
        console.log("Now this car is started.");
        this.stop()
    },
    stop: function(){
        console.log("Now this car is stoped.");
    },
}

console.log(car.name);
console.log(car.highSpeed);
console.log(car.start());