export default class Character {
  constructor(name) {
    this.name = name;
  }

  isEqual(other) {
    return this.name === other.name;
  }
}
