const express = require('express');

const songControllers = require('../controllers/song.js');

const router = express.Router();

router.route('/song/:problem').get(songControllers.searchSongs);

module.exports = router;
