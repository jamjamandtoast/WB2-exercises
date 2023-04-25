
var salary = 80000;
var Federaltaxes = 0.23;

var monthlySalary = ((salary * (1 - Federaltaxes)) / 12).toFixed(2);

console.log("Take home every month is " + monthlySalary);
