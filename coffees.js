const coffees = require('./data/coffee.json')

//console.log("this is my list of coffees", coffees)

coffees.forEach(recipe =>{
    if(recipe.ingredients.includes("Milk") ||
       recipe.ingredients.includes("Cream") ||
       recipe.ingredients.includes("Steamed Milk") 
    ) {
      console.log(recipe.id, recipe.title)
    }
})