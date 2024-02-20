import Character from '../character';
import Team from '../team';

test('testing add function for one char add', () => {
  const char1 = new Character('Ivan');
  const team = new Team();
  team.add(char1);
  expect(true).toEqual(team.members.has(char1));
});

test('testing add function for two identical chars', () => {
  const char1 = new Character('Ivan');
  const char2 = new Character('Ivan');
  const team = new Team();
  team.add(char1);
  expect(() => team.add(char2)).toThrow('This member is already added');
});

test('testing add function for array of not identical chars', () => {
  const char1 = new Character('Ivan');
  const char2 = new Character('Boris');
  const team = new Team();
  team.addAll(char1, char2);
  expect(true).toEqual(team.members.has(char1) && team.members.has(char2));
});

test('testing add function for array of identical chars', () => {
  const char1 = new Character('Ivan');
  const char2 = new Character('Ivan');
  const char3 = new Character('Boris');
  const team = new Team();
  team.addAll(char1, char2, char3);
  expect(true).toEqual(team.members.has(char1) && team.members.has(char3));
});

test('testing convertation to array', () => {
  const char1 = new Character('Ivan');
  const team = new Team();
  team.add(char1);
  expect(team.toArray()).toEqual([char1]);
});
