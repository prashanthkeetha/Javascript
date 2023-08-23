const myObj = {
    name: 'ibdigital',
    age: 5,
    greet: function() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

if (typeof myObj === 'object' && myObj.hasOwnProperty('name')) {
    console.log(myObj.name);
} else {
    console.log("myObj is not an object or doesn't have the 'name' property.");
}

myObj.greet();
