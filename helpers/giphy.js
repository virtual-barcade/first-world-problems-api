const rp = require('request-promise');

module.exports.fetchGif = q => {
  const options = {
    url: `http://api.giphy.com/v1/gifs/search?q=${q}&api_key=${
      process.env.GIPHY_API_KEY
    }`,
  };

  return rp.get(options);
};
