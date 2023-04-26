
/* until 10am = good morning
10am-4:59pm = good day!
5pm - 11:59pm = good evening!
we want to calculate for 23 hours 0-23  */



var hour = 23;
var greeting;

if (hour < 10) {
  greeting = "Good morning!";
} else if (hour < 17) {
  greeting = "Good day!";
} else {
  greeting = "Good evening!";
}

console.log(greeting);

