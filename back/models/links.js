const mongoose = require('mongoose');

const linksSchema = new mongoose.Schema({
    Url: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        required: true
    }
});

const links = mongoose.model('links', linksSchema);
module.exports = links;