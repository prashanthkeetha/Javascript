var NAME = Symbol();
var person = {
  [NAME]: 'Flavio'
};

console.log(typeof person[NAME]);

var RUN = Symbol();
person[RUN] = function() {
  return 'Person is running';
};
console.log(typeof person[RUN]());


let city = Symbol();
let place = {
  [city]: 'Capetown'
};

console.log(typeof place[city]);

var RUN = Symbol();
place[RUN] = function() {
  return 'finacial captial';
};
console.log(typeof place[RUN]());

