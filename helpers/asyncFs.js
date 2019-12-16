const fs = require('fs');
const {promisify} = require('util');

const asyncFsStat = promisify(fs.stat);
const asyncFsWriteFile = promisify(fs.writeFile);
const asyncFsReadFile = promisify(fs.readFile);
const asyncFsCopyFile = promisify(fs.copyFile);
const asyncFsReadDir = promisify(fs.readdir);
const asyncFsMkdir = promisify(fs.mkdir);
const asyncFsUnlink = promisify(fs.unlink);

module.exports = {
    asyncFsStat,
    asyncFsWriteFile,
    asyncFsReadFile,
    asyncFsCopyFile,
    asyncFsReadDir,
    asyncFsMkdir,
    asyncFsUnlink,
};
