# to start

### for starting code, run

npm run start

### for building, run

npm run build

# more info

# 2. Explore Basic TS types

## Installation ts, nvm & ts-node-dev

\*\* install node accordingly

### install node version manager to change node version and use according to the usage

[Node Version Manager – nvm Install Guide](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/)

[https://github.com/coreybutler/nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases)

after install nvm , to see the nvm version

```jsx
nvm --version
```

to see the installed node js version

```jsx
nvm list
```

to switch to any listed node js version

```jsx
nvm use 18.16.0
```

### install tsc

first, look whether it is already installed or not

```jsx
tsc --v
```

if not installed, installed using following command

```jsx
npm i -g typescript
```

[tsc : File C:\Program Files\nodejs\tsc.ps1 cannot be loaded because running scripts is disabled on this system](https://stackoverflow.com/questions/62572523/tsc-file-c-program-files-nodejs-tsc-ps1-cannot-be-loaded-because-running-scri)

### first code in ts

first write some code in ts

```tsx
const course: string = "next level course";
console.log(course);
```

if now we give the command in shell:

```jsx
tsc ./index.ts
```

then the tsc package will create a new index.js file according to the index.tsc file

like:

```jsx
var course = "next level course";
console.log(course);
```

then we can run it using node

n.b: we can’t run ts file using node

## install configuration file of ts

```jsx
tsc --init
```

next run following script to install package.json

```jsx
npm init -y
```

now, create nodemon dependency to run the file as a whole

```jsx
npm i -D nodemon
```

```jsx
npm i
npm start
```

now , every time we change the ts file to js using the command tsc index.ts the index.js file will be generated and due to the changes to index.js , the code will be executed automatically

now there is a shortcut to convert the index.js file automatically into js

the package is needed is

[npm: ts-node-dev](https://www.npmjs.com/package/ts-node-dev)

```jsx
npm i ts-node-dev
```

now at package.json , add this script and skip the nodemon installation

```jsx
"start": "ts-node-dev --respawn --transpile-only server.ts",
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7c94aed5-7eaa-4268-8ba6-ce3aaf7ab462/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4b08c19f-1c67-4c28-a25a-7f73f71d39d3/Untitled.png)

after editing the tsconfig file accordingly, if we create any file under src folder and give a command tsc then, a new file at dist folder will be created compiled and with .js extension

```json
"scripts": {
    "start": "ts-node-dev --respawn --transpile-only --exit-child --watch src ./src/index.ts",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

# Primitive types in typescript

basic types in ts

same primitive type as js

- string
- number
- boolean
- null
- undefined

### explicit type declaration

if we declare the type of const at one type but the value to another type, then it will give error

### implicit type declaration

if we don’t declare the type while declaring the value, then the tsc compiler automatically guess the type. it is implicit type declaration and looks like normal js declaration.

### any type (declaration)

it is recommended to include the type of the variable:

like,

```jsx
let data: string;
//after that , we can assign the value later
```

but if it is not possible to know the type beforehand, then we can use any type declaration like the following

```tsx
//type: any
let data;
data = {
  name: "John",
  age: 25,
  address: "New York",
};
console.log(typeof data);
data = 123;
console.log(typeof data);
data = "hi hasan";
console.log(typeof data);
```

# Array and tuples

```tsx
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
const couple2 = ["abmir", 54];
couple2[0] = 23;
console.log(couple2);
//we can redeclare another type of entry inside of a implicit type but not in explicit type
```

# Object, literal types, optional types

# Object, literal types, optional types

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c585e6c8-fb8e-433c-b8da-9fe4186f72ad/Untitled.png)

```tsx
console.log("hello object");

const user = {
  name: "hasan",
  age: 18,
  address: "beijing",
  isMarried: true,
  wife: "bibiana",
};

const user1: {
  name: string;
  age: number;
  address: string;
  isMarried: boolean;
  wife?: string;
  //here ?: syntax is a optional syntax which shows that this might be a string or undefined (not present)
} = {
  name: "hasans",
  age: 18,
  address: "beijing",
  isMarried: true,
  wife: "bibi",
};
```

intersection at object: optional chaining at

### literal type

```tsx
// literal type: if you wanna use a specific type with specific value

const user2: {
  name: "hasan";
} = {
  name: "hasan",
};
```

read only property

```tsx
const user3: {
  readonly name: string;
} = {
  name: "hasan",
};

console.log(user3);
//we cant't reassign the value of user3 because it is read only
//user3.name = 'fa'
```

# Function in TS

Normal Function

Before working with typescript function use `"noImplicitAny": true,` into `tsconfig.json` file. it will gives errors if you not specify any type in the function parameter. and if you set that value to `false` then the editor don’t give any error the code working as a simple javascript code not typescript.

```tsx
// Normal Function
function add(num1: number, num2: number): number {
  console.log(num1 + num2);
  return num1 + num2;
}
add(2, 5);

// Arrow Function
//    fn_name = (param:type  , param:type  ): return_type => fn_body
const welcome = (fName: string, lName: string): string =>
  `Welcome ${fName} ${lName}`;
console.log(welcome("Masud", "Rana"));

// callback function
const makeSquire = [1, 2, 4];
const newArr = makeSquire.map((item: number) => item * item);

// When a function use inside a object it's called Method.
const person: {
  name: string;
  balance: number;
  addBalance(money: number): number;
} = {
  name: "Rana",
  balance: 5,
  addBalance(money: number) {
    return this.balance + money;
  },
};
```

```tsx
//normal function

function add(num1, num2) {
  return num1 + num2;
}

console.log(add(1, 434));

// here the params types are not declared explicitly, so these are called any type
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/62184372-cbd1-4bd4-aac2-5b65f99ad2c1/Untitled.png)

changing this settings will let the typescript handle the error during code. and show no error at js like function declaration

```tsx
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
```

## Spread, rest, default parameters, and destructuring

```tsx
// default parameter

const addDefault = (num1: number, num2: number = 10): number => num1 + num2;
// the second parameter should be used as default. using first params as default will return error
console.log(addDefault(9));
```

## spread operator

```tsx
// spread opertor

const hobbies = ["sports", "cooking"];
const activeHobbies = ["hiking"];

activeHobbies.push(...hobbies);

const myFriends = ["hasan", "sakib", "mushfik", "tamim"];

const newFriend = ["mustafiz"];
myFriends.push(...newFriend);
console.log(myFriends);
```

## rest operator

```tsx
// rest operator

const greetFriend = (friend1: string, friend2: string, friend3: string) => {
  console.log(`Hi ${friend1}, ${friend2}, ${friend3}`);
};

const friend: string[] = ["hasan", "sakib", "mushfik"];

greetFriend(...friend);
```

```tsx
// another better way to do so

const greetFriend2 = (...friend: string[]): void => {
  // console.log(friend);
  friend.forEach((element) => {
    console.log(` hi ${element}`);
  });
};
greetFriend2(...friend);
```

```tsx
// array and object destructure

const [bestFriends] = myFriends;
console.log(bestFriends);

const myBestFriend = { fullname: "bashar", age: 12 };
console.log(myBestFriend);

const { fullname } = myBestFriend;
console.log(fullname);
```

### alias

```tsx
type CrushType = {
  name: string;
  age: number;
  profession: string;
  add: string;
};
const crush1: CrushType = {
  name: "hasan",
  age: 23,
  profession: "student",
  add: "bd",
};
const crush2: CrushType = {
  name: "nobab",
  age: 23,
  profession: "student",
  add: "bd",
};

type CrushMarriedType = boolean;
const isCrushMarrid: CrushMarriedType = false;

type CourseNameType = string;
const corseName: CourseNameType = "next level web development";
```

```tsx
// we can also declare alias for function
type OperationType = (x: number, Y: number) => number;
const calculate = (
  number1: number,
  number2: number,
  operation: OperationType
): number => {
  return operation(number1, number2);
};
console.log(calculate(5, 3, (x, y) => x + y));
console.log(calculate(5, 3, (x, y) => x - y));
```

## Union - intersection

```tsx
type NubeDeveloper = {
  name: string;
};
type JuniorDeveloper = NubeDeveloper & {
  expertise: string;
  experience: number;
};

// union
const NewDeveloper: NubeDeveloper | JuniorDeveloper = {
  name: "hasan",
  expertise: "mern",
  experience: 2,
};
enum level {
  junior = "junior",
  senior = "senior",
}
type nextLevelDeveloper = JuniorDeveloper & {
  leaderShipExperience: number;
  level: "junior" | "senior";
};
// intersection
const developer: nextLevelDeveloper = {
  name: "next vai",
  experience: 5,
  expertise: "typescript",
  leaderShipExperience: 1,
  level: "junior",
  //   level: level.junior,
};

console.log(developer);
```

## nullable, string, never

by default we can’t send null in place of string
but if we wanna do that something like this like at doing at javaScript

```tsx
const searchName = (value: string) => {
  if (value === null) {
    console.log("nothing to search");
  } else {
    console.log("searching");
  }
};
searchName(null);
```

we can edit the tsconfig file to edit the strict check of null to false to let us pass null in the type of string

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b9f7546b-82f4-4c59-97e7-663e7bfb539a/Untitled.png)

unknown type

```tsx
// km/h --> ms/h
const getMyCarSpeed = (speed: unknown) => {
  if (typeof speed === "number") {
    const convertedSpeed = (speed * 10) / 3600;
    console.log(`my speed is ${convertedSpeed}`);
  }
  if (typeof speed === "string") {
    const value = speed.split(" ");
    const convertedSpeed = (parseFloat(value[0]) * 10) / 3600;
    console.log(`my speed is ${convertedSpeed}`);
  } else {
    console.log("there is wrong type");
  }
};
// getMyCarSpeed(10);
getMyCarSpeed("10 km/h");
```

nullable

```tsx
const searchName = (value: string) => {
  if (value === null) {
    console.log("nothing to search");
  } else {
    console.log("searching");
  }
};
searchName(null);
```

never type

```tsx
function throwError(message: string): never {
  throw new Error(message);
}
throwError("error 403");
```

# operators

```tsx
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
```

[TypeScript](https://www.notion.so/TypeScript-0f20bd4116ab467bb0232d7afa1d5bc5)

# Collected Note

# Module-02

---

## **2-1: Installation typescript, nvm & ts-node-dev**

---

Click Here to see: [NVM install command for MacOS](https://dev.to/httpjunkie/setup-node-version-manager-nvm-on-mac-m1-7kl?fbclid=IwAR3RL9Qxl5a-ZdzhZIP427DSCvwC3sXVrSdu-wEk-zbwYlSDO3Mosoaxzzk)

### TypeScript Install and run

TS File can’t run by default so, we need to compile first `.ts` file to a `.js` file and then run that `.js` file to see the output. for converting the `.ts` file into the `.js` file we need to install TypeScript Compiler in short TSC.

For installing TypeScript Compiler:

```bash
npm install -g typescript
tsc --v
```

then we need to compile the following command:

```bash
tsc index.ts
```

then we can run that `.js` file using this command:

```bash
node index.js
```

### Overcome this lengthy process:

at first, we need to create a node application that includes the `node_module` folder. also need to install `nodemon` for automatically re-rendering the node server if anything changes.

```bash
npm init -y

# Install nodemon globally on your machine
npm install -g nodemon
```

then need to config the `package.json` file. add inside `“scripts”` section:

```json
"scripts": {
		"start": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

now, we can use `npm start` command to see the output of the javascript file. don’t need to use `node index.js` command every time.

but still, we have a problem because if any change happens in the `.ts` file then need to compile it to the `.js` file. always we need to open two terminals:

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c4abbacf-492a-489b-8064-95a10c30d4b9/Untitled.png)

1. for `npm start` or, `nodemon index.js` command.
2. compile typescript file into javascript file using `tsc index.js` command.

To fix this issue try **Typescript Node Dev**.

### Final & Most Easy Way: to run `.ts` file

> TypeScript Node Dev Install Command:
>
> ```bash
> npm i ts-node-dev --save-dev
> ```
>
> after install need to config the `package.json` file. add inside `“scripts”` section and no longer need to use `nodemon`.
>
> ```json
> "scripts": {
> 		"start": "ts-node-dev --respawn --transpile-only index.ts",
>     "test": "echo \"Error: no test specified\" && exit 1"
>   },
> ```
>
> ```bash
> tsc --init
> ```
>
> it is used to compile `.ts` files to the `.js` file automatically by running this command.
>
> ```bash
> npm start
> ```
>
> using the above command we can run `index.ts` file very easily and when any changes happen it automatically run that code and show the output.
>
> now, if we want to separate all `.ts` and `.js` files into a separate folder.
>
> for example, we want to put all of `.ts` files into the `scr` folder, and after compiling all `.js` files automatically generate into the `dist` folder. so, we need to configure `tsconfig.json` file.
>
> ```json
> /* search rootDir then, uncomment that and write the scr folder path.*/
> "rootDir": "./src",
> /* search outDir then, uncomment that and write the dist folder path.*/
> "outDir": "./dist",
> ```
>
> if you getting error
>
> 'rootDir' is expected to contain all source files.
> The file is in the program because:
> Matched by default include pattern '\*_/_'
>
> Found 1 error.
>
> use this:
>
> ```json
> /* search rootDir then, uncomment that and write the scr folder path.*/
> "rootDir": "src",
> /* search outDir then, uncomment that and write the dist folder path.*/
> "outDir": "./dist",
> ```
>
> now use just one command to compile all `.ts` files to `.js` files using `tsc` command.
>
> ```bash
> tsc
> ```
>
> see the output automatically `npm start` but it's not working because we don't have `index.ts` file in the root dir.
>
> we can run the command `nodemon dist/index.js` to watch the changes of the `.js` file and make changes inside of the `index.ts` file then just run the command `tsc`. it automatically shows the output.
>
> now if you want to run `.ts` file simply run this command but it’s not automatically watch.
>
> ```bash
> npx ts-node-dev scr/index.ts
> ```
>
> for automatically watch that file need to add an extra flag.
>
> ```bash
> npx ts-node-dev --respawn scr/index.ts
> ```

## **2-2 Primitive types in typescriptPreviousNext**

---

### Explicit Type

```tsx
/*both are string type, you can't assign anything without string*/
let name: string = "Rana";
const username: string = "swdrana";

/*number type*/
var roll: number = 1;

/*boolen type*/
let isStudent: boolean = true;
```

### Implicit Type

```tsx
/*it's automatically detect as string type, you can't assign anything without string*/
let name = "Rana";
const username = "swdrana";

/*number type*/
var roll = 1;

/*boolen type*/
let isStudent = true;
```

### Any Type

```tsx
/* not recommend */
let name;
name = 'Rana';
name = '李小雨'

/* recommended */
let universityName = undefined;
universityName = '南京邮电大学， 南京，中国.'；
universityName = 'Nanjing University of Posts & Telecommunication, Nanjing, China.'；
universityName = 123

/* but it's not any type if you use const keyword */
const location = undefined;
/* location = 'China' */ /* invalid */
```

## \***\*2-3: Array and Tuples in typescript\*\***

---

Array is one of the Reference Type in TypeScript.

```tsx
/* both are sting array you can assign or push any other types */
let studentName: string[] = ["Rana", "Zaman", "Masud"];
let studentName = ["Rana", "Zaman", "Masud"];

/* both are sting tuples you can assign or push any other types also maintain the order of the types. */
let studentInfo: [number, string] = [01, "Rana"];
studentInfo: [number, string] = [02, "Zaman"];
studentInfo: [number, string] = [03, "Masud"];
```

## \***\*2-4: Object, Literal Types and Optional types\*\***

---

<!-- ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c585e6c8-fb8e-433c-b8da-9fe4186f72ad/Untitled.png) -->

## \***\*2-5: Functions in Typescript\*\***

---

Normal Function

Before working with typescript function use `"noImplicitAny": true,` into `tsconfig.json` file. it will gives errors if you not specify any type in the function parameter. and if you set that value to `false` then the editor don’t give any error the code working as a simple javascript code not typescript.

```tsx
// Normal Function
function add(num1: number, num2: number): number {
  console.log(num1 + num2);
  return num1 + num2;
}
add(2, 5);

// Arrow Function
//    fn_name = (param:type  , param:type  ): return_type => fn_body
const welcome = (fName: string, lName: string): string =>
  `Welcome ${fName} ${lName}`;
console.log(welcome("Masud", "Rana"));

// callback function
const makeSquire = [1, 2, 4];
const newArr = makeSquire.map((item: number) => item * item);

// When a function use inside a object it's called Method.
const person: {
  name: string;
  balance: number;
  addBalance(money: number): number;
} = {
  name: "Rana",
  balance: 5,
  addBalance(money: number) {
    return this.balance + money;
  },
};
```

## 2-6: Spread, Rest, Default Parameters and Destructuring

---

### Default Parameters

can't use default parameter at first element or parameter.

```bash
function add(num1: number, num2: number = 10): number {
    console.log(num1 + num2);
    return num1 + num2;
  }
  add(5);
```

### Spread | Destructuring

same as javascript.

```tsx
// Destructuring
const myFriend = ["a", "b", "c"];
const newFriend = ["d", "e", "f"];

myFriend.push(...newFriend);
console.log(myFriend);
```

### rest

```tsx
// rest (it's !destructuring) [we can called it's dynamic parameter]
const addNum = (...nums: number[]): void => {
  nums.forEach((num, index) => console.log(`nums[${index}] = ${num}`));
};
addNum(1, 2, 4, 5);
```

### alias

```tsx
const bestFriend = {
  fullName: "Book",
  age: 1,
};
const { fullName: string } = bestFriend; //here string is not type it's alias.
console.log(string);
console.log({ string });
```

## \***\*2-7: Type alias and optional types\*\***

---

```tsx
//object type alias
type UserInfo = {
  name: string;
  email: string;
  address?: string;
  age?: number;
  phone: number;
};
const user1: UserInfo = {
  name: "Rana",
  email: "xxx@yyy.zzz",
  address: "BD",
  age: 25,
  phone: 1190,
};
const user2: UserInfo = {
  name: "Masud",
  email: "mmm@nnn.zzz",
  phone: 190,
};

// function type alias
type OperationType = (x: number, y: number) => number;
const calculate = (num1: number, num2: number, operation: OperationType) => {
  console.log(operation(num1, num2));
  return operation(num1, num2);
};
calculate(1, 2, (a, b) => a + b);
calculate(1, 2, (a, b) => a - b);
calculate(1, 2, (a, b) => a * b);
```

## \***\*2-8: Union, Intersection and Enum Types\*\***

---

```tsx
// Union Type
type NoobDevloper = {
  name: string;
};
type JuniourDevloper = {
  name: string;
  expertise: string;
  experience: number;
};
const newDeveloper: NoobDevloper | JuniourDevloper = {
  name: "Rana",
};
const newDeveloper2: NoobDevloper | JuniourDevloper = {
  name: "Rana",
  expertise: "JavaScript",
  experience: 3,
};

// Intersection Type
type NoobDev = {
  name: string;
};
type JuniourDev = NoobDev & {
  expertise: string;
  experience: number;
};
const newDev: NoobDevloper | JuniourDevloper = {
  name: "Rana",
};
const newDev2: NoobDevloper | JuniourDevloper = {
  name: "Rana",
  expertise: "JavaScript",
  experience: 3,
};

// Intersection Type (Recommended)
type NextLevelDev1 = JuniourDev & {
  leadershipExperience: number;
  level: "Junior" | "Mid" | "Senior";
};
const bestDev1: NextLevelDev1 = {
  name: "Masud",
  expertise: "TypeScript",
  experience: 5,
  leadershipExperience: 4,
  level: "Mid",
};

// enum
enum Level {
  junior = "junior",
  mid = "mid",
  senior = "senior",
}

// Intersection Type + enum
type NextLevelDev = JuniourDev & {
  leadershipExperience: number;
  level: Level;
};
const bestDev: NextLevelDev = {
  name: "Masud",
  expertise: "TypeScript",
  experience: 5,
  leadershipExperience: 4,
  level: Level.mid,
};
// but enum is not recommended.
```

### **2-9: Null, Unknown and Never TypesPreviousNext**

---

[https://www.notion.so/swdrana](https://www.notion.so/swdrana)
