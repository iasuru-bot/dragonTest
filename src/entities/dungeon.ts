import { Dragon } from "./dragon";
import { Fight } from "./fight";
import { Hero } from "./hero";

/**
 * Dungeon class: Represents a dungeon where heroes can explore and fight a dragon.
 */
export class Dungeon {
  // Array of heroes exploring the dungeon
  heroes: Hero[]; 
  
  // The dragon that the heroes will fight
  dragon: Dragon; 

  /**
   * Constructor.
   * @param heroes - The array of heroes exploring the dungeon.
   * @param dragon - The dragon that will be fought in the dungeon.
   */
  constructor(heroes: Hero[], dragon: Dragon) {
    this.heroes = heroes; 
    this.dragon = dragon;
  }

  /**
   * Starts the exploration of the dungeon, allowing heroes to fight the dragon.
   */
  explore(): void {
    for (const hero of this.heroes) {
      const fight = new Fight(hero, this.dragon);
      fight.start(); 

      if (!this.dragon.isAlive()) {
        console.log("The dragon has been defeated!"); 
        break;
      }
    }

    if (this.dragon.isAlive()) {
      console.log("All heroes have been slain!"); 
    }
  }
}
