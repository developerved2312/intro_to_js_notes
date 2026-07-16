fill(255,0,0);
// var car1 = {
//   brand:"BMW",
//   model:"M5",
//   colour:"black"
// };

// var car2 = {
//   brand:"Mercedes",
//   model:"F10",
//   colour:"yellow"
// };

// var car3 = {
//   brand:"Ferrari",
//   model:"Ferrari10",
//   colour:"red"
// };

// CONSTRUCTOR -generalized/common object layout or template
var carDetails = function(brand,model,colour) {
    this.brand = brand;
    this.model = model;
    this.colour = colour;
};

// object creation constructor se
// new ka matlab naya object jo ham bana rahe hai
var car1 = new carDetails("BMW","M5","black");
var car2 = new carDetails("Mercedes","F10","yellow");
var car3 = new carDetails("Ferrari","Ferrari10","red");

text(car1.brand,100,200);
text(car2.model,150,210);
