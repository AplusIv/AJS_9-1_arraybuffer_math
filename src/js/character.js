export default class Character {
  constructor(attack, distance) {
    this.attack = attack;
    this.distance = distance;
  }

  set attack(attack) {
    if (this.distance >= 1) {
      this._attack = Math.round(attack * (1.1 - this.distance * 0.1));
      // ??? линтер ругается на подчеркивание в свойстве. Как быть?
    }
  }

  get attack() {
    return this._attack;
  }

  set stoned(attack) {
    this.attack = attack;
    this._attack = Math.round(this.attack - Math.log2(this.distance) * 5);
  }

  get stoned() {
    return this._attack;
  }
}
