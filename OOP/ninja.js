
class Ninja {
  constructor(name){
    this.name = name;
    this.health = 100;
    this.speed = 3;
    this.strength = 3;
    
  }

  sayName(){
    return console.log(`My name is ${this.name}`);
  }

  showStats(){
    return console.log(`My stats [ Name: ${this.name}, Speed: ${this.speed}, Strength: ${this.strength}, Health: ${this.health}]`);
  }

  drinkSake(){
    return this.health += 10;
  }
}

const ninja1 = new Ninja("Hyabusa");

ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.drinkSake();
ninja1.drinkSake();
ninja1.drinkSake();
ninja1.showStats();

module.exports = { Ninja };