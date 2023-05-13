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

// literal type: if you wanna use a specific type with specific value

const user2: {
  name: "hasan";
} = {
  name: "hasan",
};
