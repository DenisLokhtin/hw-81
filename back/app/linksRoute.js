const express = require('express');
const links = require('../models/links');
const {nanoid} = require('nanoid');

const router = express.Router();

router.get('/:shortUrl', async (req, res) => {
    try {
        const link = await links.findOne({shortUrl: req.params.shortUrl});
        if (link) {
            res.status(301).redirect(link.originalUrl);
        } else {
            res.sendStatus(404);
        }
    } catch (e) {
        res.sendStatus(500);
    }
});


router.post('/', async (req, res) => {
    if (!req.body.Url) {
        return res.status(400).send({error: "Invalid data"});
    }

    const link = {
        shortUrl: nanoid(7),
        Url: req.body.Url
    };

    const newLink = new links(link);

    try {
        await newLink.save();
        res.send(newLink);
    } catch (e) {
        res.status(500).send(e);
    }
});

module.exports = router;