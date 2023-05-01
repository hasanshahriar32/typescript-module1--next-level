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
