module.exports = {
    preset: 'ts-jest', // Utilise ts-jest pour transformer les fichiers TypeScript
    testEnvironment: 'node', // Définit l'environnement de test
    testPathIgnorePatterns: ['/node_modules/', '/dist/'], // Ignore les dossiers de compilation
  };