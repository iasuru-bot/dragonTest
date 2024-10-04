"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
const dice_1 = require("./dice");
// Entity class: represents a character with health and a name
class Entity {
    /**
     * Constructor
     * @param name - The name of the entity.
     * @param maxHealth - The maximum health of the entity.
     * @param damage - The damage dealt by the entity.
     */
    constructor(name, maxHealth, damage) {
        this.name = name;
        this.maxHealth = maxHealth;
        this.currentHealth = maxHealth;
        this.damage = damage;
    }
    /**
     * Checks if the entity is alive based on its current health
     * @returns True if the entity is alive, otherwise false
     */
    isAlive() {
        return this.currentHealth > 0;
    }
    /**
     * Attacks and returns the damage dealt
     * @returns The amount of damage dealt, based on the entity's damage property
     */
    attack() {
        const dice = new dice_1.Dice(this.damage);
        return dice.roll();
    }
    /**
     * Reduces the entity's health by the given damage amount.
     * @param damage - The amount of damage to take.
     */
    takeDamage(damage) {
        this.currentHealth -= damage;
        if (this.currentHealth < 0)
            this.currentHealth = 0;
    }
    /**
     * Heals the entity by a specified amount.
     * @param amount - The amount of health to restore.
     */
    heal(amount) {
        this.currentHealth += amount;
        if (this.currentHealth > this.maxHealth)
            this.currentHealth = this.maxHealth;
    }
}
exports.Entity = Entity;
