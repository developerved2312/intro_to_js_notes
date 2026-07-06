// var recipeTitle = "Bread";
// var recipeServings = 2;
// var recipeIngredients = ["Flour", "Water"];

var recipe = {
    title:"bread",
    servings:2,
    ingredients:["flour","water"]
};

fill(26, 26, 26);
textSize(20);
text(recipe.title, 10, 23);
text("Serves: " + recipe.servings, 10, 55);
text("Ingredients: " + recipe.ingredients, 10, 85);
// text(recipeTitle, 10, 23);
// text("Serves: " + recipeServings, 10, 55);
// text("Ingredients: " + recipeIngredients, 10, 85);
