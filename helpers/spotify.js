const rp = require('request-promise');

module.exports.fetchAccessToken = () => {
  const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`,
      ).toString('base64')}`,
    },
    form: {
      grant_type: 'client_credentials',
    },
    json: true,
  };

  return rp.post(authOptions);
};

module.exports.fetchSongBySearchTerm = (q, token) => {
  const options = {
    url: `https://api.spotify.com/v1/search?q=${q}&type=track&limit=1`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    json: true,
  };

  return rp.get(options);
};
