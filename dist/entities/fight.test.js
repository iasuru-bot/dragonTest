"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fight_1 = require("./fight");
const dragon_1 = require("./dragon");
const hero_1 = require("./hero");
const assert_1 = require("assert");
/**
 * Test suite for the Fight class.
 */
describe('Fight', () => {
    let hero;
    let dragon;
    let fight;
    // Before each test, create a new Fight instance
    beforeEach(() => {
        // Given
        hero = new hero_1.Hero('Brave Hero', 100, 15, 200, "Male");
        dragon = new dragon_1.Dragon('Fierce Dragon', 50, 3, 10);
        fight = new fight_1.Fight(hero, dragon);
    });
    /**
     * Test to verify that the fight starts and ends correctly.
     * Ne passe pas car il faudrait mettre un mock ici pour oneshot le dragon
     */
    test('should correctly process turns and determine the outcome of the fight', () => {
        // When starting the fight
        fight.start();
        // Then it should indicate that the dragon is defeated
        assert_1.strict.ok(!dragon.isAlive());
        assert_1.strict.equal(hero.currentHealth, 100);
    });
    /**
     * Test to verify that the fight can handle a defeated hero.
     */
    test('should handle case where hero is defeated', () => {
        // Given a Hero with low health
        hero.takeDamage(100);
        // When starting the fight
        fight.start();
        // Then it should indicate that the hero is slain
        assert_1.strict.ok(!hero.isAlive());
        assert_1.strict.equal(dragon.lair, 200); // Dragon should take the hero's gold
    });
    /**
     * Test to verify that the fight alternates between hero and dragon.
     */
    test('should alternate turns between hero and dragon', () => {
        // Given a Fight instance
        const initialHeroHealth = hero.currentHealth;
        const initialDragonHealth = dragon.currentHealth;
        // When starting the fight
        fight.start();
        // Then the hero's health should decrease after the dragon's attack
        assert_1.strict.ok(hero.currentHealth < initialHeroHealth);
        // And the dragon's health should decrease after the hero's attack
        assert_1.strict.ok(dragon.currentHealth < initialDragonHealth);
    });
    /**
     * Test to verify that the fight can handle no damage scenarios.
     * Ne passe pas car le code derrière n'est pas fait pour gérer ca
     */
    test('should handle no damage scenarios', () => {
        // Given a Hero with zero damage
        const weakHero = new hero_1.Hero('Weak Hero', 100, 0, 200, "Male");
        const weakFight = new fight_1.Fight(weakHero, dragon);
        // When starting the fight
        weakFight.start();
        // Then the dragon's health should remain unchanged
        assert_1.strict.equal(dragon.currentHealth, 50);
    });
});
