/* 
Instructions: Create a Pokemon class with the following specifications:

Instance Properties:

name (String)
type (String)
level (Number, starts at 1)
health (Number, starts at 100)
Instance Methods:

attack(target) - reduces the target Pokemon's health by 10 multiplied by the Pokemon's level. Then print "{name} attacked {target.name}!"
levelUp() - increases level by 1 and increases health by 10. Then print "{name} leveled up to level {level}!"
isFainted() - returns true if health is 0 or below, false otherwise
Static Properties

Static property: allPokemon (array tracking all created Pokemon)
Static Methods

Static method: getTotalPokemon() - returns count of all Pokemon created
Static method: findByName(name) - searches the allPokemon array and returns matching Pokemon
Test your code:

Create two Pokemon instances and demonstrate:

One Pokemon attacking another
Leveling up a Pokemon
Attacking until one faints, then checking if it's fainted
*/

class Pokemon {
  static allPokemon = [];

  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.level = 1;
    this.health = 100;
    Pokemon.allPokemon.push(this);
  }

  attack(target) {
    target.health -= 10 * this.level;
    console.log(`${this.name} attacked ${target.name}!`);
  }

  levelUp() {
    this.level++;
    this.health += 10;
    console.log(`${this.name} leveled up to level ${this.level}!`);
  }

  isFainted() {
    return this.health <= 0;
  }

  static getTotalPokemon() {
    return Pokemon.allPokemon.length;
  }

  static findByName(name) {
    return Pokemon.allPokemon.find(pokemon => pokemon.name === name);
  }
}

const pokemon1 = new Pokemon('Pikachu', 'Electric');
const pokemon2 = new Pokemon('Charizard', 'Fire');

pokemon2.levelUp(); // level 2
pokemon2.levelUp(); // level 3
pokemon2.levelUp(); // level 4
pokemon2.attack(pokemon1); // Deals 4 * 10 damage to Pikachu
pokemon2.attack(pokemon1); // Deals 4 * 10 damage to Pikachu
pokemon2.attack(pokemon1); // Deals 4 * 10 damage to Pikachu
console.log(pokemon1.isFainted());

