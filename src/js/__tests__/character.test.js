import Daemon from '../daemon';
import Magician from '../magician';

test('should set / get base attack for random person of Daemon class', () => {
  const daemon = new Daemon();
  daemon.attack = 100;
  expect(daemon.attack).toBe(100);
});

test('should set / get attack with certain distance for random person of Daemon class', () => {
  const daemon = new Daemon();
  daemon.attack = 100;
  daemon.distance = 2;
  expect(daemon.attack).toBe(90);
});

test('should set / get stoned for random person of Magician class', () => {
  const magician = new Magician();
  magician.stoned = true;
  expect(magician.stoned).toBeTruthy();
  magician.stoned = false;
  expect(magician.stoned).toBeFalsy();
});

test('Stoned person of Magician class has less attack than not stoned one', () => {
  const magician = new Magician();
  magician.attack = 100;
  magician.stoned = true;
  magician.distance = 3;
  expect(magician.attack).toBe(72);
});
