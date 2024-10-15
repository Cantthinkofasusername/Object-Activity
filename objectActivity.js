let car = {
    type: "SUV",
    model: "Toyota RAV4",
    color: "black"
};

console.log(typeof(car.type));

car.type = "Toyota";
console.log(car);

car.wheels = 4;
console.log(car);