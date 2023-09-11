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
// let num1 = (200,300,400,500);
// function caluclatingValues(...num1){
//     return num1
// }
// console.log(num1);
/*output:500*/
/*TYPE2:*/
// function calculateValues(...num2){
//     return num2
// } 
// console.log(calculateValues(600,800,1000,1500));
/*Output:[ 600, 800, 1000, 1500 ]*/
//---->Nested function: Functions inside the function is nested Function.
/*ARROW FUNCTIONS AND THIS KEYWORD*/
// const cam = {
//     brand: "Canon",
//     price: 62000,
//     welcomeMessage: function() {
//         console.log(`${this.brand}, best picture quality`);
//     }
// };

// Calling the welcomeMessage function
// cam.welcomeMessage();
/*--->IN THE ARROW FUNCTION WE HAVE TWO TYPES THE CODE WE WRITE
 TYPE1:
 HERE WE NEED TO WRITE THE RETURN TO EXECUTE THE CODE*/
// const sub=(part1,part2)=>{
//     return(part1-part2)
// } 
// console.log(sub(10,4));
//IF THE CODE WRITE IN THE CURL BRACKETS{}, MOST NEED TO WRITE THE RETURN VALUE
//TYPE2:THIS IS IMPLECIT IS WHERE WE CAN WRITE THE CODE BY USING THE 
const add =(num1,num2)=>(num1+num2)
console.log(add(4,8))
//-----> In this if we want to write the object we can use curl brackets
const addTwo= (user,course)=>({user:"prashanth",course:"js"})
console.log(addTwo());
