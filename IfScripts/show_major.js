var studentMajor;
var studentName = "Betty";
var buildingLocation = "science";
var roomNumber = 310;

console.log("Name: " + studentName);

if (studentMajor) {
  console.log("Major: " + studentMajor);
  if (studentMajor === "BIOL") {
    console.log("Department office is located in the " + buildingLocation + " building, room " + roomNumber);
  } else {
    console.log("Department office location is unknown for this major.");
  }
} else {
  console.log("Major: unknown");
  console.log("Advising location: nothing");
}
