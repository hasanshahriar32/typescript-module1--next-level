const searchName = (value: string) => {
  if (value === null) {
    console.log("nothing to search");
  } else {
    console.log("searching");
  }
};
searchName(null);

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

function throwError(message: string): never {
  throw new Error(message);
}
throwError("error 403");
