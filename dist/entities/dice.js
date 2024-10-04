"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dice = void 0;
// Dice class: Represents a dice that can be rolled to generate a random number.
class Dice {
    /**
     * Constructor
     * @param sides - The number of sides on the dice.
     */
    constructor(sides) {
        this.sides = sides;
    }
    /**
     * Rolls the dice and returns a random number between 1 and the number of sides.
     * @returns A random number between 1 and the number of sides.
     */
    roll() {
        return Math.floor(Math.random() * this.sides) + 1;
    }
}
exports.Dice = Dice;
