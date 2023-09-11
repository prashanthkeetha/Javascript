// --> Function is a block where we write the code and execute.
// let number1=4;
// let number2=5
// function addtTwoNumbers(number1, number2) {
//     console.log(number1+number2);
// }
// const output = addtTwoNumbers(4,5)
// console.log("Result:",output);//Result: undefined
// //to see the result in console with mention. 


/*type2: by using this type we can work on functions by using (return).

function learning(number3,number4){
    let number = number3 + number4
    return number
    //after the return keyword we cannot execute anything
}
const number = learning(10,12)
console.log("Result:", number)//output:Result: 22*/
//-->To store the varaibale in the function.
// function perfection(cricket){
//     return '${sachin} god of cricket'
// }
// console.log(perfection("sachin"))
/*In the functions by using the (rest operator(...)three dots) by using this, 
we get the input as with multiple digits we get output all the values at once. 
eg: 
-->TYPE1*/
let num1 = (200,300,400,500);
function caluclatingValues(...num1){
    return num1
}
console.log(num1);
/*output:500*/
/*TYPE2:*/
function calculateValues(...num2){
    return num2
} 
console.log(calculateValues(600,800,1000,1500));
/*Output:[ 600, 800, 1000, 1500 ]*/
//---->Nested function: Functions inside the function is nested Function.
/*ARROW FUNCTIONS AND THIS KEYWORD*/

