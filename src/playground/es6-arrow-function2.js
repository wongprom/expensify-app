// es5
const add = function (a, b) {
  console.log(arguments);
  return a + b;
};
console.log(add(33, 55));

const user = {
  name: 'Jimmy',
  cities: ['Gotland', 'stockholm', 'Bangkok'],
  printPlacesLived() {
    console.log('this.name: ', this.name);
    console.log('this.cities: ', this.cities);

    this.cities.forEach((city) => {
      console.log(this.name + ' has lived in ' + city);
    });
  },
};
user.printPlacesLived();

const multiplier = {
  numbers: [4, 7, 19],

  multiply(multiplyBy) {
    return this.numbers.map((number) => number * multiplyBy);
  },
};
console.log(multiplier.multiply(2));
