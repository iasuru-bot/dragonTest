import { Dragon } from "./entities/dragon";
import { Dungeon } from "./entities/dungeon";
import { Hero } from "./entities/hero";

// Create heroes and a dragon
const hero1 = new Hero("Hero1", 200, 6, 32,"Male");
const hero2 = new Hero("Hero2", 250, 6, 32,"Male");
const dragon = new Dragon("Greedy Dragon", 5000, 3, 300);

// Start a dungeon exploration
const dungeon = new Dungeon([hero1, hero2], dragon);
dungeon.explore();
