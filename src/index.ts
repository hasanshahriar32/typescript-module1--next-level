const course: string = "next level website building course";
console.log(course);

// import "./basic_types";
// import "./array&tuples";
// import "./object";
// import "./function";
// import "./alias";
// import "./union-intersection";
// import "./nullable-unknown-never";
// import "./question-mark";
function genarateAdder(a:number): (b:number)=>number{
    return function(b:number){
        return a+b;
    }
}
const addTwo  = genarateAdder(2)
console.log(addTwo(3));
console.log(addTwo(5));