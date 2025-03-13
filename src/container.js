// src/container.js
const BooksRepository = require('./repository');

class Container {
  constructor() {
    this.bindings = new Map();
  }

  bind(key, instance) {
    this.bindings.set(key, instance);
  }

  get(key) {
    return this.bindings.get(key);
  }
}

const container = new Container();
// Связываем интерфейс BooksRepository с его реализацией
container.bind('BooksRepository', new BooksRepository());

module.exports = container;