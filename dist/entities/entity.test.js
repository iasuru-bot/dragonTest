"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const entity_1 = require("./entity");
const assert_1 = require("assert");
/**
 * Test suite for the Entity class.
 */
describe('Entity', () => {
    let entity;
    // Before each test, create a new Entity instance
    beforeEach(() => {
        // Given an Entity instance
        entity = new entity_1.Entity('Hero', 100, 10);
    });
    /**
     * Test to verify that the Entity initializes with the correct properties.
     */
    test('should initialize with correct properties', () => {
        // When checking its properties
        // Then it should have the correct properties
        assert_1.strict.equal(entity.name, 'Hero');
        assert_1.strict.equal(entity.maxHealth, 100);
        assert_1.strict.equal(entity.currentHealth, 100);
        assert_1.strict.equal(entity.damage, 10);
    });
    /**
     * Test to verify the isAlive() method.
     */
    test('isAlive() should return true when currentHealth is greater than 0', () => {
        // When checking if the entity is alive
        // Then it should return true
        assert_1.strict.ok(entity.isAlive());
    });
    test('isAlive() should return false when currentHealth is 0', () => {
        // When taking enough damage to reduce health to 0
        entity.takeDamage(100);
        // Then it should return false
        assert_1.strict.ok(!entity.isAlive());
    });
    /**
     * Test to verify the attack() method.
     */
    test('attack() should return a value based on the damage property', () => {
        // When attacking
        const damage = entity.attack();
        // Then it should return a value between 1 and the damage
        assert_1.strict.ok(damage >= 1 && damage <= 10);
    });
    /**
     * Test to verify the takeDamage() method.
     */
    test('takeDamage() should decrease currentHealth', () => {
        // Given an Entity instance with full health
        // When taking damage
        entity.takeDamage(30);
        // Then currentHealth should decrease accordingly
        assert_1.strict.equal(entity.currentHealth, 70);
    });
    test('takeDamage() should not allow currentHealth to go below 0', () => {
        // When taking lethal damage
        entity.takeDamage(200);
        // Then currentHealth should be 0
        assert_1.strict.equal(entity.currentHealth, 0);
    });
    /**
     * Test to verify the heal() method.
     */
    test('heal() should increase currentHealth', () => {
        // Given an Entity instance
        // Reduce health to 50
        entity.takeDamage(50);
        // When healing
        entity.heal(30);
        // Then currentHealth should increase accordingly
        assert_1.strict.equal(entity.currentHealth, 80);
    });
    /**
     * Test to verify the heal() method to not exceed maxHealth.
     */
    test('heal() should not allow currentHealth to exceed maxHealth', () => {
        // When healing
        entity.heal(50);
        // Then currentHealth should not exceed maxHealth
        assert_1.strict.equal(entity.currentHealth, 100);
    });
});
