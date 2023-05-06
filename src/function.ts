//normal function

function add(num1, num2) {
  return num1 + num2;
}

// console.log(add(1, 434));

// here the params types are not declared explicitly, so these are called any type
// add(" 2"+2)

// better way to do this using ts

function add1(num1: number, num2: number): number {
  return num1 + num2;
}

// console.log(add1(1, 434));

const addarrow = (num1: number, num2: number): number => num1 + num2;

const arr = [1, 4, 27];

const newArray = arr.map((elem: number) => elem * elem);

const person: {
  name: string;
  age: number;
  hobbies: string[];
  balance: number;
  addBalance: (money: number) => string;
} = {
  name: " hasan",
  age: 23,
  hobbies: ["sports", "cooking"],
  balance: 32131,
  addBalance(money: number): string {
    return `My new balance is : ${this.balance + money}`;
  },
};

const person2: {
  name: string;
  age: number;
  hobbies: string[];
  balance: number;
  addBalance: (money: number) => void;
} = {
  name: " hasan",
  age: 23,
  hobbies: ["sports", "cooking"],
  balance: 32131,
  addBalance(money: number): void {
    console.log(`My new balance is : ${this.balance + money}`);
  },
};

// default parameter

const addDefault = (num1: number, num2: number = 10): number => num1 + num2;
// the second parameter should be used as default. using first params as default will return error
console.log(addDefault(9));

// spread opertor

const hobbies = ["sports", "cooking"];
const activeHobbies = ["hiking"];

activeHobbies.push(...hobbies);

const myFriends = ["hasan", "sakib", "mushfik", "tamim"];

const newFriend = ["mustafiz"];
myFriends.push(...newFriend);
console.log(myFriends);

// rest parameter

const addRest = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addNumbers = addRest(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(addNumbers);

// rest operator

const greetFriend = (
  friend1: string,
  friend2: string,
  friend3: string
): void => {
  console.log(`Hi ${friend1}, ${friend2}, ${friend3}`);
};

const friend: string[] = ["hasan", "sakib", "mushfik"];

// greetFriend(...friend);

// another way to do so

const greetFriend2 = (...friend: string[]): void => {
  // console.log(friend);
  friend.forEach((element) => {
    console.log(` hi ${element}`);
  });
};
greetFriend2(...friend);
// add a new function
