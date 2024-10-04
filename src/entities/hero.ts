import { Entity } from './entity';

/**
 * Hero class: Represents a hero character that inherits from Entity.
 */
export class Hero extends Entity {
  gold: number;
  sex: string; 

  /**
   * Constructor.
   * @param name - The name of the hero.
   * @param maxHealth - The maximum health of the hero.
   * @param damage - The damage dealt by the hero.
   * @param gold - The amount of gold the hero possesses.
   * @param sex - The sex of the hero.
   */
  constructor(name: string, maxHealth: number, damage: number, gold: number, sex: string) {
    super(name, maxHealth, damage); 
    this.gold = gold; 
    this.sex = sex;
  }
}
