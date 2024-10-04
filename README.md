# DragonTest

## Description

Une bande de héros (et d’héroïnes, bien sûr) s’est introduit dans un donjon servant de repère à un dragon. Le dragon n’est évidemment pas content et décide de manger les intrus qui se présenteront, et de leur voler leur or.

## Fonctionnalités

- Plusieurs héros avec des attributs personnalisables (nom, santé maximale, dégâts et or).
- Un dragon avec des capacités spéciales, y compris des attaques de souffle et de guérison.
- Un système de combat qui gère les tours entre les héros et le dragon.
- Exploration du donjon avec la possibilité de vaincre le dragon.

## Installation

Pour commencer avec ce projet, suivez ces étapes :
Clonez le dépôt :

```bash
git clone <repository-url>
cd dragonTest
```

Installez les dépendances avec Yarn :

```bash
yarn install
```

## Utilisation

Pour générer le projet en javascript il faut faire :

```bash
yarn tsc
```

Puis pour l'éxecuter il faut faire:

```bash
node dist/game.js
```

Pour commencer une exploration de donjon, créez des héros et un dragon, puis appelez la méthode `explore()` sur une instance de `Dungeon`. Voici un exemple de base :

```typescript
import { Dragon } from "./entities/dragon";
import { Dungeon } from "./entities/dungeon";
import { Hero } from "./entities/hero";

// Créer des héros et un dragon
const hero1 = new Hero("Héros1", 200, 6, 32);
const hero2 = new Hero("Héros2", 250, 6, 32);
const dragon = new Dragon("Dragon Avide", 5000, 3, 300);

// Démarrer une exploration de donjon
const dungeon = new Dungeon([hero1, hero2], dragon);
dungeon.explore();
```

## Exécution des Tests

Ce projet utilise Jest pour les tests. Pour exécuter les tests, utilisez la commande suivante :

```bash
yarn test
```

Pour vérifier la couverture des tests, vous pouvez exécuter :

```bash
yarn test --coverage
```

## Technologies Utilisées

- TypeScript
- Jest pour les tests
- Sinon pour les mocks
- Node.js
