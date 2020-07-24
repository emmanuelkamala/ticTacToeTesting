const playerFactory = require('../src/Player');

test('Create Player names and their turn to play', () => {
    let testPerson = playerFactory('John', 'X')
    expect(testPerson).toEqual({name: 'John', mark: 'X'});
  });