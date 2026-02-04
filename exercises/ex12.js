/*
The town festival is tomorrow and the organizers have only just realized that they've booked two bakeries to cater desserts, but only have one kitchen available. Instead of just choosing one bakery, let's help them figure out a way to work together.

Both of the bakeries have a specialty, so they each have a stock of specific ingredients.

Lucky for the festival organizers, we've found a recipe book in the town library with TONS of fusion recipes, unfortunately it's thousands of pages long and we don't have much time. Let's write a function that helps determine which recipes match the ingredients that both bakeries have in stock.

Instruction
We need to complete a function called chooseRecipe(), which will receive three parameters: - An array of ingredients in stock at Bakery A - An array of ingredients in stock at Bakery B - An array of recipe objects. Each recipe has a name property(string) and an ingredient property(array)

We are limiting our search to two ingredient recipes. We want to find a recipe that utilizes one ingredient from Bakery A and one from Bakery B.

Our chooseRecipe() function should return the name of the correct recipe.

Note
There will always be a single correct answer, and you will NOT need to consider special cases. For example, you do NOT need to worry about cases where one bakery has BOTH the ingredients for a recipe.

Note
This one is a doozy! We might want to start by creating a helper function called ingredientCheck() that will take in one bakery at a time, along with the recipes.ingredients array to check if the given bakery possesses any of the ingredients from that recipe.

*/
const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  const hasIngredient = function (bakery, ingredient){
    return bakery.includes(ingredient);
  }

  for (const recipe of recipes){ 
    const firstIngredient = recipe.ingredients[0];
    const secondIngredient = recipe.ingredients[1];

    // either ingredient can come from either bakery: 
    const firstInASecondInB = hasIngredient(bakeryA, firstIngredient) && hasIngredient(bakeryB, secondIngredient);
    const firstInBSecondInA = hasIngredient(bakeryB, firstIngredient) && hasIngredient(bakeryA, secondIngredient);

    if ( firstInASecondInB || firstInBSecondInA){
      return recipe.name; 
    }
  }
};

/* 
    Space Complexity: O(1) ; C; Constant; 
    Time Complexity: 
      - O(R * (A+B)) where , A is size of BakeryA, B is size of BakeryB, and R is size of recipes. 

*/

let bakeryA = ["saffron", "eggs", "tomato paste", "coconut", "custard"];
let bakeryB = ["milk", "butter", "cream cheese"];
let recipes = [
  {
    name: "Coconut Sponge Cake",
    ingredients: ["coconut", "cake base"],
  },
  {
    name: "Persian Cheesecake",
    ingredients: ["saffron", "cream cheese"],
  },
  {
    name: "Custard Surprise",
    ingredients: ["custard", "ground beef"],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes)); //Persian Cheesecake

bakeryA = ["potatoes", "bay leaf", "raisins"];
bakeryB = ["red bean", "dijon mustard", "apples"];
recipes = [
  {
    name: "Potato Ganache",
    ingredients: ["potatoes", "chocolate"],
  },
  {
    name: "Sweet Fish",
    ingredients: ["anchovies", "honey"],
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ["dijon mustard", "raisins"],
  },
];

// console.log(chooseRecipe(bakeryA, bakeryB, recipes)); //Nima's Famous Dijon Raisins

module.exports = chooseRecipe;
