// *// 
// var numKids = 12;
//   var price;
//   price = numKids * 9.95;
// if (numKids >= 6) { 
//     price = price * .9;
// }
//   console.log(price);
// *\\

// price is $9.95/kid
// a 10% discount









var payRate = 17.30;

var hoursWorked = 45;

var overTime = (hoursWorked - 40);

var grossOverTime = grossNormal + (overTime * payRate * 1.5);

var grossNormal = (payRate * hoursWorked);

if (hoursWorked > 40){
    console.log(grossOverTime);
}
else {
    console.log(grossNormal);
}


var payRate = 17.30;

var hoursWorked = 20;
var regHours = 40;

var overTime = (hoursWorked - 40);

var grossNormal = (payRate * regHours);

var grossOverTime = grossNormal + (overTime * payRate * 1.5);

if (hoursWorked > 40){
    console.log(grossOverTime);
}
else {
    console.log(grossNormal);
}
