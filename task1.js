//Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 


function reverseStr(str){
    return str.split("").reverse().join("");
}

const result = reverseStr("hello world");
console.log(result);