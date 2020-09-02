class Card{
  constructor(name, cost) {
    this.name = name;
    this.cost = cost;
  }
}

class Unit extends Card{
  constructor(name, cost, power, res){
    super(name, cost);
    this.power = power;
    this.res = res;
    return this;
  }

  attack (target) {
    if(target instanceof Unit ){
      target.res -= this.power;
      return target;
    }
    else {
      throw new Error("Target must be a unit!");
    }
  }
}

class Effect extends Card {
  constructor(name, cost, text, magnitude){
    super(name, cost);
    this.text = text;
    this.magnitude = magnitude;
    return this;
  }

  play(target){
    if (target instanceof Unit){
      if (this.text === "power"){
        target.power += this.magnitude;
        return target;
      }
      else if (this.text === "res") {
        target.res += this.magnitude;
        return target;

      } else {
        throw new Error ("Cannot use this card with this unit!");
      }
    }
    else {
      throw new Error("Target must be a unit!");
    }
  }
}

const rbn = new Unit("Red Belt Ninja", 3, 3, 4);
const bbn = new Unit("Black Belt Ninja", 4, 5, 4);
const hardAlgo = new Effect("Hard Algorithm", 2, "res", +3);
const promiseReject = new Effect("Unhandled Promise Rejection", 1, "res", -2);
const pairPros = new Effect("Pair Programming", 3, "power", +2);

//player 1
console.log("player 1 turns");
rbn;
hardAlgo.play(rbn);
console.log(`After this turn ${rbn.name}'s resilience has increased to ${rbn.res}`);
console.log(rbn);

//player 2
console.log("player 2 turns");
bbn;
console.log(`Player 2 has summoned ${bbn.name}`);
console.log(bbn);
promiseReject.play(rbn);
console.log(`After this turn ${rbn.name}'s resilience has decreased to ${rbn.res}`);

//player 1
console.log("player 1 turns");
pairPros.play(rbn);
console.log(rbn);
rbn.attack(bbn);
console.log("After the game");
console.log(rbn);
console.log(bbn);
console.log(`R.I.P ${bbn.name}`);
