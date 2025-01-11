console.log(`hello`);

let username;
console.log(typeof username); // виведе "undefined"

let status1 = null;
console.log(typeof status1); // виведе "object"

let a = 5;
let b = 4;
a += 3;
b += a;
console.log(`a`, a);
console.log(`b`, b);

const userName = "Gennadiy"
console.log(userName.length)
console.log(userName[0]);
console.log(userName[userName.length-1]);

const a1 = "";
const a2 = 0;
console.log(`a1 == a2`, a1 == a2); // true

console.log("5" + 5); // 55