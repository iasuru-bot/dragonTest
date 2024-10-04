"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fight = void 0;
/**
 * Fight class: Manages the combat between a hero and a dragon.
 */
class Fight {
    /**
     * Constructor.
     * @param hero - The hero participating in the fight.
     * @param dragon - The dragon participating in the fight.
     */
    constructor(hero, dragon) {
        this.hero = hero;
        this.dragon = dragon;
        this.turn = 0; // Initialize the turn counter to 0
    }
    /**
     * Starts the fight between the hero and the dragon.
     */
    start() {
        while (this.hero.isAlive() && this.dragon.isAlive()) {
            this.turn++;
            console.log(`Turn ${this.turn}`);
            // Hero attacks first
            const heroDamage = this.hero.attack();
            this.dragon.takeDamage(heroDamage);
            console.log(`${this.hero.name} deals ${heroDamage} damage to ${this.dragon.name}. Dragon's HP: ${this.dragon.currentHealth}`);
            if (!this.dragon.isAlive())
                break; // Check if the dragon is defeated
            // Dragon counterattacks
            const dragonDamage = this.dragon.breathAttack() || this.dragon.attack(); // Calculate damage dealt by dragon
            this.hero.takeDamage(dragonDamage);
            console.log(`${this.dragon.name} deals ${dragonDamage} damage to ${this.hero.name}. Hero's HP: ${this.hero.currentHealth}`);
        }
        if (!this.hero.isAlive()) {
            // If hero is defeated, dragon takes the hero's gold
            this.dragon.takeHeroGold(this.hero);
            console.log(`${this.hero.name} has been slain!`);
        }
        else {
            // If hero is male , dragon healths
            if (this.hero.sex === 'male') {
                this.dragon.heal(this.hero.maxHealth / 2);
            }
            console.log(`${this.dragon.name} has been defeated!`);
        }
    }
}
exports.Fight = Fight;
