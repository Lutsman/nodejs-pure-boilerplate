const fs = require('fs');
const path = require('path');

const {MIME_TYPES} = require('../constants');
const {asyncFsStat} = require('../helpers');

//serve static from the public
module.exports = async (publicDir, pathname, res) => {
    const filename = path.join(publicDir, pathname);
    try {
        await asyncFsStat(filename);
        const mimeType = MIME_TYPES[path.extname(filename).split(".")[1]];
        res.writeHead(200, mimeType);

        const fileStream = fs.createReadStream(filename);
        fileStream.pipe(res);
    } catch (e) {
        console.log(`not exists: ${filename}`);
        res.statusCode = 404;
        res.end('Not found');
    }
};
