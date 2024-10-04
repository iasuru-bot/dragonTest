import { Dice } from "./dice";

// Entity class: represents a character with health and a name
export class Entity {
  // The name of the entity
  name: string; 
  
  // The maximum health of the entity
  maxHealth: number; 
  
  // The current health of the entity
  currentHealth: number; 
  
  // The base damage the entity can deal
  damage: number; 

  /**
   * Constructor
   * @param name - The name of the entity.
   * @param maxHealth - The maximum health of the entity.
   * @param damage - The damage dealt by the entity.
   */
  constructor(name: string, maxHealth: number, damage: number) {
    this.name = name; 
    this.maxHealth = maxHealth; 
    this.currentHealth = maxHealth; 
    this.damage = damage; 
  }

  /**
   * Checks if the entity is alive based on its current health
   * @returns True if the entity is alive, otherwise false
   */
  isAlive(): boolean {
    return this.currentHealth > 0; 
  }

  /**
   * Attacks and returns the damage dealt
   * @returns The amount of damage dealt, based on the entity's damage property
   */
  attack(): number {
    const dice = new Dice(this.damage);
    return dice.roll(); 
  }

  /**
   * Reduces the entity's health by the given damage amount.
   * @param damage - The amount of damage to take.
   */
  takeDamage(damage: number): void {
    this.currentHealth -= damage;
    if (this.currentHealth < 0) this.currentHealth = 0;
  }

  /**
   * Heals the entity by a specified amount.
   * @param amount - The amount of health to restore.
   */
  heal(amount: number): void {
    this.currentHealth += amount; 
    if (this.currentHealth > this.maxHealth) this.currentHealth = this.maxHealth;
  }
}
