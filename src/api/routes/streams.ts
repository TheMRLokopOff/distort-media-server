const express = require('express');
const streamController = require('../controllers/streams');

export = (context) => {
    let router = express.Router();
    router.get('/', streamController.getStreams.bind(context));
    router.get('/:app/:stream', streamController.getStream.bind(context));
    router.delete('/:app/:stream', streamController.delStream.bind(context));
    return router;
};
