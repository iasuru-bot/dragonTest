"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dragon = void 0;
const dice_1 = require("./dice");
const entity_1 = require("./entity");
// Dragon class: a specialized Entity with a special attack (breath)
class Dragon extends entity_1.Entity {
    /**
     * Constructor.
     * @param name - The name of the dragon.
     * @param maxHealth - The maximum health of the dragon.
     * @param breathCooldown - The cooldown time for the breath attack.
     * @param damage - The initial damage dealt by the dragon.
     */
    constructor(name, maxHealth, breathCooldown, damage) {
        super(name, maxHealth, damage);
        this.breathCooldown = breathCooldown;
        this.currentCooldown = 0;
        this.lair = 0;
    }
    /**
     * Performs a breath attack if the cooldown has expired.
     * @returns The damage dealt by the breath attack, or 0 if on cooldown.
     */
    breathAttack() {
        if (this.currentCooldown === 0) {
            this.currentCooldown = this.breathCooldown;
            return new dice_1.Dice(this.damage * 2).roll();
        }
        else {
            this.currentCooldown--;
            return 0;
        }
    }
    /**
     * Adds the hero's gold to the dragon's lair.
     * @param hero - The hero whose gold will be taken.
     */
    takeHeroGold(hero) {
        this.lair += hero.gold;
    }
    /**
     * Heals the dragon by a specified amount.
     * @param amount - The amount of health to restore.
     */
    heal(amount) {
        this.currentHealth += amount;
        if (this.currentHealth > this.maxHealth) {
            this.currentHealth = this.maxHealth;
        }
    }
}
exports.Dragon = Dragon;
