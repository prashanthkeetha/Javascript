const myObj = {
    name: 'ibdigital',
    age: 5,
    greet: function() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

myObj.greet();
