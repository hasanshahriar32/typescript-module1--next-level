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
