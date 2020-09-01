// var hello; hoisted to top
// console.log(hello); // outputs undefined
// var hello = 'world'; // assigns hello = "world";

// var needle = 'haystack'; // needle = 'haystack'; global variable
// test(); // interpreter runs function test() below
// function test() {
//   var needle = 'magnet'; // needle = 'magnet' function acts as a cage so needle stays within the scope of test();
//   console.log(needle); // outputs 'magnet' because the intrepreter has assigned needle = 'magnet' inside the scope of function
// }

// var brendan = 'super cool'; // brendan = 'super cool'; globla variable
// function print() {  // stores print() function in  memory to be called later
//   brendan = 'only okay'; // print() never invoked;
//   console.log(brendan);// print() never invoked;
// }
// console.log(brendan); // outputs 'super cool' because brendan = 'super cool' from the global variable;

// var food = 'chicken'; // var food = 'chicken' is assigned as global variable;
// console.log(food); // outputs 'chicken'
// eat(); // calls on function eat() below;
// function eat() { // var food; rises to the top of local function; function act as cages;
//   food = 'half-chicken'; // food = 'half-chicken' reassigned only in local scope of function;
//   console.log(food); // outputs 'half-chicken' from local variable;
//   var food = 'gone'; // food = 'gone' reassigned after console.log in local scope of function;
// }

// mean(); // intrepreter runs a TypeError saying mean is not a function because mean has not been defined and the intrepreter stops
// console.log(food);
// var mean = function () {
//   food = "chicken";
//   console.log(food);
//   var food = "fish";
//   console.log(food);
// }
// console.log(food);

// var genre; // var genre rises to the top as global variable;
// console.log(genre); // outputs undefined because genre hasn't been assigned yet;
// var genre = "disco"; // genre = "disco", assigns the global variable;
// rewind(); // calls on the function rewind below;
// function rewind() {
//   genre = "rock"; // assigns genre = "rock" in the local scope of function only;
//   console.log(genre); // outputs "rock"
//   var genre = "r&b"; // reassigns genre = "r&b" in local scope of function only;
//   console.log(genre); // outputs "r&b"
// }
// console.log(genre); // outputs "disco" from the global variable;

// dojo = "san jose"; // implies var dojo and assigns dojo = "san jose" as global variable;
// console.log(dojo); // outputs "san jose";
// learn(); // calls the function learn below;
// function learn() { // var dojo; rises to top of local function only;
//   dojo = "seattle"; // assigns dojo = "seattle" in local scope of function only;
//   console.log(dojo); // outputs "seattle";
//   var dojo = "burbank"; // reassigns dojo = "burbank";
//   console.log(dojo); // outputs "burbank";
// }
// console.log(dojo); // outputs "san jose" from global variable;

console.log(makeDojo("Chicago", 65)); // calls on function makeDojo below passing in two arguments then outputs { name : "Chicago", students : 65, hiring : true}
console.log(makeDojo("Berkeley", 0)); // calls on function makeDojo below passing in different arguments then outputs dojo = "closed for now";
function makeDojo(name, students) {
  const dojo = {}; // creates an empty dojo object with name : value pairs as properties
  dojo.name = name; // assigns "Chicago" to "name" key.. dojo = {"name" : "Chicago" };
  dojo.students = students; // assigns "65" to "students" key,, dojo = {"name" : "Chicago", "students" : "65"}
  if (dojo.students > 50) { // checks to see if "students" key is larger than 50 which is true so code block below is executed
    dojo.hiring = true; // assigns "true" to "hiring" key,, dojo = {"name" : "Chicago", "students" : "65", "hiring" : "true"}
  }
  else if (dojo.students <= 0) {
    dojo = "closed for now"; // actually throws a TypeError: Assignnent to constant variable because a constant is immutable, therefore; type cannot be changed from object to string;
  }
  return dojo; // returns {name : "Chicago", students : 65, hiring : true} for first console.log
}