class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi, I'am ${this.name} !`;
  }
  getDescription() {
    return `${this.name} is ${this.age} ${
      this.age > 1 ? 'years' : 'year'
    } old.`;
  }
}
// * subclass of Person
class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description += `Their major is ${this.major}.`;
    }
    return description;
  }
}

// * subclass of Person
class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age, homeLocation);
    this.homeLocation = homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();
    if (this.homeLocation) {
      greeting += ` I am visiting from ${this.homeLocation}.`;
    }
    return greeting;
  }
}

const me = new Traveler('Jimmy Wongprom', 38, 'Gotland');
console.log('me: ', me.getGreeting());

const other = new Traveler(undefined, undefined, 'under the bridge');
console.log(other.getGreeting());
