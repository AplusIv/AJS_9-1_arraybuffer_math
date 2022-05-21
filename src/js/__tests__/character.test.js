// import Character from '../character';
import Daemon from '../daemon';
import Magician from '../magician';

test('should set / get attack for random person of Daemon class', () => {
  const daemon = new Daemon(100, 2);
  daemon.attack = 100; // ??? Почему сразу при инициализации экземпляра не срабатывает сеттер?
  expect(daemon.attack).toBe(90);
});

test('should set / get stoned for random person of Magician class', () => {
  const magician = new Magician(100, 3);
  magician.stoned = 100;
  expect(magician.stoned).toBe(72);
});
