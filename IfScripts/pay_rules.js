

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
