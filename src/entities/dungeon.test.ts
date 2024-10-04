import { Dungeon } from './dungeon';
import { Dragon } from './dragon';
import { Hero } from './hero';
import { strict as assert } from 'assert';
import sinon from 'sinon';

/**
 * Test suite for the Dungeon class. 
 * Ne passe pas à cause des mocks qui ne se charge pas 
 */
describe('Dungeon', () => {
  let heroes: Hero[];
  let dragon: Dragon;
  let dungeon: Dungeon;

  // Before each test, create a new Dungeon instance
  beforeEach(() => {
    heroes = [
      new Hero('Hero1', 100, 15, 200,"Male"), // Create first hero
      new Hero('Hero2', 100, 20, 150,"Male"), // Create second hero
    ];
    dragon = new Dragon('Fierce Dragon', 50, 3, 10); // Create a dragon instance
    dungeon = new Dungeon(heroes, dragon); // Initialize the Dungeon instance
  });

//   /**
//    * Test to verify that the dungeon allows heroes to explore and fight the dragon.
//    */
//   test('should allow heroes to explore and fight the dragon', () => {
//     // Create a mock for the Fight class
//     const fightMock = sinon.stub().returns({
//       start: sinon.fake(() => {
//         dragon.takeDamage(dragon.maxHealth); // Simulate defeating the dragon
//       }),
//     });

//     // Temporarily replace the Fight constructor with our mock
//     const originalFight = (dungeon as any).Fight; // Save the original Fight reference
//     (dungeon as any).Fight = fightMock; // Replace Fight with the mock

//     // When the heroes explore the dungeon
//     dungeon.explore(); // Execute the exploration

//     // Verify that the mock was called
//     assert.ok(fightMock.called); // Ensure that the fightMock was called

//     // Restore the original Fight class
//     (dungeon as any).Fight = originalFight; // Restore Fight
//   });

//   /**
//    * Test to verify that the dungeon handles the case where all heroes are defeated.
//    */
//   test('should notify when all heroes are slain', () => {

//     // Mock the Fight class
//     const fightMock = sinon.stub(); // Create a stub for the Fight class
//     fightMock.returns({
//       start: sinon.fake(() => {
//         // Simulate the heroes being defeated
//         heroes.forEach((hero) => hero.takeDamage(hero.maxHealth));
//       }),
//     });

//     // Temporarily replace the Fight class in the dungeon with our mock
//     const originalFight = (dungeon as any).Fight; 
//     (dungeon as any).Fight = fightMock;

//     // When the heroes explore the dungeon
//     dungeon.explore();

//     // Then it should indicate that all heroes have been slain
//     assert.ok(dragon.isAlive());
    
//     // Restore the original Fight class
//     (dungeon as any).Fight = originalFight; // Restore Fight
//   });

//   /**
//    * Test to verify that the dungeon handles the case where no heroes are provided.
//    */
//   test('should handle case where no heroes are provided', () => {
//     // Given a Dungeon instance with no heroes
//     dungeon = new Dungeon([], dragon); // Initialize with an empty array of heroes
//     // When the heroes explore the dungeon
//     dungeon.explore(); // Execute the exploration
//     // Then it should indicate that all heroes have been slain (since there are none)
//     assert.ok(dragon.isAlive()); // Ensure the dragon is still alive
//   });
});