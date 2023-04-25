var peopleTour = 20;
var seats = 15;
var vanCost = 250.00;
var tourDays = 10;

var seatsNeeded = Math.ceil(peopleTour - seats);
var cost = Math.ceil(vanCost * tourDays);
var perPerson = Math.ceil(cost / peopleTour);

console.log(seatsNeeded);
console.log(cost);
console.log(perPerson);



