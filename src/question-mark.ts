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

// nullish coalescing operator and ternary operator aren't same
// nullish operator takes the empty strings to true value but the ternary operator aren't
//e.g
const age1 = "";
const myAge1 = age1 ?? 18;
console.log({ myAge1 });
// output: 18
// e.g
const age2 = "";
const myAge = age2 ? age2 : 18;
console.log({ myAge });
// output: 18

type manush = {
  name: string;
  age: number;
  address: {
    city: "no city";
    country: "no country";
    home?: "";
  };
};

const person5: manush = {
  name: "sakib",
  age: 22,
  address: {
    city: "no city",
    country: "no country",
  },
};

const home = person5?.address?.home ?? "no home";
console.log(home);
