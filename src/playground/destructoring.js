//!Object detruycturing
// const person = {

//   name: 'Jimmy',
//   age: 45,
//   location: {
//     city: 'Stockholm',
//     temp: 30,
//   },
// };

// const { name: firstName = 'Anonymous Person', age } = person;
// console.log(`${firstName} is ${age}`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//   title: 'egon is the enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     // name: 'Penguin',
//   },
// };
// const { name: publischerName = 'Self-Publish' } = book.publisher;

// console.log(publischerName); // Penguin, Self-publish

//!Array Destructuring

// const address = ['Regementsgatan 29', 'Solna', 'Stockholm', '170 66'];
// const [, city, state = 'New York'] = address;
// console.log(`You are in ${city} ${state}.`);

const item = ['coffee (ice)', '$2.00', '$1.50', '$2.75'];
const [coffe, , mediumPrice] = item;
console.log(`A medium ${coffe} costs ${mediumPrice}.`);
