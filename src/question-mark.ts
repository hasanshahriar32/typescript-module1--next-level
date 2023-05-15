// ternary operator

const age: number = 22;
if (age >= 18) {
  console.log("you can vote");
} else {
  console.log("you can't vote");
}

// use ternary operator

age >= 18 ? console.log("you can vote") : console.log("you can't vote");

// nullish coalescing operator

// null and undefined

const isAuthenticatedUser = null;

const userName = isAuthenticatedUser ?? "guest";
// this double question mark is called nullish operator
// work: it check whether the isAuthenticatedUser has any value or not. if not , it sets another default value like 'guest'
console.log(userName);
