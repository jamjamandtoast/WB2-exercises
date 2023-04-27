var a = 3;
var b = 4;
var c = 5;

// Find the smallest of the three numbers
var smallest = a;
if (b < smallest) {
  smallest = b;
}
if (c < smallest) {
  smallest = c;
}

// Find the largest of the three numbers
var largest = a;
if (b > largest) {
  largest = b;
}
if (c > largest) {
  largest = c;
}

// Display the results
console.log("The smallest of the three numbers is: " + smallest);
console.log("The largest of the three numbers is: " + largest);
