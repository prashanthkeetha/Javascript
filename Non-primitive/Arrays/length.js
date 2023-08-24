//Arrays
const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits);

let family = ["Apple", "Banana", "Grapes"];
console.log(family[0]);
console.log(family[1]);
console.log(family[2]);

console.log(family.length);

console.log(family);

const country = [];
country[5] = ["Telangana", "Jammu and Kashmir", "Punjab", "Himachal Pradesh","sikkim"];
console.log(country[5]);
console.log(country.length);

const team=['pm','tm','sd','jd'];
console.log(Object.keys(team));
//concat: It means used to merge two or more arrays it doesnot change the existing arrays
let array1 = ["how", "to","concat"+", "];
let array2 = [ "the","multiple","arrays","in","JS"+" " ];
let array3 = [ "working","on","the","process" ]
let concating = array1+array2.concat(array3);
console.log(concating.length);
//within:it copies the part of array in different location in same part.
let num=[1,2,3,4,5,120,450,222];
let num2=[1,2,3,4,5,222,444,567,288];
console.log(num.copyWithin(1,5,6));
console.log(num2.copyWithin(1,4,7));
//every:To check weather all elements in the array pass the test implemented by provided function(It returns in boolean).
let names = ["shimla", "gangtok", "chikmangalur", "wayanad"];
let places = names.every(function(name) {
    return name.length > 0;
});

if (places) {
    console.log("All names have values");
} else {
    console.log("Not all names have values");
}
console.log(names.length)
//filter:filter and extract the element of an array that satisfying the provided condition.
const define = ['judge', 'protect', 'custody', 'warrant'];

const police = define.filter((word) => {
    if(word === 'protect'){
        console.log(typeof word);  
    }
})

console.log(police);
// flatmap:It is a combination of flat() and map() mathods.intially maps each element through a mapping function,then flatten up,
//         the array array with depth value 1.
const fun=[1,2,3,4,5];
const ten= fun.flatMap((num) => (num===4?[2,2]:1));
console.log(ten);
// Foreach:Used to invoke the specified function once for each element.
const things = ["lappy", "keyboard", "mouse", "cursor"];

things.forEach(item => {
    console.log(item);
});
//indexof:it is used to select the particular element in given array, if the element is not present in the array it returns into -1.
const languages = ['c', 'java', 'javascript', 'python', 'react.js', 'vue.js'];
console.log(languages.indexOf('node'));
//lastindexof:it is used to check the position of the array
console.log(languages.lastIndexOf('vue.js'));
//map:specified function for every array element and returns the new array.this methos doesn't change the original array

const things = ["lappy", "keyboard", "mouse", "cursor"];

things.map(item => {
    console.log(item.length);
})

//reduce: the method reduces the given array into single value by executing a reducer function,
//the user impelments the reduce fuction to every element present in the array.
const muthyam = [1, 2, 3, 4];

const initialValue = 0;
const sumWithInitial = muthyam.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(sumWithInitial);
//reverse:changes the sequences given elements of the given array and returns the reverse sequence
let page=[11,22,33,44];
console.log("page:",page);
let book=page.reverse();
console.log(page);
//slice:extracts the part of the given array and returns it. This method doesn't change the original array.
let page=[11,22,33,44];
console.log(page.slice(1));
//sort:it is used to arrange array elements in the order.By default sort uses the ascending order.
let months=["jan","Mar","July","sep","Nov"]
months.sort();
console.log(months);
//splice:it is used to remove or add the elements from the existing array.
let months=["jan","Mar","July","sep","Nov"]
months.splice(1,0,"april");
console.log(months);

