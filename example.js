//BASICS...
console.log("hello")

//vars
let x=5;
console.log(typeof(x));

//arrays
const cars = [
    "BMW",
    "Audi",
    "benz"
]
console.log(cars)

//strings
let s1 = "hello"
let s2 = "world"
console.log(s1+" "+s2)

//comparisons
console.log(5>4)

//array merging and shifting
let arr1 = [1,2,3]
let arr2 = [4,5,6]
let arr3 = arr1.concat(arr2)
console.log(arr3)
arr3.shift()
console.log(arr3)

//functions
function fn1(x, y) {
    let res = x+y
    console.log(res)
}
fn1(100,200)

//another type of function
let myfunc = function(x,y) {
    let res = x+y
    console.log(res)
}   
myfunc(10,20)

//arrow function
let func3 = (x,y) => console.log(x*y)
func3(30,4)

//another function
function func4(x,y) {
    return x*y;
}
console.log(func4(10,5))

//nested function
function func5(x) {
    return function(y) {
        return x*y;
    }
}
let res = func5(6)
console.log(res(6))

//objects and methods
const obj = {
    name:"Ani",
    age:20,
    x:50,
    y:10,
    add:function() {
        return this.x + this.y;
    }
};
console.log(obj.add())
//dynamic text
const changeTextButton = document.getElementById('changeTextBtn');
const demoParagraph = document.getElementById('demo');
console.log(changeTextButton)
changeTextButton.addEventListener('click', function () {
  demoParagraph.innerText = 'Text has been changed!';
});