const age = 20;
const type = age >= 18 ? "adult" : "child";
console.log(type); // 'adult'


const fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("Apple selected");
    break;
  case "banana":
    console.log("Banana selected");
    break;
  case "orange":
    console.log("Orange selected");
    break;
  default:
    console.log("The fruit is unknown");
}


// Monday
// Tuesday
// Wednesday
// Thursday
// Friday
// Saturday
// Sunday
const day = "Tuesday";
// const day = "Sunday";
console.log(`working day`, day);

//  ефект провалювення
switch (day) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    console.log("This is a working day");
    break;
  case "Saturday":
  case "Sunday":
    console.log("It is a day off");
    break;
  default:
    console.log("Invalid");
}

let credit;
function getSubscriptionPrice(type) {
  switch (type) {
      case "starter":
        credit = 0;
        console.log(`starter`, credit);
      return credit;
      break;
      case "professional":
         credit = 20;
        console.log(`professional`, credit);
        return 20;
      break;
      case "organization":
           credit = 50;
        console.log(`organization`, credit);
        return 50;
      break;
    default:
      return "Invalid subscription type!";
  }
}

getSubscriptionPrice("starter");
// getSubscriptionPrice("professional");
getSubscriptionPrice("organization");

console.log("hello" && 5); // 5
console.log(5 && "hello"); // "hello"
console.log("mango" && "poly"); // "poly"
console.log("poly" && "mango"); // "mango"

console.log(false || null) // false || false = null
console.log(null || false);  // false || false = false
