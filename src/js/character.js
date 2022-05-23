export default class Character {
  constructor() {
    this.distance = 1; // по умолчанию атака ближайшей клетки
    this.stoned = false; // по умолчанию дурман отсутствует
  }

  set attack(attack) {
    this.baseAttack = attack;
  }

  get attack() {
    this.reducedAttack = Math.round(this.baseAttack * (1.1 - this.distance * 0.1));
    // Общая формула для любой дистанции

    if (this.distance > 1 && !this.stoned) {
      return this.reducedAttack;
    } if (this.distance > 1 && this.stoned) {
      this.reducedAttack = Math.round(this.reducedAttack - Math.log2(this.distance) * 5);
      return this.reducedAttack;
    }

    return this.baseAttack;
  }

  set stoned(status) {
    this.stonedStatus = status;
  }

  get stoned() {
    return this.stonedStatus;
  }
}
