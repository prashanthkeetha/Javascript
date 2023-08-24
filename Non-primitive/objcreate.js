const personPrototype = {
    greet: function() {
      console.log(`Hello, my name is ${this.name}`);
    }
  };
  
  const person1 = Object.create(personPrototype);
  person1.name = "India";
  
  const person2 = Object.create(personPrototype);
  person2.name = "Telangana";
  
  person1.greet();
  person2.greet();
  

