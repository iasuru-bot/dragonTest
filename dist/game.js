"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dragon_1 = require("./entities/dragon");
const dungeon_1 = require("./entities/dungeon");
const hero_1 = require("./entities/hero");
// Create heroes and a dragon
const hero1 = new hero_1.Hero("Hero1", 200, 6, 32, "Male");
const hero2 = new hero_1.Hero("Hero2", 250, 6, 32, "Male");
const dragon = new dragon_1.Dragon("Greedy Dragon", 5000, 3, 300);
// Start a dungeon exploration
const dungeon = new dungeon_1.Dungeon([hero1, hero2], dragon);
dungeon.explore();
