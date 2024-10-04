"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hero = void 0;
const entity_1 = require("./entity");
/**
 * Hero class: Represents a hero character that inherits from Entity.
 */
class Hero extends entity_1.Entity {
    /**
     * Constructor.
     * @param name - The name of the hero.
     * @param maxHealth - The maximum health of the hero.
     * @param damage - The damage dealt by the hero.
     * @param gold - The amount of gold the hero possesses.
     * @param sex - The sex of the hero.
     */
    constructor(name, maxHealth, damage, gold, sex) {
        super(name, maxHealth, damage);
        this.gold = gold;
        this.sex = sex;
    }
}
exports.Hero = Hero;
