console.log("hello object");

const user = {
  name: "hasan",
  age: 18,
  address: "beijing",
  isMarried: true,
  wife: "bibi",
};

const user1: {
  name: string;
  age: number;
  address: string;
  isMarried: boolean;
  wife?: string;
  //here ?: syntax is a optional syntax which shows that this might be a string or undefined (not present)
} = {
  name: "hasan",
  age: 18,
  address: "beijing",
  isMarried: true,
  wife: "bibi",
};
