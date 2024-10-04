import { Hero } from './hero'; 
import { Entity } from './entity';
import { strict as assert } from 'assert';

/**
 * Test suite for the Hero class.
 */
describe('Hero', () => {
  let hero: Hero;

  // Before each test, create a new Hero instance
  beforeEach(() => {
    // Given a new Hero instance
    hero = new Hero('Brave Hero', 100, 15, 200,"Male"); 
  });

  /**
   * Test to verify that the Hero initializes with the correct properties.
   */
  test('should initialize with correct properties', () => {
    // When checking its properties
    // Then it should have the correct properties
    assert.equal(hero.name, 'Brave Hero');
    assert.equal(hero.maxHealth, 100); 
    assert.equal(hero.damage, 15); 
    assert.equal(hero.gold, 200); 
    assert.equal(hero.sex, "Male"); 
  });

  /**
   * Test to verify that the Hero inherits from Entity.
   */
  test('should be an instance of Entity', () => {
    // When checking its prototype
    // Then it should be an instance of Entity
    assert.ok(hero instanceof Entity); 
  });

  /**
   * Test to verify that the Hero can take damage.
   */
  test('takeDamage() should reduce currentHealth', () => {
    // When taking damage
    hero.takeDamage(30); 
    
    // Then currentHealth should decrease accordingly
    assert.equal(hero.currentHealth, 70);
  });

  /**
   * Test to verify that the Hero cannot take more damage than its current health.
   */
  test('takeDamage() should not allow currentHealth to go below 0', () => {
    // When taking lethal damage
    hero.takeDamage(200); 
    
    // Then currentHealth should be 0
    assert.equal(hero.currentHealth, 0);
  });
});
