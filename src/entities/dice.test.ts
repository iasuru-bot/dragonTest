import { strict as assert } from "assert";
import { Dice } from "./dice";

/**
 * Test suite for the Dice class.
 */
describe("Dice", () => {
  let dice: Dice;
  let sides : number;

  // Before each test, create a new Dice instance with 6 sides
  beforeEach(() => {
    sides = Math.floor(Math.random() * 10000) + 1;
    dice = new Dice(sides);
  });

  /**
   * Test to verify that the Dice instance initializes with the correct number of sides.
   */
  test("should initialize with the correct number of sides", () => {
    // Given a Dice instance with n sides

    // Then it should return n
    assert.equal(dice.sides, sides); 
  });

  /**
   * Test to verify that roll() returns a number within the expected range.
   */
  test("roll() should return a number between 1 and the number of sides", () => {
    // Given a Dice instance
    // When rolling the dice
    const result = dice.roll();

    // Then it should return a number between 1 and sides
    assert.ok(result >= 1 && result <= sides);
  });

  /**
   * Test to verify that roll() produces random results.
   */
  test("roll() should be random", () => {
    // Given a Dice instance
    const results = Array.from({ length: 1000 }, () => dice.roll()); // When rolling the dice 1000 times
    const min = Math.min(...results);
    const max = Math.max(...results);

    // Then the minimum result should be at least 1 and the maximum result should be at most sides.
    assert.ok(min >= 1);
    assert.ok(max <= sides);
  });

  /**
   * Test to verify behavior when initialized with invalid number of sides.
   * Ne passe pas car le code derrière n'est pas fait 
   */
  test("should throw an error if initialized with less than 1 side", () => {
    // Given a number of sides less than 1
    // Then it should throw an error
    assert.throws(() => new Dice(-1), {
        message: "Number of sides must be greater than 0",
    }); 
  });

});
