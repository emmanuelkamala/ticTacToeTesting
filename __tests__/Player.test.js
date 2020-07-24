import { Player } from '../src/player';

describe('Player', () => {
  let player;
  beforeEach(() => {
    player = new Player();
  });

  it('has a player - x - when initialized', () => {
    expect(player.player1).toEqual('x');
  });

  it('has a player - o - when initialized', () => {
    expect(player.player2).toEqual('o');
  });
});
