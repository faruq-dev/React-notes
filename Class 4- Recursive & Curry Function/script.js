// function myfunc () {
//     console.log("hello world");
//     myfunc()
// };

// myfunc()

function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(0));

function reverseString(str) {
    if (str === "") return "";
    return reverseString(str.substr(1)) + str.charAt(0);
}
console.log(reverseString("hello"));

function greet (greeting, name){
    return greeting + "," + name
}

const newGreet = greet("Hello", "Nahid");
console.log(newGreet);


function multiply (a){
    return function (b){
        return function (c){
            return function (d){
                return a*b*c*d - 10
            }
        }
    }
}

console.log(multiply(5)(5)(10)(10));