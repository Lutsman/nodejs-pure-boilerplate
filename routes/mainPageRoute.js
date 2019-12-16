const fs = require('fs');
const path = require('path');

module.exports = async (publicDir, res) => {
    const filePath = path.join(publicDir, 'index.html');
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
};
