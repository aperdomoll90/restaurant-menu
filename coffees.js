const coffees = require('./data/coffee.json')
const coffees = require('./data/beer.json')

//console.log("this is my list of coffees", coffees)

exports.getCoffees = function (name) {
coffees.forEach(recipe =>{
    if(recipe.ingredients.includes("Milk") ||
       recipe.ingredients.includes("Cream") ||
       recipe.ingredients.includes("Steamed Milk") 
    ) {
      console.log(name,"Can't drink ",recipe.id, recipe.title)
    }
})
}

exports.getBeers =  (name) => {
  beers.forEach = (beerRecipe) => {
      if(beerRecipe.ratings.reviews >= 300 ) {
        console.log(name,'loves', beerRecipe.name, 'review',beerReview)
      }
  })
  }