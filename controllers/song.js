const spotify = require('../helpers/spotify.js');
/* const giphy = require('../helpers/giphy.js'); */
const songQueryGenerator = require('../helpers/song-query-generator.js');

module.exports.searchSongs = async (req, res) => {
  const q = songQueryGenerator(req.body.q);
  try {
    const token = await spotify.fetchAccessToken();
    const song = await spotify.fetchSong(q, token.access_token);
    /* const gif = await giphy.fetchGif('pokemon'); */
    res.json(song.tracks.items[0]);
  } catch (error) {
    res.json(error);
  }
};
