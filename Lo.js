// Example object
let person = {
  name: "John",
  age: 30
};

// Assigning a new value to the 'age' property using ref.field = val;
let ref = person; // ref now refers to the 'person' object

ref.age = 31; // Changes the 'age' property of 'person' to 31

console.log(person); // Output: { name: "John", age: 31 }
