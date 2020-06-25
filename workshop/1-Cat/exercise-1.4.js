// Exercise 1.4
// ------------
// Creating a Cat class - Part 4

// A) So far so good.
//    In real life, we naturally get more tired/hungry/lonely as time passes.
//    Let's add a new method, `wait`. It accepts a number of minutes as the
//    parameter. The cat's tiredness, hunger, and loneliness should increase
//    as the amount of time increases. They should also become less happy.
//
//    It's up to you to decide how quickly these values should change.

// B) Make Boots wait 20 minutes and call then console.log(boots);

class Cat {
  constructor(name, breed) {
    this.species = "cat";
    this.tiredness = 0;
    this.hunger = 0;
    this.loneliness = 0;
    this.happiness = 0;
    this.name = name;
    this.breed = breed;
  }
  sleep = (hours) => {
    this.tiredness -= hours * 5;
    this.happiness += hours * 3;
  };

  eat = (kibbles) => {
    this.hunger -= kibbles / 5;
    this.happiness += kibbles / 4;
  };

  play = (minutes) => {
    this.loneliness -= minutes * 3;
    this.happiness += minutes * 5;
  };

  wait = (minutes) => {
    this.tiredness += minutes / 2;
    this.hunger += minutes / 10;
    this.loneliness += minutes;
    this.happiness -= minutes / 2;
  };
}

const boots = new Cat("Boots", "calico");
console.log(boots);

boots.sleep(2);
boots.eat(20);
boots.play(10);
boots.wait(20);

console.log(boots);
