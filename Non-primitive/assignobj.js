const target= {a:1,b:2};
const source= {a:10,c:4};
const returnedTarget= Object.assign(target,source);
console.log(target);
console.log(returnedTarget === target)