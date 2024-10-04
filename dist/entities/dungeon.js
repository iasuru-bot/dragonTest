"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dungeon = void 0;
const fight_1 = require("./fight");
/**
 * Dungeon class: Represents a dungeon where heroes can explore and fight a dragon.
 */
class Dungeon {
    /**
     * Constructor.
     * @param heroes - The array of heroes exploring the dungeon.
     * @param dragon - The dragon that will be fought in the dungeon.
     */
    constructor(heroes, dragon) {
        this.heroes = heroes;
        this.dragon = dragon;
    }
    /**
     * Starts the exploration of the dungeon, allowing heroes to fight the dragon.
     */
    explore() {
        for (const hero of this.heroes) {
            const fight = new fight_1.Fight(hero, this.dragon);
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
exports.Dungeon = Dungeon;
