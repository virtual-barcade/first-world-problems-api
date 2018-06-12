/* eslint-disable no-undef */
const songQueryGenerator = require('../helpers/song-query-generator');
const library = require('../helpers/song-library');

describe('songQueryGenerator', () => {
  test('should return a string', () => {
    const result = songQueryGenerator('sample input');
    expect(typeof result).toBe('string');
  });

  test('should return a song from the food category if given a keyword that belongs to the food category', () => {
    const result = songQueryGenerator('pizza');
    const foodSongs = library.songs.food;
    expect(foodSongs.includes(result)).toBe(true);
  });

  test('should return a song from the money category if given a keyword that belongs to the money category', () => {
    const result = songQueryGenerator('wallet');
    const moneySongs = library.songs.money;
    expect(moneySongs.includes(result)).toBe(true);
  });

  test('should return a song from the etc category if given a keyword that does not belong to a specific category', () => {
    const result = songQueryGenerator('ooga booga');
    const etcSongs = library.songs.etc;
    expect(etcSongs.includes(result)).toBe(true);
  });
});
