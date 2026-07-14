var carList = [{
    brand: "BMW",
    model: "M5",
    colour: "black",
},    

{
    brand: "Ferrari",
    model: "F80",
    colour: "yellow"
},

 {
    brand: "Jaguar",
    model: "Fast Pace",
    colour: "red"
} ];    // ARRAY OF OBJECTS

fill(255, 18, 18);
text(carList[0].brand, 200,100);
// ARRAY
var ingredients = ["rice","vegetables","masala","oil"];
text(ingredients[2],150,100);


// OBJECT
var favcar = {
    brand: "mercedes",
    model: "M5",
    colour: "black",
};

text(favcar.brand, 110,200);
