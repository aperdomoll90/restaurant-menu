const fetch = require('node-fetch')

let coffees = []
fetch('https://api.sampleapis.com/coffee/hot')
.then(response => response.json())
.then(data => {
  console.log(data)
  coffees = data
})
.catch(err => console.log('error fetching API', err))

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

// name this function get coffees and export it
exports.getCoffeesTitles = function(){
  const coffeeTitle = coffees.filter(item => item.title)
  //const coffeeTitle = coffees.filter(function(item){item.title})
  console.log('coffee name', coffeeTitle)
}
