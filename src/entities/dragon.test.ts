import { strict as assert } from "assert"; 
import { Dragon } from "./dragon";
import { Hero } from "./hero";
import { Entity } from "./entity";

/**
 * Test suite for the Dragon class.
 */
describe("Dragon", () => {
  let dragon: Dragon;

  // Before each test, create a new Dragon instance
  beforeEach(() => {
    dragon = new Dragon("Fierce Dragon", 50, 3, 10); 
  });

  /**
   * Test to verify that the Dragon initializes with the correct properties.
   */
  test("should initialize with correct properties", () => {
    // Given a new Dragon instance
    // When checking its properties
    // Then it should have the correct value
    assert.equal(dragon.name, "Fierce Dragon"); 
    assert.equal(dragon.maxHealth, 50); 
    assert.equal(dragon.breathCooldown, 3); 
    assert.equal(dragon.currentCooldown, 0); 
    assert.equal(dragon.damage, 10); 
    assert.equal(dragon.lair, 0);
  });

  /**
   * Test to verify the breath attack functionality.
   */
  test("breathAttack() should deal damage when not on cooldown", () => {
    // Given a Dragon instance
    // When performing a breath attack
    const damage = dragon.breathAttack(); 
    // Then it should deal damage
    assert.ok(damage > 0);
  });

  /**
   * Test to verify that breathAttack() respects cooldown.
   */
  test("breathAttack() should be on cooldown after use", () => {
    // Given a Dragon instance
    // When using the breath attack
    dragon.breathAttack(); 

    // Then it should be on cooldown
    assert.equal(dragon.currentCooldown, 3); 

    // Attempt to use breath attack again
    dragon.breathAttack(); 

    // Then it should decrease but still be active
    assert.equal(dragon.currentCooldown, 2); 
  });

  /**
   * Test to verify that the dragon takes gold from the hero.
   */
  test("takeHeroGold() should increase the dragon's lair gold", () => {
    // Given a Hero with gold
    const hero = new Hero("Hero1", 20, 12, 100,"Male");

    // When the Dragon takes the Hero's gold
    dragon.takeHeroGold(hero);

    // Then the Dragon's lair gold should increase accordingly
    assert.equal(dragon.lair, 100);
  });

  /**
   * Test to verify the behavior when trying to take gold from an invalid hero.
   *   * Ne passe pas car le code derrière n'est pas fait 
   */
  test("takeHeroGold() should handle cases where hero is null", () => {
    // Given a Dragon instance and a null hero
    // Then it should throw an error
    assert.throws(() => dragon.takeHeroGold(null as any), {
      message: "Invalid hero",
    }); 
  });

   /**
   * Test to verify that the Dragon inherits from Entity.
   */
   test('should be an instance of Entity', () => {
    // When checking its prototype
    // Then it should be an instance of Entity
    assert.ok(dragon instanceof Entity); 
  });

  /**
   * Test to verify the isAlive() method inherited from Entity.
   */
  test('isAlive() should return true when currentHealth is greater than 0', () => {
    // When checking if the dragon is alive
    // Then it should return true
    assert.ok(dragon.isAlive()); 
  });

  test('isAlive() should return false when currentHealth is 0', () => {
    // When taking enough damage to reduce health to 0
    dragon.takeDamage(50); 
    
    // Then it should return false
    assert.ok(!dragon.isAlive());
  });

  /**
   * Test to verify the attack() method inherited from Entity.
   */
  test('attack() should return a value based on the damage property', () => {
    // When attacking
    const damage = dragon.attack(); 
    
    // Then it should return a value between 1 and the damage
    assert.ok(damage >= 1 && damage <= 10);
  });

  /**
   * Test to verify the takeDamage() method inherited from Entity.
   */
  test('takeDamage() should reduce currentHealth', () => {
    // When taking damage
    dragon.takeDamage(30); 
    
    // Then currentHealth should decrease accordingly
    assert.equal(dragon.currentHealth, 20);
  });

  test('takeDamage() should not allow currentHealth to go below 0', () => {
    // When taking lethal damage
    dragon.takeDamage(200); 
    
    // Then currentHealth should be 0
    assert.equal(dragon.currentHealth, 0);
  });
});

//Rajouter les tests sur le fait de se heal si c'est un male et pas un female
