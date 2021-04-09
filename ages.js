const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// get an array of 21 and older

// 000000000000000000000000000000000000000000000

//with a for loop its the old way

//const canDrink = [];
//
//for (let i = 0; i < ages.length; i++) {
//  if (ages[i] >= 21) {
//    canDrink.push(ages[i]);
//  }
//}
//
//console.log(canDrink);

// 000000000000000000000000000000000000000000000

// with filter long way

//const canDrink = ages.filter (function(age){
// if(age >= 21){
//     return true
// }
//})
//console.log(canDrink)
// 000000000000000000000000000000000000000000000

// SHORT WAY 
//const canDrink = ages.filter(age => {
//    if (age >= 21 ){
//        return true
//    }
//}
////console.log(canDrink)


// 000000000000000000000000000000000000000000000
// SUPER SHORT WAY 

//const canDrink = ages.filter(age => age >= 21)
//console.log(canDrink)
