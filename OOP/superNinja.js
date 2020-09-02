// parent Ninja class
class Ninja {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.speed = 3;
    this.strength = 3;

  }

  sayName() {
    return console.log(`My name is ${this.name}`);
  }

  showStats() {
    return console.log(`My stats [ Name: ${this.name}, Speed: ${this.speed}, Strength: ${this.strength}, Health: ${this.health}]`);
  }

  drinkSake() {
    return this.health += 10;
  }
}

// child Sensei class
class Sensei extends Ninja {
  constructor(name){
    super();
    this.name = name;
    this.health = 200;
    this.speed = 10;
    this.strength = 10;
    this.wisdom = 10;
  }
  
  speakWisdom(){
    super.drinkSake();
    return console.log(`${this.name} says, "What one programmer can do in one month, two programmers can do in two months."`);

  }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
