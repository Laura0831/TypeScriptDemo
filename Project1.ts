//String variable declaration  
let Lname: String;
Lname = "laura"; 
let newName = Lname.toUpperCase();
console.log(Lname);
console.log(newName);



//Number variable declaration
let age: number;
age = 30.5
console.log(age);

//Array variable declaration
let nums: string[];
let nums1: Array<number>;

nums = ["hello", "beautiful", "world"];
nums1 = [5,9,5];

let result = nums.filter((item) => {
    return item.length > 5;
});
console.log(result);

//function in typescript
function addNumbers(num1: number, num2: number): number {
    return num1 + num2;
}

console.log(addNumbers(23,17));


//rest parameters function
function getIterms<Type>(items: Type[]): Type[]{
    return new Array<Type>().concat(items);
}

let numbers = getIterms<number>([1,3,5,7,9]);

console.log(numbers);
