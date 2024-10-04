// Dice class: Represents a dice that can be rolled to generate a random number.
export class Dice {
  sides: number;

  /**
   * Constructor
   * @param sides - The number of sides on the dice.
   */
  constructor(sides: number) {
    this.sides = sides;
  }

  /**
   * Rolls the dice and returns a random number between 1 and the number of sides.
   * @returns A random number between 1 and the number of sides.
   */
  roll(): number {
    return Math.floor(Math.random() * this.sides) + 1;
  }
}
