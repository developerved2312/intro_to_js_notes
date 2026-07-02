var animals = ["cat", "dog", "cow"];
var animalnum = 0;
while(animalnum < animals.length) {
   fill(255,10,0);
   text(animals[animalnum], 0, 40+animalnum*40);
   animalnum++;
}
