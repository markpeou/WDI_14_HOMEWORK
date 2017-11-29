// Name Prompt
var name = prompt("what is your name?");
console.log('Welcome ' +  name)

// The Vegan Test
var menu = prompt("Choose one of the following: steak, fruit salad, tofurkey, pork chops?")

if (menu == 'steak'|'pork chops'){
  console.log('Vegans Beware!')
}

else {
  console.log('This cuisine is vegan friendly!')
}
// The fortune teller
function tellFortune(jobTitle, geoLocation, partner, numKids) {
    var future = 'You will be a ' + jobTitle + ' in ' + geoLocation + ' and married to ' +
   partner + ' ' + ' with ' + numKids + ' kids.';
    console.log(future);
}

tellFortune('WEB DEVELOPMENT', 'Everywhere', 'not married', 30);



// The Age Calculator
var currentYear = 2017
var birthYear = 1987
var currentAge = currentYear - birthYear;
var otherAge = currentYear - birthYear - 1;
console.log("They are either " + currentAge + " or " + otherAge)

//The Lifetime Supply Calaculator
function calculateSupply() {
  var currentAge = 30;
  var maxAge = 50;
  var supply = 2;
  var total = (maxAge - currentAge) * supply * 365;
  console.log(total)
}

calculateSupply(); 
