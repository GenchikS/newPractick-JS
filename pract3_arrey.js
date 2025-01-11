const arr = ["Genadii", "Svetlana", "Roman", "Yulia", "Mihail", "Kamila", "Petro"];

const arrZero = arr[0];
console.log("arrZero = ", arrZero);
console.log("arr[1] = ", arr[1]);


function nameCorrect(name) {
    arr[1] = name;
    return arr[1]
}
nameCorrect("Gennadii_2")
console.log("arr[1] = ", arr[1]);


function testLenght() {
    return arr.length;
}
console.log("arr.lenght", arr.length);

function nameCorrect(name) {
  arr[1] = name;
  return arr[1];
}
nameCorrect("Gennadii_3");
console.log("arr[1] = ", arr[1]);


function testArr() {
    // console.log("testArr", arr)
    return arr;
}
console.log("testArr(arr)", testArr(arr));


function testLastName(){
    // console.log("arr.lenght", arr[arr.length - 1]);
    return arr[arr.length - 1];
}
console.log("testLastName(arr)", testLastName(arr));



