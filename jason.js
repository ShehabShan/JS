// const student = {
//   fullName: "Shehab Shan",
//   marks: 94.4,
//   printMarks: function () {
//     console.log("marks = ", this.marks);
//   },
// };

// let arr = ["apple", "mango", "banana"];
// console.log(arr);

// const employee = {
//   calcTax() {
//     console.log("tax rate is 10%");
//   },
// };

// const karanArjun1 = {
//   salary: 50000,
// };

// const karanArjun2 = {
//   salary: 50000,
// };

// const karanArjun3 = {
//   salary: 50000,
// };

// const karanArjun4 = {
//   salary: 50000,
// };

// const karanArjun5 = {
//   salary: 50000,
// };

// const karanArjun6 = {
//   salary: 50000,
// };


// karanArjun1.__proto__ = employee;
// karanArjun2.__proto__ = employee;
// karanArjun3.__proto__ = employee;
// karanArjun4.__proto__ = employee;
// karanArjun5.__proto__ = employee;
// karanArjun6.__proto__ = employee;


class tyotaCar {
    start() {
        console.log("start");
    }
    stop() {
        console.log("stop");
    }
    setBrand(brand) {
        this.brand = brand;
    }
}

let audi = new tyotaCar();
audi.setBrand("Audi car")
let royel = new tyotaCar();