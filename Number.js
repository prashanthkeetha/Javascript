// var number = "6+6";
// let number1 = 10+20;
// let digit = null;
// const number2 = 15+30;
// let valueInNumber = Number(number);
// console.log(typeof valueInNumber);//By using this command we can convert the values in the string to number
// console.log(valueInNumber);
// console.log(typeof number);
// console.log(typeof number1);
// console.log(typeof number2);
// console.log(typeof digit);
/*output:
number
NaN(Not a Number)
string
number
number
object*/
/*****************************Operations****************/
/*by using this negValue=-value we can convert the values into negative value*/
// let value = 3;
// let negValue = -value;
// console.log(typeof value);
// console.log(negValue);
/*By using strings in the numbers you cannot write the code
//Example:
let a = "1";
let b = 5;
let c = a+b;
console.log(c)
console.log("20"+ 10);
OUTPUT:
-------
15
2010
this is not the correct way to write the code*/
/*INCREMENTS:
-------------
1.POSTFIX INCREMENT: the increment operator increments and returns the value before incrementing
let x = 3;
let y = x++;
console.log(x);
output:
-------
x= 4;
y = 3
2.PREFIX INCREMENT:THE INCREMENT OPERATOR INCREMENTS AND RETURNS THE VALUE AFTER INCREMENTING
let arm = 10;
let leg = ++arm;
console.log(leg);
//OUTPUT:
11*/
/********************MEMORY TYPES**********************/
/*STACK MEMORY: IT is used by the primitive datatype
=>In the stack we will get the copy of the data which we changes.
EG:*/
//--
// let prashanth = "varma"
// let nani = prashanth
// nithin = "sai"
// console.log(nani);
// console.log(nithin);
/*HEAP MEMORY: IT is used by the Non-primitive datatypes
=> In the heap the data which chnages will change completely in the code*/
/*******Numbers and maths***********/
// const score = 400;
// console.log(score);
// const score1 = new Number(500)//new: This key word is used to crate an instance of user-defined object type that has a constructor function.
// console.log(score1);
// console.log(score.toString().length);//it is used to see the length of the string
// console.log(score.toFixed(1));//it is used to converts the number into point(.) notation
//.toPrecision is to round figure the number
//.toLocalString it conversts the number into readable format.
//eg: 100000 t0 1,00,000
/*OUTPUT:
400
[Number: 500]
3
400.0*/