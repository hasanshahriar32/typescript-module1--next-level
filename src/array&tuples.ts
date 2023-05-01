console.log("hi");

//array of strings
const names: string[] = ["abul", "kabul"];
console.log(typeof names);

//array of numbers
const numbers: number[] = [54, 87];
numbers[8] = 33;
console.log(numbers);
console.log(typeof numbers);

// tuples type (hybrid types of array)

//explicit type
const couple: [string, number] = ["abmir", 54];
couple.push("d");
console.log(typeof couple);
console.log(couple);

//implicit type
const couple2 = ["abmihr", 54];
couple2[0] = 23;
console.log(couple2);
//we can redeclare another type of entry inside of a implicit type but not in explicit type
