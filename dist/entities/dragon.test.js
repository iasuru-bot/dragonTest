"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const dragon_1 = require("./dragon");
const hero_1 = require("./hero");
const entity_1 = require("./entity");
/**
 * Test suite for the Dragon class.
 */
describe("Dragon", () => {
    let dragon;
    // Before each test, create a new Dragon instance
    beforeEach(() => {
        dragon = new dragon_1.Dragon("Fierce Dragon", 50, 3, 10);
    });
    /**
     * Test to verify that the Dragon initializes with the correct properties.
     */
    test("should initialize with correct properties", () => {
        // Given a new Dragon instance
        // When checking its properties
        // Then it should have the correct value
        assert_1.strict.equal(dragon.name, "Fierce Dragon");
        assert_1.strict.equal(dragon.maxHealth, 50);
        assert_1.strict.equal(dragon.breathCooldown, 3);
        assert_1.strict.equal(dragon.currentCooldown, 0);
        assert_1.strict.equal(dragon.damage, 10);
        assert_1.strict.equal(dragon.lair, 0);
    });
    /**
     * Test to verify the breath attack functionality.
     */
    test("breathAttack() should deal damage when not on cooldown", () => {
        // Given a Dragon instance
        // When performing a breath attack
        const damage = dragon.breathAttack();
        // Then it should deal damage
        assert_1.strict.ok(damage > 0);
    });
    /**
     * Test to verify that breathAttack() respects cooldown.
     */
    test("breathAttack() should be on cooldown after use", () => {
        // Given a Dragon instance
        // When using the breath attack
        dragon.breathAttack();
        // Then it should be on cooldown
        assert_1.strict.equal(dragon.currentCooldown, 3);
        // Attempt to use breath attack again
        dragon.breathAttack();
        // Then it should decrease but still be active
        assert_1.strict.equal(dragon.currentCooldown, 2);
    });
    /**
     * Test to verify that the dragon takes gold from the hero.
     */
    test("takeHeroGold() should increase the dragon's lair gold", () => {
        // Given a Hero with gold
        const hero = new hero_1.Hero("Hero1", 20, 12, 100, "Male");
        // When the Dragon takes the Hero's gold
        dragon.takeHeroGold(hero);
        // Then the Dragon's lair gold should increase accordingly
        assert_1.strict.equal(dragon.lair, 100);
    });
    /**
     * Test to verify the behavior when trying to take gold from an invalid hero.
     *   * Ne passe pas car le code derrière n'est pas fait
     */
    test("takeHeroGold() should handle cases where hero is null", () => {
        // Given a Dragon instance and a null hero
        // Then it should throw an error
        assert_1.strict.throws(() => dragon.takeHeroGold(null), {
            message: "Invalid hero",
        });
    });
    /**
    * Test to verify that the Dragon inherits from Entity.
    */
    test('should be an instance of Entity', () => {
        // When checking its prototype
        // Then it should be an instance of Entity
        assert_1.strict.ok(dragon instanceof entity_1.Entity);
    });
    /**
     * Test to verify the isAlive() method inherited from Entity.
     */
    test('isAlive() should return true when currentHealth is greater than 0', () => {
        // When checking if the dragon is alive
        // Then it should return true
        assert_1.strict.ok(dragon.isAlive());
    });
    test('isAlive() should return false when currentHealth is 0', () => {
        // When taking enough damage to reduce health to 0
        dragon.takeDamage(50);
        // Then it should return false
        assert_1.strict.ok(!dragon.isAlive());
    });
    /**
     * Test to verify the attack() method inherited from Entity.
     */
    test('attack() should return a value based on the damage property', () => {
        // When attacking
        const damage = dragon.attack();
        // Then it should return a value between 1 and the damage
        assert_1.strict.ok(damage >= 1 && damage <= 10);
    });
    /**
     * Test to verify the takeDamage() method inherited from Entity.
     */
    test('takeDamage() should reduce currentHealth', () => {
        // When taking damage
        dragon.takeDamage(30);
        // Then currentHealth should decrease accordingly
        assert_1.strict.equal(dragon.currentHealth, 20);
    });
    test('takeDamage() should not allow currentHealth to go below 0', () => {
        // When taking lethal damage
        dragon.takeDamage(200);
        // Then currentHealth should be 0
        assert_1.strict.equal(dragon.currentHealth, 0);
    });
});
//Rajouter les tests sur le fait de se heal si c'est un male et pas un female
