// Problem #1
// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [randomCar] = cars // grabs value at first index gives Tesla
// const [, otherRandomCar] = cars // skips first value and gets second value then stores Mercedes
// //Predict the output
// console.log(randomCar) // outputs "Tesla"
// console.log(otherRandomCar) // outputs "Mercedes"

// Problem #2
// const employee = {
//   name: 'Elon',
//   age: 47,
//   company: 'Tesla'
// }
// const { name: otherName } = employee;
// //Predict the output
// console.log(name); // output undefined (ReferenceError: name is not defined, intrepreter stops here, next line is never execuded)
// console.log(otherName); // output "Elon"

// Problem #3
// const person = {
//   name: 'Phil Smith',
//   age: 47,
//   height: '6 feet'
// }
// const password = '12345';
// const { password: hashedPassword } = person;
// //Predict the output
// console.log(password); // outputs "12345"
// console.log(hashedPassword); // outputs undefined no property named password in person object

// Problem #4
// const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
// const [, first] = numbers; // 2
// const [, , , second] = numbers; // 5
// const [, , , , , , , , third] = numbers; // 2
// //Predict the output
// console.log(first == second); // outputs false
// console.log(first == third); // outputs true

// Problem #5
const lastTest = {
  key: 'value',
  secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest; // 'value'
const { secondKey } = lastTest; // [1, 5, 1, 8, 3, 3]
const [, willThisWork] = secondKey; // 5
//Predict the output
console.log(key); // outputs 'value'
console.log(secondKey); // outputs [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]); // outputs 1
console.log(willThisWork); // outputs 5